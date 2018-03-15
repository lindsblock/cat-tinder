class CreateCats < ActiveRecord::Migration[5.1]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :breed
      t.string :registry
      t.string :avatar

      t.timestamps
    end
  end
end
