# Dart/Flutter Testing

## Test Types
- **Unit tests**: Pure Dart logic (models, services, utils)
- **Widget tests**: Individual widgets in isolation
- **Integration tests**: Full app or feature flows
- **Golden tests**: Screenshot-based visual regression

## Structure
```
test/
  unit/
    models/
    services/
  widget/
    features/
  integration/
  goldens/
```

## Unit Tests
```dart
void main() {
  group('UserService', () {
    late MockUserRepository mockRepo;
    late UserService service;

    setUp(() {
      mockRepo = MockUserRepository();
      service = UserService(mockRepo);
    });

    test('should return user when found', () async {
      when(() => mockRepo.findById('1')).thenAnswer((_) async => testUser);
      final result = await service.getUser('1');
      expect(result, equals(testUser));
    });
  });
}
```

## Widget Tests
- `testWidgets('description', (tester) async { ... })`
- `pumpWidget()` to render, `pump()` to rebuild
- `find.byType()`, `find.text()`, `find.byKey()` for finders
- `tester.tap()`, `tester.enterText()` for interactions

## Mocking
- Use `mocktail` (no code generation, null-safe)
- Mock repositories and services, not widgets
- Use `ProviderScope(overrides: [...])` for Riverpod testing

## Coverage
- `flutter test --coverage`
- `lcov` for HTML reports
- Target: 80%+ line coverage
- Focus on business logic and state management

## CI Commands
```bash
flutter test                          # Run all tests
flutter test --coverage               # With coverage
flutter analyze                       # Static analysis
dart format --set-exit-if-changed .   # Check formatting
```
