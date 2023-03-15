class Resource < ApplicationRecord
  belongs_to :resourceable, polymorphic: true
  belongs_to :folder
end
