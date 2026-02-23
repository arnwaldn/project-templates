# Ruby Testing

## Framework: RSpec (preferred)
```ruby
RSpec.describe UserService do
  describe '#create' do
    subject(:result) { described_class.new(params).call }

    let(:params) { { name: 'John', email: 'john@test.com' } }

    context 'with valid params' do
      it 'creates a user' do
        expect { result }.to change(User, :count).by(1)
      end

      it 'returns success' do
        expect(result).to be_success
        expect(result.value.name).to eq('John')
      end
    end

    context 'with invalid params' do
      let(:params) { { name: '', email: '' } }

      it 'returns failure' do
        expect(result).to be_failure
      end
    end
  end
end
```

## Test Structure
```
spec/
  models/
  services/
  requests/        # Controller/API tests
  system/          # E2E browser tests (Capybara)
  factories/       # FactoryBot factories
  support/         # Shared helpers, configs
  rails_helper.rb
  spec_helper.rb
```

## Factories (FactoryBot)
```ruby
FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    trait :admin do
      role { :admin }
    end
  end
end
```

## Request Specs (API Testing)
```ruby
RSpec.describe 'POST /api/users', type: :request do
  it 'creates a user' do
    post '/api/users', params: { user: valid_params }
    expect(response).to have_http_status(:created)
    expect(json_body['name']).to eq('John')
  end
end
```

## Coverage
- SimpleCov gem for coverage reports
- Target: 80%+ line coverage
- Add to `spec_helper.rb`: `SimpleCov.start 'rails'`

## CI Commands
```bash
bundle exec rspec                    # Run all tests
bundle exec rspec --format progress  # Compact output
bundle exec rubocop                  # Lint
bundle exec brakeman                 # Security scan
```
