class ResourceSerializer < ActiveModel::Serializer
  attributes :id
  has_one :folder
  has_one :resourceable
end
