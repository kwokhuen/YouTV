# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = Category.create!([{name: "Comedy"}])

sub_categories = SubCategory.create!([
  {category_id: 1, name: "Stand-Up"},
  {category_id: 1, name: "Movies"},
  {category_id: 1, name: "Animals"},
  {category_id: 1, name: "Fail"}])

videos = Video.create!([
  {youtube_id: 1, category_id: 1, sub_category_id: 1},
  {youtube_id: 2, category_id: 1, sub_category_id: 2},
  {youtube_id: 3, category_id: 1, sub_category_id: 3},
  {youtube_id: 4, category_id: 1, sub_category_id: 4}])

users = User.create!([
  {full_name: "Chris", email: "chris@gmail.com", password: "123"},
  {full_name: "Chinh", email: "chinh@gmail.com", password: "123"},
  {full_name: "Ben", email: "ben@gmail.com", password: "123"},
  {full_name: "Ori", email: "ori@gmail.com", password: "123"}])

video_histories = VideoHistory.create!([
  {user_id: 1, video_id: 1},
  {user_id: 2, video_id: 2},
  {user_id: 3, video_id: 3},
  {user_id: 4, video_id: 4}])

favorites = Favorite.create!([
  {video_id: 1, user_id: 1},
  {video_id: 2, user_id: 1},
  {video_id: 2, user_id: 2},
  {video_id: 1, user_id: 2}])

preferences = Preference.create!([
  {user_id: 1, sub_category_id: 1, weight: 110},
  {user_id: 2, sub_category_id: 1, weight: 100},
  {user_id: 3, sub_category_id: 1, weight: 90},
  {user_id: 4, sub_category_id: 1, weight: 80}])
