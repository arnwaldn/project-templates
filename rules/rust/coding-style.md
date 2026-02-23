# Rust Coding Style

## Naming
- `snake_case`: variables, functions, modules, files
- `PascalCase`: types, traits, enums
- `SCREAMING_SNAKE_CASE`: constants, statics
- Prefix unused variables with `_`

## Ownership & Borrowing
- Prefer borrowing (`&T`, `&mut T`) over cloning
- Use `Cow<'_, str>` for flexible ownership
- Avoid unnecessary `clone()` — measure first
- Prefer `&str` over `&String` in function params

## Error Handling
- Use `Result<T, E>` for recoverable errors, `panic!` only for unrecoverable
- Define custom error types with `thiserror` for libraries
- Use `anyhow` for application-level error handling
- Chain errors with context: `.context("failed to...")?`
- Never use `.unwrap()` in production code — use `.expect("reason")`

## Idioms
- Prefer iterators over manual loops
- Use pattern matching exhaustively (no wildcard unless justified)
- Prefer `if let` / `let else` for single-pattern matches
- Use `impl Trait` in function signatures for simplicity
- Prefer `From`/`Into` implementations over custom conversion methods

## Structure
- One public type per module (with private helpers)
- `mod.rs` or filename-based modules (prefer filename-based)
- Group imports: std → external crates → internal modules
- Keep `unsafe` blocks minimal and well-documented
