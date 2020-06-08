class Api::ReviewsController < ApplicationController

  def create
    review = Review.new(
      title: params[:title],
      body: params[:body],
      rating: params[:rating],
      user_id: params[:user_id]
      )
    if review.save
      render json: {message: "Review created successfully!"}, status: :created
    else
      render json: {errors: review.errors.full_messages}, status: :bad_request
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
    @review.user_id = params[:user_id] || @review.user_id
    @review.save 
    render "update.json.jb"
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: {message: "Review successfully destroyed!"}
  end

end
