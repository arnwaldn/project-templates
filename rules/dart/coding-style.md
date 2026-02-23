# Dart/Flutter Coding Style

## Naming
- `lowerCamelCase`: variables, functions, parameters
- `UpperCamelCase`: classes, enums, typedefs, type parameters
- `lowercase_with_underscores`: libraries, packages, files, directories
- `_prefixed`: private members

## Null Safety
- ALWAYS use sound null safety
- Prefer non-nullable types by default
- Use `?` only when null is a valid state
- Use `late` sparingly and only for guaranteed initialization
- Avoid `!` (null assertion) — handle null properly

## Immutability
- Use `final` for variables that won't be reassigned
- Use `const` for compile-time constants
- Prefer `const` constructors for widgets
- Use `freezed` package for immutable data classes

## Flutter-Specific
- Keep widgets small — extract sub-widgets
- Prefer `StatelessWidget` over `StatefulWidget`
- Use `const` widgets wherever possible (rebuild optimization)
- State management: Riverpod (preferred), Bloc, or Provider
- Keys: use `ValueKey` or `ObjectKey` for lists

## Async
- Use `async`/`await` over raw `Future.then()`
- Handle errors with `try`/`catch` in async functions
- Use `FutureBuilder`/`StreamBuilder` for UI async data
- Cancel subscriptions in `dispose()`

## Structure (Flutter)
```
lib/
  main.dart
  app.dart
  features/
    auth/
      presentation/   # Widgets, pages
      domain/          # Models, repositories (abstract)
      data/            # API clients, repository impls
    home/
  core/               # Shared utilities, theme, routing
```
