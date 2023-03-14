class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :description

  has_many :activities
end
