class Link < ApplicationRecord
    has_many :resources, as: :resourceable
    has_one :folder, through: :resources
    has_many :taggables, as: :taggable
    has_many :tags, through: :taggables

    validates :link_name, presence: true
    validates :link_url, presence: true
end
