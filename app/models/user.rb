class User < ApplicationRecord
    has_many :cars, dependent: :destroy
    validates :username, presence: true, uniqueness: { message: this username is already connected to an account }
    validates :email, presence: true, uniqueness: { message: this email is already connected to an account }
end
