class UsersController < ApplicationController

    post '/login' do
        @user = User.find_or_create_by(name: params[:name])
        @user.to_json
    end

end