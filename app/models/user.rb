class User < ApplicationRecord
    has_many :cars, dependent: :destroy
end
