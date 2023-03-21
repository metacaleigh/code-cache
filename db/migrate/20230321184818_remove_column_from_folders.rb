class RemoveColumnFromFolders < ActiveRecord::Migration[7.0]
  def change
    remove_column :folders, :image_url
  end
end
