class Note < ApplicationRecord
    has_many :resources, as: :resourceable
    has_one :folder, through: :resources
    has_many :taggables, as: :taggable
    has_one :tag, through: :taggables

    validates :note_name, presence: true
    validates :note, presence: true
end
