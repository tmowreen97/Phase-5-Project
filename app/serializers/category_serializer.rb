class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :img, :description, :comment

  has_many :activities, serializer: CategoryActivitiesSerializer
  has_many :experiences, serializer: CategoryExperienceSerializer

  def comment
    object.experiences
  end
end
