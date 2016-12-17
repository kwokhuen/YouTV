require 'rails_helper'

describe User do
  subject { User.new(full_name: "BENJAMIN",
                     password_digest: "1234",
                     email: "BENJAMIN@gmail.com",
                     ) }

  it { should have_many(:video_histories) }
  it { should have_many(:favorites) }
  it { should have_many(:preferences) }

  it { should have_secure_password }
  it { should validate_presence_of(:full_name) }
  it { should validate_presence_of(:email) }

  it do
    should validate_length_of(:full_name).
      is_at_least(3).
      on(:create)
  end

  it do
    should validate_length_of(:full_name).
      is_at_most(25).
      on(:create)
  end

  it { should validate_uniqueness_of(:full_name).case_insensitive }
  it { should validate_uniqueness_of(:email).case_insensitive }

  it do
    should validate_length_of(:email).
      is_at_most(250).
      on(:create)
  end

  it "validates format of email" do
    subject.email = "test"
    expect(subject.save).to be false
  end
end
