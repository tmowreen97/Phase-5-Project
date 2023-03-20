class ExperienceSerializer < ActiveModel::Serializer
  attributes :id, :comment, :category_id, :user_id, :username, :category

  def username
    object.user.username
  end

  def category 
    object.category.name
  end
end
