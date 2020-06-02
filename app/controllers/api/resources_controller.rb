class Api::ResourcesController < ApplicationController

    def index
      params[:tag] ? @resources = Resource.tagged_with(params[:tag]) : @resources = Resource.all
    end
   
    def show
      @resource = Resource.find(params[:id])
    end
    def new
      @resource = Resource.new
    end
    def create
      @resource = Resource.new(resource_params)
      if @resource.save
        redirect_to @resource
      else
        render :new
      end
    end
    private
    def resource_params
        params.require(:resource).permit(:url, :name, :type, :format, :difficulty, :cost, :user_id, :tag_list, :tag, { tag_ids: [] }, :tag_ids)
    end

end
