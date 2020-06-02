class RenameColumnInResources < ActiveRecord::Migration[6.0]
  def change
    rename_column :resources, :type, :resource_type
  end
end
