class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :username
  has_many :experiences


end
