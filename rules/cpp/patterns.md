# C++ Patterns

## RAII (Resource Acquisition Is Initialization)
- All resources managed via objects with deterministic destructors
- File handles: `std::fstream` (auto-closes)
- Locks: `std::lock_guard`, `std::unique_lock`
- Memory: smart pointers
- Custom RAII wrappers for C APIs

## Smart Pointer Usage
| Type | Ownership | Use Case |
|------|-----------|----------|
| `unique_ptr` | Exclusive | Default choice, factory returns |
| `shared_ptr` | Shared | Multiple owners, caches |
| `weak_ptr` | Non-owning | Break cycles, observers |

## Concurrency
- `std::jthread` (C++20) with cooperative cancellation
- `std::mutex` + `std::lock_guard` for mutual exclusion
- `std::shared_mutex` for read-heavy workloads
- `std::atomic` for lock-free simple operations
- `std::async` / `std::future` for task-based parallelism
- Avoid data races: prefer message passing or immutable data

## Templates & Concepts (C++20)
```cpp
template<typename T>
concept Serializable = requires(T t) {
    { t.serialize() } -> std::convertible_to<std::string>;
};

template<Serializable T>
void save(const T& obj) { /* ... */ }
```

## Build Systems
| System | Use Case |
|--------|----------|
| CMake | Industry standard, cross-platform |
| vcpkg / Conan | Package management |
| Ninja | Fast build backend |

## Common Libraries
| Purpose | Library |
|---------|---------|
| Testing | GoogleTest, Catch2 |
| JSON | nlohmann/json |
| HTTP | cpp-httplib, Boost.Beast |
| Logging | spdlog |
| CLI | CLI11 |
| Formatting | fmt (std::format in C++20) |
