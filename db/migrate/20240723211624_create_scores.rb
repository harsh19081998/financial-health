class CreateScores < ActiveRecord::Migration[7.1]
  def change
    create_table :scores do |t|
      t.string :player
      t.integer :points

      t.timestamps
    end
  end
end
