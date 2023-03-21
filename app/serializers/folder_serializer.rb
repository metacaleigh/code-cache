class FolderSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_url, :folder_color
  has_one :user
  has_many :resources
  has_many :notes, through: :resources
  has_many :links, through: :resources
  has_many :snippets, through: :resources
end
