# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Car.destroy_all

new_user_diamond = User.create(
    username: "dannertech",
    email: "danner@danner.tech",
    password: "testing"
)

new_car_diamond = Car.create(
    charge: 50,
    model: "i8",
    make: "BMW",
    user_id: new_user_diamond.id ,
    nickname: "BMWBaby"
)