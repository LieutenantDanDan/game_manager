class UsersController < ApplicationController

  def new
    @user = User.new
    render 'welcome/index'
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render 'welcome/index'
    else
      render text: "Something went wrong."
    end
  end

  private

    def user_params
      params.require(:user)
    end
end
