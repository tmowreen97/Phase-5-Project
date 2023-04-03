class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true
  validates :state, presence: true
  validates :city, presence: true


  has_many :experiences, dependent: :destroy
  has_many :categories, through: :experiences
end