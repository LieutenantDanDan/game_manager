class GamesController < ApplicationController
  def index
    @games = Artical.all
  end

  def show

  end

  def edit
  end
end
