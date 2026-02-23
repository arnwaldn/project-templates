# Java Coding Style

## Naming
- `PascalCase`: classes, interfaces, enums, records
- `camelCase`: methods, variables, parameters
- `UPPER_SNAKE_CASE`: constants (`static final`)
- Packages: `com.company.project.module` (lowercase)

## Modern Java (17+)
- Use `record` for immutable data classes
- Use `sealed` interfaces for restricted hierarchies
- Use pattern matching: `instanceof` patterns, switch expressions
- Use text blocks (`"""..."""`) for multi-line strings
- Use `var` for local variables when type is obvious

## Immutability
- Prefer records over mutable POJOs
- Use `List.of()`, `Map.of()`, `Set.of()` for immutable collections
- Mark fields `final` wherever possible
- Return `Collections.unmodifiable*()` from getters

## Optional Usage
- Return `Optional<T>` from methods that may not have a result
- Never use `Optional` as a field or parameter
- Chain with `.map()`, `.filter()`, `.orElseThrow()`
- Never call `.get()` without `.isPresent()` — use `.orElse*()`

## Streams
- Prefer streams over manual loops for transformations
- Keep stream pipelines short (< 5 operations)
- Use method references when clearer: `User::getName`
- Avoid side effects in stream operations

## Structure
- One public class per file
- Group: fields → constructors → public methods → private methods
- Max file length: 400 lines (extract service/utility classes)
- Package by feature, not by layer
