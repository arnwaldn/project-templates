# PHP Coding Style

## PSR Standards
- **PSR-1**: Basic coding standard
- **PSR-4**: Autoloading (namespace = directory structure)
- **PSR-12**: Extended coding style (supersedes PSR-2)
- Use PHP-CS-Fixer or PHP_CodeSniffer for enforcement

## Naming
- `PascalCase`: classes, interfaces, traits, enums
- `camelCase`: methods, properties, variables
- `UPPER_SNAKE_CASE`: constants
- `snake_case`: functions (legacy global), config keys

## Modern PHP (8.1+)
- Enums: `enum Status: string { case Active = 'active'; }`
- Readonly properties: `public readonly string $name`
- Named arguments: `new User(name: 'John', email: 'j@t.com')`
- Match expression over switch for value returns
- Fibers for async (or ReactPHP/Swoole)
- Union types: `string|int`, intersection types: `Countable&Iterator`
- First-class callable syntax: `$fn = strlen(...)`

## Type Safety
- Declare strict types in every file: `declare(strict_types=1);`
- Type all parameters, return types, and properties
- Use `never` return type for functions that always throw/exit
- Use PHPStan or Psalm at level 8+ for static analysis

## Structure (Laravel)
```
app/
  Models/          # Eloquent models
  Http/
    Controllers/   # Thin controllers
    Requests/      # Form request validation
    Resources/     # API resource transformers
  Services/        # Business logic
  Repositories/    # Data access (optional)
  Exceptions/      # Custom exceptions
```

## Immutability
- Use readonly properties and classes (PHP 8.2)
- Prefer DTOs (Data Transfer Objects) as readonly classes
- Return new collections instead of mutating
