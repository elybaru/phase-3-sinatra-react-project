class PoetsController < ApplicationController

    get 'poets/:id' do 
        find_poet 
        @poet.to_json(:include [:poems])
    end

    private
    def find_poet 
        @poet = Poet.find_by_id(params[:id])
    end

end