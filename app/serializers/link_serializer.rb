class LinkSerializer < ActiveModel::Serializer
  attributes :id, :link_name, :description, :link_url, :is_starred
  has_many :taggables
  has_many :tags
end