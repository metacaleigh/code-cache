class CreateTaggables < ActiveRecord::Migration[7.0]
  def change
    create_table :taggables do |t|
      t.references :taggable, polymorphic: true, null: false
      t.integer :tag_id

      t.timestamps
    end
  end
end
