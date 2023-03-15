class CreateLinks < ActiveRecord::Migration[7.0]
  def change
    create_table :links do |t|
      t.string :link_name
      t.string :description
      t.string :link_url

      t.timestamps
    end
  end
end
