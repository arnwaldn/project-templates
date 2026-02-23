# Java Security

## Spring Security
- Use Spring Security for all authentication/authorization
- Enable CSRF for server-rendered pages, disable for pure APIs with stateless JWT
- Configure CORS explicitly (no `allowAll()` in production)
- Use `@PreAuthorize` for method-level security

## Input Validation
- `@Valid` / `@Validated` on all controller parameters
- Jakarta Bean Validation annotations: `@NotNull`, `@Size`, `@Email`, `@Pattern`
- Custom validators for complex business rules
- Validate path variables and query params (not just body)

## SQL Injection Prevention
- ALWAYS use parameterized queries (JPA/Hibernate handles this)
- NEVER concatenate user input into JPQL/SQL strings
- Use `@Query` with named parameters: `@Query("SELECT u FROM User u WHERE u.email = :email")`
- For native queries, use `@Param` bindings

## Secrets Management
- Use Spring Config with encrypted properties or Vault
- Never log sensitive data (mask in toString, logging filters)
- Use `@Value("${secret}")` from environment, not hardcoded
- Rotate secrets via Spring Cloud Config refresh

## Authentication
- Passwords: BCrypt with `PasswordEncoder` (cost factor 12+)
- JWT: RSA-256 or ES-256 signing, short expiry, refresh tokens
- Session: HttpOnly, Secure, SameSite cookies
- MFA: TOTP with `com.warrenstrange:googleauth`

## Dependencies
- Run `mvn dependency:tree` to audit transitive deps
- Use OWASP Dependency-Check plugin in CI
- Keep Spring Boot and dependencies up to date
- Monitor CVEs via Snyk or GitHub Dependabot
