class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.string :youtube_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :thumbnail_url, null: false
      t.integer :category_id, null: false
      t.integer :sub_category_id, null: false

      t.timestamps
    end
  end
end
