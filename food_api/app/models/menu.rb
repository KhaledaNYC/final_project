class Menu < ApplicationRecord
  has_many :users_menus
  has_many :users , through: :users_menus
  has_many :menus_recipes
  has_many :recipes, through: :menus_recipes
end
