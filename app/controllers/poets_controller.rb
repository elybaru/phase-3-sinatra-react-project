require 'pry'

class PoetsController < ApplicationController

    get '/poets' do
        Poet.all.to_json
    end
    
    get '/poets/:id' do 
        find_poet 
        @poet.to_json(include: [:poems])
    end

    private
    def find_poet 
        @poet = Poet.find_by_id(params[:id])
    end

end