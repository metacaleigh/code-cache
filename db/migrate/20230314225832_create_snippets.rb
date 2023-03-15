class CreateSnippets < ActiveRecord::Migration[7.0]
  def change
    create_table :snippets do |t|
      t.string :snippet_name
      t.string :description
      t.text :snippet

      t.timestamps
    end
  end
end
