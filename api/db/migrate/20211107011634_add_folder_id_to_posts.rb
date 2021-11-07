class AddFolderIdToPosts < ActiveRecord::Migration[6.1]
  def change
    add_reference :posts, :folder, foreign_key: true, null: true, index: true
  end
end
