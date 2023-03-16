class Folder < ApplicationRecord
  # attr_accessor :user_id, :name, :description, :image_url
  has_many :resources
  belongs_to :user
  has_many :notes, through: :resources, source: :resourceable, source_type: 'Note'
  has_many :links, through: :resources, source: :resourceable, source_type: 'Link'
  has_many :snippets, through: :resources, source: :resourceable, source_type: 'Snippet'
end
