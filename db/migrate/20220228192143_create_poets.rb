class CreatePoets < ActiveRecord::Migration[6.1]
  def change
    create_table :poets do |t|
      t.string :name
    end
  end
end
