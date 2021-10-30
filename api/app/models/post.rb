class Post < ApplicationRecord
  validates :name, presence: true, length: { maximum: 100 }
  validates :content, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :user
end
