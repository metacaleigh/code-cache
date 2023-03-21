class AddColumnToSnippets < ActiveRecord::Migration[7.0]
  def change
    add_column :snippets, :is_starred, :boolean
  end
end
