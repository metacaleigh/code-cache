class AddColumnToLinks < ActiveRecord::Migration[7.0]
  def change
    add_column :links, :is_starred, :boolean
  end
end
