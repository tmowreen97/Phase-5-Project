class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  has_many :experiences, dependent: :destroy
  has_many :categories, through: :experiences
end