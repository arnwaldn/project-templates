# Rust Patterns

## Builder Pattern
- Use for structs with many optional fields
- Return `Self` from each method for chaining
- Final `.build()` returns `Result<T, E>` (not `T`)

## Type State Pattern
- Encode state transitions in the type system
- Prevents invalid state at compile time
- Use empty structs as type-level markers

## Newtype Pattern
- Wrap primitives: `struct UserId(u64)`
- Prevents mixing up same-typed arguments
- Implement `Deref` only when semantically correct

## Error Handling Pattern
```
// Library: thiserror
#[derive(Debug, thiserror::Error)]
enum AppError {
    #[error("database: {0}")]
    Database(#[from] sqlx::Error),
    #[error("not found: {entity} {id}")]
    NotFound { entity: &'static str, id: String },
}
```

## Concurrency
- Prefer `tokio` for async runtime
- Use `Arc<Mutex<T>>` sparingly — prefer message passing (channels)
- `RwLock` when reads vastly outnumber writes
- Rayon for CPU-bound parallelism

## Common Crates
| Purpose | Crate |
|---------|-------|
| Async runtime | tokio |
| HTTP server | axum, actix-web |
| Serialization | serde, serde_json |
| Database | sqlx, diesel |
| CLI | clap |
| Error handling | thiserror (lib), anyhow (app) |
| Logging | tracing |
| Testing | proptest, criterion (bench) |
