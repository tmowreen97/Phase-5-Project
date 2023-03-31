class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :username, :image
  has_many :experiences


end
