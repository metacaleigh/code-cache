class TaggableSerializer < ActiveModel::Serializer
  attributes :id, :tag_id
  has_one :taggable
end
