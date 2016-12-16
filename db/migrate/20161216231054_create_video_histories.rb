class CreateVideoHistories < ActiveRecord::Migration[5.0]
  def change
    create_table :video_histories do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end
  end
end
