class CategoryResourcesSerializer < ActiveModel::Serializer
  attributes :id, :url, :category_id, :description, :category

  def category
    object.category.name
  end
end
