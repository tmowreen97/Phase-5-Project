class CategoryExperienceSerializer < ActiveModel::Serializer
  attributes :id, :comment, :category_id, :user_id, :username

  def username
    object.user.username
  end


end
