class AddColumnToStations < ActiveRecord::Migration[5.2]
  def change
    add_reference :stations, :user, foreign_key: true
  end
end
