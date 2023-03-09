class Category < ApplicationRecord
  has_many :activities
  has_many :experiences
  has_many :users, through: :experiences

  validates :name, presence: true
  validates :description, presence: true

end
