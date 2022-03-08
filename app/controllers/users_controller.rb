class UsersController < ApplicationController

    get '/users' do
        User.all.to_json(include: [:poems, :favorites])
    end
    
    get '/users/:id' do
        find_user 
        @user.to_json(include: [:poems, :favorites])
    end

    post '/login' do
        @user = User.find_or_create_by(name: params[:username])
        @user.to_json(include: [:poems, :favorites])
    end

    post '/signup' do
        @user = User.find_or_create_by(name: params[:username])
        @user.to_json(include: [:poems, :favorites])
    end

    private
    def find_user
        @user = User.find_by_id(params[:id])
    end

end