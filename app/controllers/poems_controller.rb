class PoemsController < ApplicationController

    get '/poems' do 
        @poem = Poem.all
        @poems.to_json(include: [:poet])
    end

    post '/poems' do
        # params {
        #     poet: {
        #         name: "name"
        #     },
        #     poem: {
        #         title: "",
        #         body: ""
        #     }
        # }
     
        # find or create a poet
        # use poet to create a new unsaved poem
        # if saved, return the poem json
        # if unsaved (bad data), return errors
        @poet = Poem.find_or_create_by(name: params[:poet])
        @poem = poet.poems.build(params[:poem])

        if poet.save
            @poet.to_json(include: [:poet])
        else
            {errors: @poet.errors.full_messages}.to_json
        end
    end

    delete 'poems/:id' do
        if @poem
            @poem.destroy
            @poem.to_json
        else
            { errors: ["Poem doesn't exist"] }.to_json
        end
    end

    private
    def find_poem
        @poem = Poem.find_by_id(params[:id])
    end

end