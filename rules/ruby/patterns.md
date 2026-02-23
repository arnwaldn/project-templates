# Ruby Patterns

## Rails Architecture
```
Route → Middleware → Controller → Strong Params
                        ↓
              Service Object → Model → DB
                        ↓
              Serializer → JSON Response
```

## Service Objects
```ruby
class CreateUser
  def initialize(params)
    @params = params
  end

  def call
    user = User.new(@params)
    return Result.failure(user.errors) unless user.valid?
    user.save!
    Result.success(user)
  end
end
```

## Result Pattern
- Wrap service responses in Result objects
- `Result.success(data)` / `Result.failure(errors)`
- Use `dry-monads` for railway-oriented programming

## Query Objects
- Extract complex queries from models
- One query per class, composable via scopes
- Use Arel for complex SQL generation

## Common Gems
| Purpose | Gem |
|---------|-----|
| Framework | Rails 7+ |
| Auth | Devise, Rodauth |
| Authorization | Pundit, Action Policy |
| Serialization | Alba, Blueprinter |
| Background jobs | Sidekiq, GoodJob |
| Testing | RSpec, FactoryBot |
| Linting | Rubocop, Rubocop-Rails |
| HTTP client | Faraday, HTTParty |
| Pagination | Pagy |
| Admin | ActiveAdmin, Administrate |

## ActiveRecord Best Practices
- Use scopes for reusable queries
- Avoid N+1: `includes()`, `preload()`, `eager_load()`
- Use `find_each` for batch processing
- Index foreign keys and frequently queried columns
- Use database constraints alongside model validations
