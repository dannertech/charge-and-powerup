class CreateStations < ActiveRecord::Migration[5.2]
  def change
    create_table :stations do |t|
      t.string :title
      t.string :town
      t.string :addressline1
      t.string :postcode
      t.string :contacttelephone1

      t.timestamps
    end
  end
end
