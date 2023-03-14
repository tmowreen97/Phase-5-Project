class CategoriesController < ApplicationController
  def index
    categories = Category.all
    render json: categories, status: :ok
  end

  def update
    category = Category.find_by(id: params[:id])
    category.update(category_params)
    render json: category, status: :ok
  end

  def show
    category = Category.find_by(id: params[:id])
    render json: category, status: :ok
  end

  private

  def category_params
    params.permit(:name, :id, :description, :img)
  end
end
