class FavoritesController < ApplicationController

    get 'favorites' do
        find_favorite
        @favorite.to_json
    end

    private
    def find_favorite
        @favorite = Favorite.find_by_id(params[:id])
    end
end