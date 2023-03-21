class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_name, :note, :is_starred
end
