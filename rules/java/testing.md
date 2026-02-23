# Java Testing

## Framework Stack
- JUnit 5 (Jupiter) for test runner
- Mockito for mocking
- AssertJ for fluent assertions
- Testcontainers for integration tests (DB, Redis, etc.)
- MockMvc for controller testing

## Structure
```
src/test/java/com/project/
  unit/          # Pure unit tests (no Spring context)
  integration/   # @SpringBootTest tests
  e2e/           # Full API tests
```

## Unit Tests
```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock UserRepository userRepo;
    @InjectMocks UserService service;

    @Test
    void shouldCreateUser_whenValidInput() {
        when(userRepo.save(any())).thenReturn(testUser());
        var result = service.create(validRequest());
        assertThat(result.name()).isEqualTo("John");
        verify(userRepo).save(any());
    }
}
```

## Integration Tests
- `@SpringBootTest` with `@Testcontainers` for real DB
- `@DataJpaTest` for repository-only tests (faster)
- `@WebMvcTest` for controller-only tests
- Use `@TestConfiguration` for test-specific beans

## Coverage
- JaCoCo for coverage reports
- Target: 80%+ line coverage
- Enforce in CI: `mvn verify -Djacoco.threshold=0.80`
- Focus on service layer coverage

## Best Practices
- Test naming: `should[Expected]_when[Condition]`
- One assertion concept per test
- Use `@ParameterizedTest` for multiple inputs
- Use `@Nested` for grouping related tests
- No test interdependencies — each test is independent
- Use factories for test data (`TestDataFactory`)
