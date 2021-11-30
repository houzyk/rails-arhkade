class GamesController < ApplicationController
  skip_before_action :authenticate_user!

  def index; end

  def tictactoe
    @game = Game.find_by(title: 'tictactoe')
  end

  def checkers
    @game = Game.find_by(title: 'checkers')
  end

  def snake
    @game = Game.find_by(title: 'snake')
  end

  def twothousandfourtyeight
    @game = Game.find_by(title: 'twothousandfourtyeight')
  end

  def minesweeper
    @game = Game.find_by(title: 'minesweeper')
  end

  def breakout
    @game = Game.find_by(title: 'breakout')
  end

  def rubix
    @game = Game.find_by(title: 'rubix')
  end
end
