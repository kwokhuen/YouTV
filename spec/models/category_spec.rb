require 'rails_helper'

describe Category do
  it { should have_many(:sub_category) }
  it { should validate_presence_of(:name) }

end
