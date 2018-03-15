class AddLikedCatsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :liked_cats, :text
  end
end
