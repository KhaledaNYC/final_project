module Api
  module V1

    class IngredientsController < ApplicationController

      before_action find_ingredient :show, :edit, :destroy, :update

      def index
        render json: Ingredient.all
      end

      def show
        render json: Ingredient.find(params[:id])
      end

      def create
        ingredient
 = Ingredient.new(ingredient
  _params)
        if ingredient
  .save
          render json: ingredient

        else
          render json: {status: 500, err: 'Ingredient could not be found'}
        end
      end

      def update
        ingredient
 = Ingredient.find(params[:id])
        if ingredient
  .update(ingredient
  _params)
          render json: ingredient

        else
          render json: {status: 500, err: 'Ingredient could not be updated'}
        end
      end

      def destroy
        ingredient
 = Ingredient.find(params[:id])
        if ingredient

          ingredient
  .destroy
          head :ok
        else
          render json: {status: 400, err: "ingredient
     with id of #{params[:id]} not found"}
        end
      end

      private

      def ingredient
_params
        params.require(:ingredient
).permit(:price, :name, :availability, recipe_ids:[])
      end

    end

end

end
