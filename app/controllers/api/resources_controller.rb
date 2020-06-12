class Api::ResourcesController < ApplicationController

    def index
      @resources = Resource.all
      @resources = @resources.order(id: :asc)
      render "index.json.jb"

      params[:tag] ? @resources = Resource.tagged_with(params[:tag]) : @resources = Resource.all
    end

    def create
      @resource = Resource.new(
        name: params[:name],
        resource_type: params[:resource_type],
        format: params[:format],
        difficulty: params[:difficulty],
        cost: params[:cost],
        user_id: params[:user_id]
        )
      if resource.save
        render json: {message: "Resource created successfully!"}, status: :created
      else
        render json: {errors: resource.errors.full_messages},
        status: :bad_request
      end 
      #this comes from the tutorial:
      private
      def resource_params
          params.require(:resource).permit(:url, :name, :type, :format, :difficulty, :cost, :user_id, :tag_list, :tag, { tag_ids: [] }, :tag_ids)
      end 
    end 
   
    def show
      @resource = Resource.find(params[:id])
      render "show.json.jb"
    end

    def update
      @resource = Resource.find(params[:id])
      @resource.name = params[:name] || @resource.name
      @resource.resource_type = params[:resource_type] || @resource.resource_type
      @resource.format = params[:format] || @resource.format
      @resource.difficulty = params[:difficulty] || @resource.difficulty
      @resource.cost = params[:cost] || @resource.cost
      @resource.user_id = params[:user_id] || @resource.user_id
      @resource.save
      render "update.json.jb"
    end 

    def destroy
      resource = Resource.find(params[:id])
      resource.destroy
      render json: {message: "Resource successfully destroyed"}
    end 
end

#this is from the tutorial - we will probably have to reconcile it

# def new
#   @resource = Resource.new
# end

# def create
#   @resource = Resource.new(resource_params)
#   if @resource.save
#     redirect_to @resource
#   else
#     render :new
#   end
# end
# private
# def resource_params
#     params.require(:resource).permit(:url, :name, :type, :format, :difficulty, :cost, :user_id, :tag_list, :tag, { tag_ids: [] }, :tag_ids)
# end