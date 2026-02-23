# Java Patterns

## Spring Boot Architecture
```
Controller → Service → Repository → Database
     ↓           ↓
   DTO     Domain Entity
```
- Controllers: thin, validation + delegation only
- Services: business logic, transaction management
- Repositories: data access via Spring Data JPA

## Dependency Injection
- Constructor injection (no `@Autowired` on fields)
- Use interfaces for testability
- `@Configuration` classes for complex bean wiring
- Profiles for environment-specific beans

## Exception Handling
- `@RestControllerAdvice` for global exception handling
- Custom exception hierarchy: `BusinessException`, `NotFoundException`
- Map exceptions to HTTP status codes in handler
- Never expose stack traces in API responses

## Records as DTOs
```java
public record CreateUserRequest(
    @NotBlank String name,
    @Email String email
) {}

public record UserResponse(
    Long id, String name, String email
) {
    public static UserResponse from(User user) {
        return new UserResponse(user.getId(), user.getName(), user.getEmail());
    }
}
```

## Common Libraries
| Purpose | Library |
|---------|---------|
| Web framework | Spring Boot 3 |
| Database | Spring Data JPA, Hibernate |
| Validation | Jakarta Validation (Bean Validation) |
| Mapping | MapStruct |
| Logging | SLF4J + Logback |
| Testing | JUnit 5, Mockito, Testcontainers |
| Build | Maven or Gradle (Kotlin DSL) |
| API docs | SpringDoc OpenAPI |
