class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :article, :category, :date
end
