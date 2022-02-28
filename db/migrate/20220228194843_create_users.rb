class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table do :users |t|
      t.string :name
    end
  end
end
