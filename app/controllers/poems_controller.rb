class PoemsController < ApplicationController

    get '/poems' do 
        @poems = Poem.first
        # @poems.to_json(include: [:poet, :lines])
        @poems.to_json(methods: [:lines], include: [:poet])
    end

    post '/poems' do
        @poet = Poet.find_or_create_by(name: params[:poet])
        @poem = @poet.poems.build(title: params[:title], body: params[:body])

        if @poem.save
            @poem.to_json(include: [:poet])
        else
            {errors: @poem.errors.full_messages}.to_json
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