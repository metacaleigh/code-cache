class User < ApplicationRecord
    has_many :folders, dependent: :destroy

    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    validates :username, presence: true, uniqueness: true
end
