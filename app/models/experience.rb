class Experience < ApplicationRecord
  validates :comment, presence: true
  belongs_to :user
  belongs_to :category
end
