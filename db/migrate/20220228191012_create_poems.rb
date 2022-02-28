class CreatePoems < ActiveRecord::Migration[6.1]
  def change
    create_table :poems do |t|
      t.string :title
      t.text :body
      t.integer :date
      t.integer :poet_id
    end
  end
end
