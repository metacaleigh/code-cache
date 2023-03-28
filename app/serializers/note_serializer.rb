class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_name, :note, :is_starred
  has_many :taggables
  has_many :tags
end
