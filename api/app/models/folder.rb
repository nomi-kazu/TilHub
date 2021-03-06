class Folder < ApplicationRecord
  belongs_to :user

  has_many :posts, dependent: :destroy
  has_many :child_relationships, dependent: :destroy, foreign_key: 'parent_id', class_name: 'FolderRelationship'
  has_many :child_folders, through: :child_relationships, source: :child, dependent: :destroy

  validates :name, presence: true, length: { maximum: 50 }
  validates :public, inclusion: { in: [true, false] }
end
