class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :avalibility, :price_level
  has_many :ingredients, :users, :menus
end
