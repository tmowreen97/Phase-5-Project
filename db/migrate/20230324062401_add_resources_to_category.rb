class AddResourcesToCategory < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :resources, :string, array:true, default:[]
  end
end
