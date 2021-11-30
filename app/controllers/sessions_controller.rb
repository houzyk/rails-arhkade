class SessionsController < ApplicationController
  def index
    @sessions = Session.all
  end

  def new
    create
  end

  def create
    @session = Session.new
    @game = Game.find(params[:game_id])
    @user = current_user
    @session.user = @user
    @session.game = @game
    @session.save!
    redirect_to "/#{@game.title}"
  end
end
