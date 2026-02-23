# PHP Patterns

## Laravel Architecture
```
Route → Middleware → Controller → FormRequest (validation)
                        ↓
                    Service → Repository → Model → DB
                        ↓
                    Resource → JSON Response
```

## Service Pattern
- Controllers delegate to services (thin controllers)
- Services contain business logic
- One service per domain concept
- Services are injectable via constructor DI

## Repository Pattern (Optional)
- Abstract data access behind interface
- Useful when switching between Eloquent and external APIs
- Skip for simple CRUD (Eloquent in service is fine)

## DTOs (Data Transfer Objects)
```php
readonly class CreateUserDTO {
    public function __construct(
        public string $name,
        public string $email,
        public ?string $phone = null,
    ) {}

    public static function fromRequest(Request $request): self {
        return new self(...$request->validated());
    }
}
```

## Event/Listener Pattern
- Use Laravel Events for decoupled side effects
- `UserCreated` event → `SendWelcomeEmail` listener
- Queue listeners for non-blocking operations

## Common Packages
| Purpose | Package |
|---------|---------|
| Framework | Laravel 11+ |
| Auth | Laravel Sanctum (API), Fortify (web) |
| Testing | Pest PHP, PHPUnit |
| Static analysis | PHPStan, Larastan |
| Code style | Laravel Pint (PHP-CS-Fixer) |
| API docs | Scramble, L5-Swagger |
| Queue | Laravel Queue (Redis/SQS) |
| Admin | Filament |
