class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        @user = User.create!(user_params)
        session[:user_id] = @user.id 
        render json: @user, status: :created
    end

    def show
        render json: @user, status: :ok
    end

    def destroy
        @user.destroy
        session.delete :user_id
        head :no_content
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :username, :password, :password_confirmation)
    end
end
