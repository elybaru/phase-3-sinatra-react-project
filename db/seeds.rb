require 'pry'
puts "🌱 Seeding spices..."

# Seed your database here

def get_poems 
    poets = RestClient.get "https://poetrydb.org/author"
    poets_hash = JSON.parse(poets)
    poets_hash["authors"].each do |poet|
        Poet.find_or_create_by(name: poet)
    end

    Poet.all.each do |poet|
        response = RestClient.get "https://poetrydb.org/author/#{poet.name.split(" ").join("%20")}"
        poems_hash = JSON.parse(response)
        poems_hash.each do |poem|
            poet.poems.create(
            title: poem["title"],
            # need to change this param, from poet to author, in the table
            body: poem["lines"]
        )
        end
        print "."
    end
end


get_poems


### Create poets
# rumi= Poet.create(name: "Rumi")
# wcw = Poet.create(name: "William Carlos Williams")
# rmr = Poet.create(name: "Rainer Maria Rilke")

# ### Create poems

# rumi.poems.create(title: "The Guest House", body: "
# This being human is a guest house.
# Every morning a new arrival.

# A joy, a depression, a meanness,
# some momentary awareness comes
# as an unexpected visitor.

# Welcome and entertain them all!
# Even if they’re a crowd of sorrows,
# who violently sweep your house
# empty of its furniture,
# still, treat each guest honorably.
# He may be clearing you out
# for some new delight.

# The dark thought, the shame, the malice,
# meet them at the door laughing,
# and invite them in.

# Be grateful for whoever comes,
# because each has been sent
# as a guide from beyond.

# ")

# wcw.poems.create(title: "The Red Wheelbarrow", body: "
# so much depends
# upon

# a red wheel
# barrow

# glazed with rain
# water

# beside the white
# chickens
# ")

# rmr.poems.create(title: "The Beggars", body: "
# You didn't know
# what was in the heap. A visitor found
# it to contain beggars. They sell the hollow
# of their hands.

# They show the sightseer
# their mouths full of filth,
# and let him (he can afford it) peer
# at the mange eating away at them.

# In their twisted vision
# his stranger's face is skewed;
# they are pleased with their accession,
# and when he speaks they spew.

# ")

puts "✅ Done seeding!"
