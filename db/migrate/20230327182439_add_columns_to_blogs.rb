class AddColumnsToBlogs < ActiveRecord::Migration[7.0]
  def change
    add_column :blogs, :category, :string
    add_column :blogs, :date, :date
  end
end
