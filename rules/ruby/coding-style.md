# Ruby Coding Style

## Naming
- `snake_case`: methods, variables, files
- `PascalCase`: classes, modules
- `SCREAMING_SNAKE_CASE`: constants
- `?` suffix: predicate methods (`empty?`, `valid?`)
- `!` suffix: dangerous/mutating methods (`save!`, `delete!`)

## Idioms
- Prefer `do..end` for multi-line blocks, `{ }` for single-line
- Use `&:method` shorthand: `users.map(&:name)`
- Guard clauses over nested conditionals: `return unless valid?`
- Use `freeze` for string constants: `NAME = "app".freeze`
- Prefer string interpolation over concatenation: `"Hello #{name}"`
- Use `%w[]` for word arrays, `%i[]` for symbol arrays

## Modern Ruby (3.0+)
- Pattern matching: `case obj in { name:, age: (18..) }` 
- Endless methods: `def double(x) = x * 2`
- Hash shorthand: `{ name:, email: }` (same as `{ name: name, email: email }`)
- `Ractor` for true parallel execution
- `Data.define` (3.2+) for immutable value objects

## Structure (Rails)
```
app/
  models/          # ActiveRecord models
  controllers/     # Thin controllers
  services/        # Business logic (POROs)
  serializers/     # API response formatting
  jobs/            # Background jobs (Sidekiq/GoodJob)
  mailers/         # Email sending
config/
  routes.rb        # URL routing
db/
  migrate/         # Database migrations
```

## Best Practices
- Prefer composition over inheritance
- Keep methods short (< 10 lines ideal, 20 max)
- Use Rubocop for style enforcement
- Freeze string literals: `# frozen_string_literal: true` at top of files
