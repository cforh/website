# Dependency Update Process

This guide covers the tasks and hints for developers.

## Objective

Update all project dependencies and verify that the application still builds and passes checks successfully.

---

## 1. Upgrade Dependencies

The following command was used to upgrade all dependencies recursively and interactively:

```bash
pnpm upgrade -riL
```

Follow the guide until all packages get updated. Final Result:

```
All of your dependencies are already up to date
```

No more packages required upgrading.

---

## 2. Run Project Checks

After upgrading, the project was verified using:

```bash
pnpm check
```

This runs:

```bash
eslint . --max-warnings 0
```

Result:

- No linting errors
- No warnings

---

## 3. Build the Project

To ensure everything still compiles correctly:

```bash
pnpm build
```

Result:

- Build completed successfully
- Static pages generated
- Client bundle built without errors
