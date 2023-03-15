class LinkSerializer < ActiveModel::Serializer
  attributes :id, :link_name, :description, :link_url
end
