class CreateResources < ActiveRecord::Migration[6.0]
  def change
    create_table :resources do |t|
      t.string :url
      t.string :name
      t.integer :type
      t.integer :format
      t.integer :difficulty
      t.integer :cost
      t.integer :user_id

      t.timestamps
    end
  end
end
