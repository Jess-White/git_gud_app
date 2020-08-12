class AddAuthorToResources < ActiveRecord::Migration[6.0]
  def change
    add_column :resources, :author, :string
  end
end
