class CreatePreferences < ActiveRecord::Migration[5.0]
  def change
    create_table :preferences do |t|
      t.integer :user_id, null: false
      t.integer :sub_category_id, null: false
      t.integer :weight, null: false, default: 100

      t.timestamps
    end
  end
end
