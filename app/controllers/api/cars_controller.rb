class Api::CarsController < ApplicationController
    def index
        @cars = Car.all
        render json: @cars
    end


    def show
        @cars = User.find(params[:id]).cars
        render json: @cars
    end

    def create
        @car = User.find(params[:id]).cars.create(cars_params)
        render json: @car
    end

    def update
        @car = Car.find(params[:id])
        @car.update(car_params)
        render json: car
    end

    def destroy 
        @car = Car.find(params[:id])
        @car.destroy
        render json: 200
    end

    private

    def car_params
        params.require(:car).permit(:title,:album,:preview_url)
    end
  
end
