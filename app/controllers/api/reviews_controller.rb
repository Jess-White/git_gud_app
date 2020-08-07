class Api::ReviewsController < ApplicationController
  before_action :authenticate_user

  def index
    @reviews = Review.all
    @reviews = @reviews.order(id: :desc)
    render "index.json.jb"
  end

  def create
    @review = Review.new(
      title: params[:title],
      body: params[:body],
      rating: params[:rating],
      user_id: params[:user_id],
      resource_id: params[:resource_id],
    )
    if @review.save
      render json: { message: "Review created successfully!" }, status: :created
    else
      render json: { errors: @review.errors.full_messages }, status: :bad_request
    end
  end

  def show
    @review = Review.find(params[:id])
    render "show.json.jb"
  end

  def update
    @review = Review.find(params[:id])
    @review.title = params[:title] || @review.title
    @review.body = params[:body] || @review.body
    @review.rating = params[:rating] || @review.rating
    if @review.save
      render "show.json.jb"
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: { message: "Review successfully destroyed!" }
  end
end
