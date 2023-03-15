class User < ApplicationRecord
    has_many :folders

    has_secure_password

    validates :first_name, :last_name, :email, :username, :password, :password_confirmation, presence: true
    validates :username, uniqueness: true
end
