class CreateExperiences < ActiveRecord::Migration[6.1]
  def change
    create_table :experiences do |t|
      t.string :comment
      t.integer :user_id
      t.integer :category_id

      t.timestamps
    end
  end
end
