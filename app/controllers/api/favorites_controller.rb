class Api::FavoritesController < ApplicationController
  before_action :authenticate_user

  def index
    @favorites = current_user.favorites
    render "index.json.jb"
  end

  def create
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
  end

  def show
    @favorite = Favorite.find(params[:id])
    render "show.json.jb"
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy
    render json: { message: "Favorite successfully removed." }
  end
end
