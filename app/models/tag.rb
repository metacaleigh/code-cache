class Tag < ApplicationRecord
has_many :taggables

validates :tag_name, format: { with: /\A#\w+/, message: 'must start with a #'}
validates :tag_name, format: { without: /\s/, message: 'cannot contain spaces' }
end
