class Poem < ActiveRecord::Base 
    belongs_to :poet
    has_many :favorites
    has_many :users, through: :favorites
end