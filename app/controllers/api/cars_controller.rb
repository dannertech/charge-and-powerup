class Api::CarsController < ApplicationController
    def index
        @cars = Car.all
        render json: @cars
    end


    def show
        @cars = User.find(params[:id]).cars
        render json: @cars
            end
        

    
end
