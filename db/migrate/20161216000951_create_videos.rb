class CreateVideos < ActiveRecord::Migration[5.0]
  def change
    create_table :videos do |t|
      t.integer :youtube_id
      t.string :name
      t.time :runtime
      t.integer :category_id
      t.string :description

      t.timestamps
    end
  end
end
