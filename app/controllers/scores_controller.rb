class ScoresController < ApplicationController
    def index
      @scores = Score.all.order(points: :desc)
      render json: @scores
    end
  
    def create
      @score = Score.new(score_params)
      if @score.save
        render json: @score, status: :created
      else
        render json: @score.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def score_params
      params.require(:score).permit(:player, :points)
    end
  end
  