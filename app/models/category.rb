class Category < ApplicationRecord
  has_many :activities
  has_many :experiences
  has_many :users, through: :experiences
  has_many :resources

  validates :name, presence: true
  validates :description, presence: true
  

end
