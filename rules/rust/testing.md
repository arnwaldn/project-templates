# Rust Testing

## Structure
- Unit tests: `#[cfg(test)] mod tests` in same file
- Integration tests: `tests/` directory at crate root
- Doc tests: code examples in `///` comments (auto-tested)
- Benchmarks: `criterion` crate in `benches/`

## Unit Testing
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_valid_input() {
        let result = process("valid");
        assert_eq!(result, Ok(expected));
    }

    #[test]
    #[should_panic(expected = "invalid")]
    fn test_panic_on_invalid() {
        process("invalid");
    }
}
```

## Async Testing
- Use `#[tokio::test]` for async tests
- Use `#[tokio::test(flavor = "multi_thread")]` for concurrency tests

## Mocking
- Use traits for dependencies (dependency injection)
- `mockall` crate for auto-generating mocks
- Prefer real implementations in integration tests

## Property-Based Testing
- `proptest` for generating random inputs
- Test invariants rather than specific cases
- Especially useful for parsers, serializers, algorithms

## Coverage
- Use `cargo tarpaulin` or `cargo llvm-cov`
- Target 80%+ line coverage
- Focus on business logic coverage

## CI Commands
```bash
cargo test                    # Run all tests
cargo test -- --nocapture     # Show println output
cargo clippy -- -D warnings   # Lint (treat warnings as errors)
cargo tarpaulin --out Html     # Coverage report
```
