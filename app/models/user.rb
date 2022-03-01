class User < ActiveRecord::Base 
    has_many :favorites
    has_many :poems, through: :favorites

    validates :name, uniqueness: true, presence: true
    # targeting the name, validates unique name
end