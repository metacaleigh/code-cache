class AddColumnToFolders < ActiveRecord::Migration[7.0]
  def change
    add_column :folders, :folder_color, :string
  end
end
