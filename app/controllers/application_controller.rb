class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  before_action :authorize, except: :hello_world

    def hello_world
      session[:count] = (session[:count] || 0) + 1
      render json: { count: session[:count] }
    end

    private
    
    def render_unprocessable_entity exception
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found exception
      render json: {errors: "#{exception.model} not found"}, status: :not_found
    end

    def authorize
      @user = User.find_by(id: session[:user_id])
      render json: {errors: ["User not logged in"]}, status: :unauthorized unless @user
    end

end
