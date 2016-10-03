
class UsersController < ApplicationController

  before_action :find_user, only: [:show, :edit, :destroy, :update]

  def index
  end

  def show
    @users = User.all
  end

  def new
    @user = User.new(user_params)
  end

  def create
    @user = User.new(user_params)
    if @user.save
      sessions[:user_id] = @user.idea
      redirect_to user_path(@user)
    else
      render 'new'
    end
  end

  def edit
  end

  def update

  end

  def destroy
  end


  private

  def find_user
    @user = User.find(params[:id])
  end
    def user_params
      params.require(:user).permit(:name, :password, :email, recipe_ids:[], menu_ids:[])
    end
end
