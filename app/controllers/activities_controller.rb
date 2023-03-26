class ActivitiesController < ApplicationController
  def index
    activities = Activity.all
    render json: activities, status: :ok
  end

  def update
    activity = Activity.find_by(id: params[:id])
    activity.update(activity_params)
    render json: activity, status: :ok
  end

  private

  def activity_params
    params.permit(:name, :category_id, :id)
  end
end
