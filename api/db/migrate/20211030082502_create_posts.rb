class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, foreign_key: true, null: false, index: true
      t.string :name, null: false, limit: 100
      t.text :content, null: false
      t.boolean :public, null: false, default: true, comment: "公開or非公開"
      t.timestamps
    end
  end
end
