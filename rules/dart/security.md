# Dart/Flutter Security

## Secure Storage
- Use `flutter_secure_storage` for tokens/secrets (Keychain/Keystore)
- NEVER store secrets in SharedPreferences (unencrypted)
- NEVER hardcode API keys in source code
- Use `--dart-define` for build-time configuration

## Network Security
- Use HTTPS only — enforce with certificate pinning for sensitive apps
- Validate SSL certificates (don't disable in production)
- Use `dio` interceptors for auth token injection
- Implement request timeouts and retry logic

## Input Validation
- Validate all user input on client AND server
- Sanitize text before rendering (XSS in WebView)
- Use form validators: `TextFormField(validator: ...)`
- Limit file upload sizes and types

## Code Obfuscation
- Enable for release builds: `flutter build apk --obfuscate --split-debug-info=./debug-info`
- Store debug symbols for crash reporting
- Use ProGuard rules for Android

## Platform-Specific
- **Android**: Enable R8/ProGuard, set `minSdkVersion` appropriately
- **iOS**: Enable ATS (App Transport Security)
- **Web**: CSP headers, CORS configuration
- Biometric auth: `local_auth` package with fallback

## Dependencies
- Run `dart pub outdated` regularly
- Audit transitive dependencies
- Prefer well-maintained packages (pub.dev scores)
- Lock versions in `pubspec.lock` (commit to VCS)
