class Api::FavoritesController < ApplicationController
  before_action :authenticate_user

  def index
    @favorites = current_user.favorites
    render "index.json.jb"
  end

  def create
    if !Favorite.where(:user_id=>params[:user_id]).where(:resource_id=>params[:resource_id]).first
      @favorite = Favorite.new(
        user_id: current_user.id,
        # user_id: params[:user_id],
        resource_id: params[:resource_id],
      )
      if @favorite.save
        render "show.json.jb"
      else
        render json: { errors: @favorite.errors.full_message }, status: :unprocessable_entity
      end
    else 
      render json: { message: "This is already a favorite!"}
    end 
  end

  def show
    @favorite = Favorite.find(params[:id])
    render "show.json.jb"
  end

  def destroy
    @favorite = Favorite.where(:user_id=>params[:user_id]).where(:resource_id=>params[:resource_id]).first
    @favorite.destroy
    render json: { message: "Favorite successfully removed." }
  end
end
