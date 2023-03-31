class ChangeImageInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :image, :string, :default=>'https://cdn-icons-png.flaticon.com/512/1933/1933588.png'
  end
end
