class AddPlayernumToGames < ActiveRecord::Migration[6.1]
  def change
    add_column :games, :playernum, :integer
  end
end
