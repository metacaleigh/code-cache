class SnippetSerializer < ActiveModel::Serializer
  attributes :id, :snippet_name, :description, :snippet, :is_starred
end
