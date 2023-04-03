class ActivitiesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
  def index
    activities = Activity.all
    render json: activities, status: :ok
  end

  def update
    activity = Activity.find_by(id: params[:id])
    activity.update!(activity_params)
    render json: activity, status: :ok
  end

  def show
    activity = Activity.find_by(id: params[:id])
    render json: activity, status: :ok
  end

  private

  def not_found_response
    render json: {errors: 'Not found'}, status: :not_found
  end

  def activity_params
    params.permit(:name, :category_id, :id, :description)
  end
end
