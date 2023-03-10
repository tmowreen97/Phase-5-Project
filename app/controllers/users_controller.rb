class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  #signup
  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id]||= user.id
      render json: user, status: :created
    else
      raise ActiveRecord::RecordInvalid
    end
  end

  #profile
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok
    else
      raise ActiveRecord::RecordNotFound
    end
  end


  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :bio)
  end

  def render_unprocessable_entity
    render json: {errors: error.record.full_messages}, status: :unprocessable_entity
  end

  def render_not_found_response
    render json: {error: "Not found"}, status: :not_found
  end
end
