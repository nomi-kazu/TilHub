class AddParentIdToFolder < ActiveRecord::Migration[6.1]
  def up
    add_column :folders, :parent_id, :bigint
  end

  def down
    remove_column :folders, :parent_id, :bigint
  end
end
