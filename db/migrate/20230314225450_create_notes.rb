class CreateNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :notes do |t|
      t.string :note_name
      t.text :note

      t.timestamps
    end
  end
end
