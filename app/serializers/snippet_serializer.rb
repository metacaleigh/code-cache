class SnippetSerializer < ActiveModel::Serializer
  attributes :id, :snippet_name, :description, :snippet, :is_starred, :language
  has_many :taggables
  has_many :tags
end
