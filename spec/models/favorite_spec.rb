require 'rails_helper'

describe Favorite do
  let(:user) { User.create!(full_name: "benjamin", email: "benjamin@gmail.com", password: "123456")}
  subject { VideoHistory.new(video_id: 1,
                              user_id: user.id
                           ) }
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:video_id) }
  it { should belong_to(:user) }
  it { should belong_to(:video) }
  it { should validate_uniqueness_of(:user_id).scoped_to(:video_id) }

end
