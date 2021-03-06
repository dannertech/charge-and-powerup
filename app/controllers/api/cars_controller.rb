class Api::CarsController < ApplicationController
    def index
        @cars = User.find(params[:user_id]).cars
        render json: @cars
    end


    def show
        @user = User.find(params[:user_id])
        @cars = @user.cars.find(params[:id])
        render json: @cars
    end

    def create
        @car = User.find(params[:user_id]).cars.create(car_params)
        render json: @car
    end

    def update
       @user = User.find(params[:user_id])
       @car = @user.cars.find(params[:id]).update(car_params)
       render json: @car
    end

    def destroy 
        @user = User.find(params[:user_id]).cars
        @car = @user.find(params[:id]).destroy
        render json: 200
    end

    private

    def car_params
        params.require(:car).permit(:nickname,:charge,:make,:model)
    end
  
end
