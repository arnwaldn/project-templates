# C++ Coding Style

## Naming (C++ Core Guidelines)
- `PascalCase`: classes, structs, enums, concepts
- `camelCase` or `snake_case`: functions, methods (pick one, be consistent)
- `UPPER_SNAKE_CASE`: macros, constants
- `snake_case`: namespaces, files
- Member variables: `m_name` or `name_` suffix

## Modern C++ (C++17/20/23)
- Use `auto` when type is obvious from initialization
- Use `std::optional<T>` instead of sentinel values or raw pointers for "maybe" values
- Use `std::variant` instead of unions
- Use `std::string_view` for non-owning string references
- Structured bindings: `auto [key, value] = pair;`
- Range-based for loops with structured bindings

## Memory Management
- RAII: acquire in constructor, release in destructor
- Smart pointers: `unique_ptr` (default), `shared_ptr` (shared ownership), `weak_ptr` (cycle-break)
- NEVER use raw `new`/`delete` — use `make_unique`, `make_shared`
- Prefer stack allocation over heap when possible
- Use `std::span` for non-owning array views

## Error Handling
- Use exceptions for exceptional cases (not control flow)
- Use `std::expected<T, E>` (C++23) or `Result<T, E>` pattern
- Mark functions `noexcept` when they don't throw
- Use RAII to ensure cleanup on exceptions

## Structure
- Header (.h/.hpp) + implementation (.cpp) separation
- Use `#pragma once` or include guards
- Forward declare when possible (reduce compilation time)
- Organize: `include/` (public headers), `src/` (implementation), `test/`
