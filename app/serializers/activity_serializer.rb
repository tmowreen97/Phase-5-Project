class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :category_id, :name, :description, :category
# attributes :name, :id 
  def category
    object.category.name
  end
end
