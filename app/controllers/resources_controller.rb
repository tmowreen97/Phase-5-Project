class ResourcesController < ApplicationController

  def index
    resources = Resource.all
    render json: resources, status: :ok
  end

  def update
    resource = Resource.find_by(id: params[:id])
    resource.update!(resource_params)
    render json: resource, status: :ok
  end

  private

  def resource_params
    params.permit(:description, :url, :category_id, :id)
  end
end
