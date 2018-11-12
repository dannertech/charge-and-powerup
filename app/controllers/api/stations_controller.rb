class Api::StationsController < ApplicationController

    def index
        @stations = User.find(params[:user_id]).stations
        render json: stations
    end
end
