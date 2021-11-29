class SessionsController < ApplicationController
  def index
    @sessions = Session.all
  end

  def create
    @session = Session.new(session_params)
    @game = Game.find(params[:game_id])
    @session.game = @game
    @session.user = current_user
    @session.save!
  end

  private

  def session_params
    params.require(:session).permit(:score, :game_id, :user_id)
  end
end
