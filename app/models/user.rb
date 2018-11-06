class User < ApplicationRecord
    has_many :cars, dependent: :destroy
    validates :username, presence: true
    validates :username, uniqueness:  { message: "this username is already connected to an account"} 
    validates :email, presence: true
    validates :email, uniqueness: { message: "this email is already connected to an account" }

end
