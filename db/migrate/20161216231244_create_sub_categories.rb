class CreateSubCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :sub_categories do |t|
      t.integer :category_id, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
