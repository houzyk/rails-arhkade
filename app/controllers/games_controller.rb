class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def tictactoe; end

  def checkers; end

  def snake; end

  def twothousandfourtyeight; end

  def minesweeper; end

  def breakout; end

  def rubix; end
end
