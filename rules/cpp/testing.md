# C++ Testing

## Framework: GoogleTest
```cpp
#include <gtest/gtest.h>

TEST(UserServiceTest, CreatesUserWithValidInput) {
    UserService service;
    auto result = service.create("John", "john@test.com");
    ASSERT_TRUE(result.has_value());
    EXPECT_EQ(result->name, "John");
}

TEST(UserServiceTest, RejectsEmptyName) {
    UserService service;
    auto result = service.create("", "john@test.com");
    ASSERT_FALSE(result.has_value());
}
```

## Test Organization
```
test/
  unit/
    test_user_service.cpp
    test_parser.cpp
  integration/
    test_database.cpp
  CMakeLists.txt
```

## Mocking (GoogleMock)
```cpp
class MockRepository : public IUserRepository {
public:
    MOCK_METHOD(std::optional<User>, findById, (int id), (override));
    MOCK_METHOD(void, save, (const User& user), (override));
};
```

## Test Fixtures
```cpp
class DatabaseTest : public ::testing::Test {
protected:
    void SetUp() override { db = createTestDb(); }
    void TearDown() override { db.reset(); }
    std::unique_ptr<Database> db;
};

TEST_F(DatabaseTest, InsertsRecord) { /* uses db */ }
```

## Coverage
- `gcov` + `lcov` for GCC
- `llvm-cov` for Clang
- Target: 80%+ line coverage
- Integrate in CMake: `--coverage` flag

## CI Commands
```bash
cmake -B build -DCMAKE_BUILD_TYPE=Debug
cmake --build build
cd build && ctest --output-on-failure
```

## Sanitizers (CI-required)
- AddressSanitizer: `-fsanitize=address` (memory errors)
- UndefinedBehaviorSanitizer: `-fsanitize=undefined`
- ThreadSanitizer: `-fsanitize=thread` (data races)
