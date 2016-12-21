require 'rails_helper'

describe Video do
  let(:category) { Category.create!(name: "Comedy")}
  let(:sub_category) { SubCategory.create!(name: "Fail", category_id: category.id) }
  def random_youtube_id
    string = ""
    8.times {string << ("a".."z").to_a[rand(26)]}
    string
  end
  subject { Video.new(youtube_id: random_youtube_id,
                      category_id: category.id,
                      sub_category_id: sub_category.id,
                      title: "hello",
                      description: "hello"
                      ) }
  it { should have_many(:video_histories) }
  it { should have_many(:favorites) }
  it { should belong_to(:category) }
  it { should belong_to(:sub_category) }
  it { should validate_presence_of(:youtube_id) }
  it { should validate_presence_of(:category_id) }
  it { should validate_presence_of(:sub_category_id) }
  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:thumbnail_url) }


end
