class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.integer :category_id
      t.string :url
      t.string :description
      t.timestamps
    end
  end
end
