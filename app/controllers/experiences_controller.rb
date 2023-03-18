class ExperiencesController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  def index
    experiences = Experience.all
    render json: experiences, status: :ok
  end 

  def create
    experience = Experience.create!(experience_params)
    render json: experience, status: :created
  end

  def update
    experience = Experience.find_by(id: params[:id])
    if experience
      experience.update!(experience_params)
      render json: experience, status: :ok
    else
      raise ActiveRecord::RecordNotFound
    end
  end

  def destroy
    experience = Experience.find_by(id: params[:id])
    if experience
      experience.destroy
      head :no_content
    else
      raise ActiveRecord::RecordNotFound
    end
  end

  private

  def experience_params
    params.permit(:id, :comment, :user_id, :category_id)
  end

  def record_not_found_response
    render json: {errors: "Not found"}, status: :not_found
  end
end
