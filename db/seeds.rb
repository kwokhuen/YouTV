# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Yt.configure do |config|
  config.api_key = ''
end

users = User.create!([
  {full_name: "Chris", email: "chris@gmail.com", password: "123"},
  {full_name: "Chinh", email: "chinh@gmail.com", password: "123"},
  {full_name: "Ben", email: "ben@gmail.com", password: "123"},
  {full_name: "Ori", email: "ori@gmail.com", password: "123"}])

Category.create!([{name: "Comedy"}])

SubCategory.create!([
                                      {category_id: 1, name: "Comedy Central"},
                                      {category_id: 1, name: "Comedy Times"},
                                      {category_id: 1, name: "Laugh Factory"},
                                      {category_id: 1, name: "Smosh"},
                                      {category_id: 1, name: "Fail Army"},
                                      {category_id: 1, name: "College Humor"}
                                    ])

# Pull videos from commedy central and store in our database
channel = Yt::Channel.new id:  'UCUsN5ZwHx2kILm84-jPDeXw'

array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 1}}
array.each {|data| Video.create!(data)}


# Comedy Time
channel = Yt::Channel.new id:  'UCUg9Iv_KnZwTulS0cEi_mJQ'
array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 2}}
array.each {|data| Video.create!(data)}

# Laugh Factory
channel = Yt::Channel.new id:  'UCxyCzPY2pjAjrxoSYclpuLg'
array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 3}}
array.each {|data| Video.create!(data)}

# SMOSH
channel = Yt::Channel.new id:  'UCY30JRSgfhYXA6i6xX1erWg'
array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 4}}
array.each {|data| Video.create!(data)}

# Fail Army
channel = Yt::Channel.new id:  'UCPDis9pjXuqyI7RYLJ-TTSA'
array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 5}}
array.each {|data| Video.create!(data)}

# College Humor
channel = Yt::Channel.new id:  'UCPDXXXJj9nax0fr0Wfc048g'
array = []
channel.videos.take(100).each {|video| array << {youtube_id: video.id, title: video.title, description: video.description, thumbnail_url: video.thumbnail_url, embed_url: video.embed_html, category_id: 1, sub_category_id: 6}}
array.each {|data| Video.create!(data)}
