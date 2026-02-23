# PHP Security

## SQL Injection
- ALWAYS use Eloquent or prepared statements
- NEVER concatenate user input into queries
- Use `DB::select('SELECT * FROM users WHERE id = ?', [$id])`
- Validate and cast IDs to integers

## XSS Prevention
- Blade auto-escapes with `{{ $var }}` — NEVER use `{!! $var !!}` for user input
- Sanitize HTML input with `HTMLPurifier` if HTML is needed
- Set CSP headers via middleware
- Use `@csrf` directive in all forms

## Authentication
- Use Laravel Sanctum for API tokens
- Bcrypt password hashing (Laravel default, cost 12)
- Rate limit login attempts: `RateLimiter::for('login', ...)`
- Session: HttpOnly, Secure, SameSite=Lax cookies

## File Upload Security
- Validate MIME type AND extension
- Store uploads outside web root (use `storage/` with symlink)
- Generate random filenames (never use original filename)
- Limit file size in validation rules AND php.ini
- Scan for malware if accepting from public users

## Configuration Security
- `.env` file NEVER in version control
- `APP_DEBUG=false` in production
- `APP_KEY` must be unique and secret
- Use `config()` helper, never `env()` outside config files

## Mass Assignment
- Define `$fillable` on all models (whitelist)
- NEVER use `$guarded = []` in production
- Use FormRequest validation before `Model::create()`

## Dependencies
- `composer audit` before releases
- Keep Laravel and packages up to date
- Review package permissions and trust level
