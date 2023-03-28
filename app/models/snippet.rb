class Snippet < ApplicationRecord
    has_many :resources, as: :resourceable
    has_one :folder, through: :resources
    has_many :taggables, as: :taggable
    has_many :tags, through: :taggables

    validates :snippet_name, presence: true
    validates :snippet, presence: true
end
