require 'rails_helper'

describe Preference do
  let(:user) { User.create!(full_name: "benjamin", email: "benjamin@gmail.com", password: "123456")}
  subject { Preference.new(sub_category_id: 1,
                           user_id: user.id,
                           weight: 100
                           ) }
  it { should validate_presence_of(:user_id) }
  it { should validate_numericality_of(:weight).only_integer }
  it { should validate_presence_of(:sub_category_id) }
  it { should belong_to(:user) }
  it { should belong_to(:sub_category) }
  it { should validate_uniqueness_of(:user_id).scoped_to(:sub_category_id) }

end
