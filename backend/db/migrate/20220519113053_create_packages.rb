class CreatePackages < ActiveRecord::Migration[7.0]
  def change
    create_table :packages do |t|
      t.string :name
      t.integer :days
      t.date :start
      t.date :stop

      t.timestamps
    end
  end
end
