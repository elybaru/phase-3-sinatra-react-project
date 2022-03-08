class FavoritesController < ApplicationController

    get '/favorites' do
        find_favorite
        @favorite.to_json
    end

    post '/favorites' do
        @favorite = Favorite.find_or_create_by(user_id: params[:user_id], poem_id: params[:poem_id])
        @favorite.to_json
    end

    delete '/favorites/:id' do
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        @favorite.to_json
    end

    private
    def find_favorite
        @favorite = Favorite.find_by_id(params[:id])
    end
end