class Folder < ApplicationRecord
  # attr_accessor :user_id, :name, :description, :image_url
  belongs_to :resourceable, polymorphic: true
  belongs_to :user
  has_many :resources
  has_many :notes, through: :resources, source: :resourceable, source_type: 'Note'
  has_many :links, through: :resources, source: :resourceable, source_type: 'Link'
  has_many :snippets, through: :resources, source: :resourceable, source_type: 'Snippet'
end
