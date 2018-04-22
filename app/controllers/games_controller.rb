class GamesController < ApplicationController
  before_action :_test

  def index
    @games = Game.order(:total_playtime).reverse
  end

  def show
    @games = [Game.find_by_id(params[:id])]
  end

  def edit
  end


  private

  def _test
    @current_user = User.first
  end

end
