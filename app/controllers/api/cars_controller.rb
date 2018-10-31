class Api::CarsController < ApplicationController
    def index
        @cars = Cars.all
        render json: @users
    end

    
end
