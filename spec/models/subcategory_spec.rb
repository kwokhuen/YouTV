require 'rails_helper'

describe SubCategory do

  it { should have_many(:preferences) }
  it { should belong_to(:category) }
  it { should validate_presence_of(:category_id) }
  it { should validate_presence_of(:name) }

end
