class Tag < ApplicationRecord
# attr_accessor :tag_name
belongs_to :taggable, polymorphic: true
has_many :taggables
end
