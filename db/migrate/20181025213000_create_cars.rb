class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.integer :charge
      t.string :model
      t.string :make
      t.references :user, foreign_key: true
      t.string :nickname

      t.timestamps
    end
  end
end
