class FavoritesController < ApplicationController

    get '/favorites' do
        Favorite.all.to_json(include: [:poem])
    end


    # get '/favorites/:id' do
    #     @favorite= Favorite.all
    #     user_favorites = @favorite.select {|fav| fav.user_id == params[:id]}
    #     user_favorite.to_json
    #     # # search by user_id to get favorites, should return a list of all the favorites for user
    #     # @favorites = Favorite.poems
    # end

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