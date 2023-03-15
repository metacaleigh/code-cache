class CreateFolders < ActiveRecord::Migration[7.0]
  def change
    create_table :folders do |t|
      t.string :name
      t.belongs_to :user, null: false, foreign_key: true
      t.string :description
      t.string :image_url

      t.timestamps
    end
  end
end
