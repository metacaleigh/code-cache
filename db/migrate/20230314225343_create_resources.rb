class CreateResources < ActiveRecord::Migration[7.0]
  def change
    create_table :resources do |t|
      t.belongs_to :folder, null: false, foreign_key: true
      t.references :resourceable, polymorphic: true, null: false

      t.timestamps
    end
  end
end
