# C++ Security

## Memory Safety
- Use smart pointers exclusively — no raw `new`/`delete`
- Use `std::array` or `std::vector` instead of C arrays
- Use `std::string` / `std::string_view` instead of `char*`
- Bounds checking: `.at()` instead of `[]` for untrusted indices
- Use AddressSanitizer (`-fsanitize=address`) in CI

## Buffer Overflow Prevention
- NEVER use `strcpy`, `strcat`, `sprintf`, `gets`
- Use `std::string`, `std::format`, or `snprintf` with bounds
- Validate all buffer sizes before operations
- Use `std::span` for safe array passing

## Input Validation
- Validate ALL external input (files, network, user input)
- Check integer overflow: use `SafeInt` or manual checks
- Validate string lengths before allocation
- Sanitize filenames and paths (directory traversal)

## Compiler Hardening
```cmake
# CMake hardening flags
target_compile_options(app PRIVATE
    -Wall -Wextra -Wpedantic -Werror
    -fstack-protector-strong
    -D_FORTIFY_SOURCE=2
    -fPIE
)
target_link_options(app PRIVATE -pie -Wl,-z,relro,-z,now)
```

## Static Analysis
- `clang-tidy` with security checks enabled
- `cppcheck` for additional analysis
- Enable all warnings (`-Wall -Wextra -Wpedantic`)
- Treat warnings as errors in CI (`-Werror`)

## Secrets
- Never hardcode secrets — use environment variables
- Zero sensitive memory after use: `memset_s` or `SecureZeroMemory`
- Use constant-time comparison for secrets
