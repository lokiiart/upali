class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.string :customer
      t.string :price
      t.string :phone
      t.string :address
      t.string :payment
      t.text :notes

      t.timestamps
    end
  end
end
