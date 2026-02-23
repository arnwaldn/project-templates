# Rust Security

## Memory Safety
- Rust prevents most memory bugs at compile time
- Minimize `unsafe` blocks — document invariants when required
- Audit all `unsafe` code paths with `cargo clippy` and `miri`
- Never transmute between unrelated types

## Input Validation
- Validate all external input before processing
- Use newtype wrappers with validation in constructors
- Limit string/buffer sizes to prevent DoS
- Use `secrecy::Secret<T>` for sensitive values (passwords, tokens)

## Dependencies
- Run `cargo audit` before releases
- Pin major versions in `Cargo.toml`
- Review `unsafe` usage in dependencies (`cargo geiger`)
- Prefer well-maintained crates (check last commit, issues)

## Cryptography
- Use `ring` or `rustls` — never roll custom crypto
- Use `argon2` for password hashing
- Use `rand::thread_rng()` for cryptographic randomness
- Constant-time comparison for secrets (`subtle` crate)

## Web Security (axum/actix)
- Enable CORS with explicit origins
- Set security headers (CSP, HSTS, X-Frame-Options)
- Rate limit endpoints (tower middleware)
- Sanitize all user-provided HTML
- Use parameterized queries (sqlx compile-time checks)

## Secrets
- Never hardcode secrets in source
- Use environment variables or `config` crate
- Zero secrets from memory after use (`zeroize` crate)
