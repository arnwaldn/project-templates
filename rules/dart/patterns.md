# Dart/Flutter Patterns

## Clean Architecture
```
Presentation → Domain ← Data
(Widgets)     (Models,    (API, DB)
              UseCases,
              Repos)
```
- Domain layer has zero dependencies on Flutter
- Repository pattern: abstract in domain, concrete in data
- Use cases encapsulate single business operations

## State Management (Riverpod)
- `Provider` for simple values
- `StateNotifierProvider` for complex state
- `FutureProvider` / `StreamProvider` for async data
- `ref.watch()` in build, `ref.read()` in callbacks
- Family providers for parameterized state

## Navigation
- `go_router` for declarative routing
- Typed routes with code generation
- Deep linking support
- Guards for authentication

## Data Classes
```dart
// With freezed (recommended)
@freezed
class User with _$User {
  const factory User({
    required String id,
    required String name,
    String? email,
  }) = _User;

  factory User.fromJson(Map<String, dynamic> json) =>
      _$UserFromJson(json);
}
```

## Common Packages
| Purpose | Package |
|---------|---------|
| State management | riverpod, flutter_riverpod |
| Routing | go_router |
| Data classes | freezed, json_serializable |
| HTTP | dio |
| Local storage | hive, shared_preferences |
| DI | get_it, injectable |
| Testing | mocktail, golden_toolkit |

## Platform Channels
- `MethodChannel` for one-off calls
- `EventChannel` for streams
- Use Pigeon for type-safe platform interfaces
