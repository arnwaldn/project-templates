# PHP Testing

## Framework: Pest PHP (preferred) or PHPUnit
```php
// Pest syntax
it('creates a user with valid data', function () {
    $response = postJson('/api/users', [
        'name' => 'John',
        'email' => 'john@test.com',
    ]);

    $response->assertCreated()
        ->assertJsonPath('data.name', 'John');

    $this->assertDatabaseHas('users', ['email' => 'john@test.com']);
});
```

## Test Types
- **Unit**: Services, DTOs, value objects (no DB)
- **Feature**: HTTP tests with database (RefreshDatabase trait)
- **Integration**: External service tests (Testcontainers)

## Structure
```
tests/
  Unit/
    Services/
    Models/
  Feature/
    Http/
      Controllers/
    Api/
  Pest.php          # Global setup
  TestCase.php      # Base test class
```

## Database Testing
- Use `RefreshDatabase` trait (migrations per test)
- Or `LazilyRefreshDatabase` (faster, transaction-based)
- Factories for test data: `User::factory()->create()`
- Use `Sequence` for varied test data
- Assert with `assertDatabaseHas`, `assertDatabaseMissing`

## Mocking
- `Mockery` (included with Laravel)
- `Http::fake()` for external API mocking
- `Queue::fake()`, `Event::fake()`, `Notification::fake()`
- `$this->mock(Service::class)` for container binding

## Coverage
- `php artisan test --coverage`
- Target: 80%+ line coverage
- `--min=80` flag to enforce in CI
- Pest coverage: `--coverage --min=80`

## CI Commands
```bash
php artisan test --parallel      # Parallel test execution
php artisan test --coverage      # With coverage report
./vendor/bin/phpstan analyse     # Static analysis
./vendor/bin/pint --test         # Code style check
```
