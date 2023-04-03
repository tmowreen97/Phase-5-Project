class UserSerializer < ActiveModel::Serializer
  attributes :id, :bio, :username, :image, :state, :city
  has_many :experiences


end
