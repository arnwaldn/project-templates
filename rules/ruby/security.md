# Ruby Security

## SQL Injection
- ALWAYS use parameterized queries: `User.where(email: params[:email])`
- NEVER interpolate in SQL: `User.where("email = '#{params[:email]}'")`
- Use `sanitize_sql_array` if raw SQL is unavoidable
- Brakeman scanner catches most SQL injection patterns

## XSS Prevention
- Rails auto-escapes ERB output with `<%= %>`
- NEVER use `raw()` or `.html_safe` on user input
- CSP headers via `content_security_policy` in initializer
- Sanitize HTML with `ActionView::Helpers::SanitizeHelper`

## Authentication
- Use Devise or Rodauth (battle-tested)
- bcrypt for password hashing (default in Devise)
- Protect against timing attacks: `Devise.secure_compare`
- Rate limit with `rack-attack`

## Mass Assignment
- Use Strong Parameters in controllers
- `params.require(:user).permit(:name, :email)` — whitelist only
- NEVER use `params.permit!`

## Secrets
- `Rails.application.credentials` for encrypted secrets
- `config/credentials.yml.enc` + master key
- NEVER commit master key to VCS
- Use environment-specific credentials (production, staging)

## CSRF
- Enabled by default in Rails (`protect_from_forgery`)
- Use `authenticity_token` in forms
- For API mode: use token-based auth instead

## Dependencies
- `bundle audit` before releases
- `bundler-audit` gem in CI
- Keep Rails and gems updated
- Monitor CVEs via GitHub Dependabot

## Security Scanner
- **Brakeman**: Static analysis for Rails security
- Run in CI: `brakeman --no-pager -q`
- Fix all HIGH confidence warnings
