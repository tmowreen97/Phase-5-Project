class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :category_id, :name, :category

  def category
    object.category.name
  end
end
