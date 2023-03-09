class User < ApplicationRecord
  validates :username, presence: true
  validates :password_digest, presence: true
  has_many :experiences
  has_many :categories, through: :experiences
end
