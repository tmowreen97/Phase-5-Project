class CategoryActivitiesSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :category

  def category
    object.category.name
  end
end
