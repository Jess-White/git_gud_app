class Api::ResourcesController < ApplicationController
  before_action :authenticate_user

  def index
    @resources = Resource.all
    @resources = @resources.order(id: :asc)
    render "index.json.jb"
    # this is from the tutorial
    # params[:tag] ? @resources = Resource.tagged_with(params[:tag]) : @resources = Resource.all
  end

  #this is from the tutorial
  # def new
  #   @resource = Resource.new
  # end

  def create
    @resource = Resource.new(resource_params)
    if @resource.save
      # redirect_to @resource
      render "show.json.jb"
    else
      # render :new
      render json: { errors: @resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  #

  def show
    @resource = Resource.find(params[:id])
    render "show.json.jb"
  end

  def update
    @resource = Resource.find(params[:id])
    @resource.url = params[:url] || @resource.url
    @resource.name = params[:name] || @resource.name
    @resource.resource_type = params[:resource_type] || @resource.resource_type
    @resource.format = params[:format] || @resource.format
    @resource.difficulty = params[:difficulty] || @resource.difficulty
    @resource.cost = params[:cost] || @resource.cost
    if @resource.save
      render "show.json.jb"
    else
      render json: { errors: @resource.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @resource = Resource.find(params[:id])
    @resource.destroy
    render json: { message: "Resource successfully destroyed" }
  end

  private

  def resource_params
    # Original from tutorial
    # params.require(:resource).permit(:url, :name, :resource_type, :format, :difficulty, :cost, :user_id, :tag_list, :tag, { tag_ids: [] }, :tag_ids)
    params.permit(:url, :name, :resource_type, :format, :difficulty, :cost, :user_id, :tag_list)
  end
end
