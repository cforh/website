# Dependency Update Process

This guide covers the tasks and hints for developers.

## Objective

Update all project dependencies and verify that the application still builds and passes checks successfully.

---

## 1. Upgrade Dependencies

The following command was used to upgrade all dependencies recursively and interactively:

`pnpm upgrade -riL`

Follow the guide until all packages get updated.

---

## 2. Run Project Checks

After upgrading, the project was verified using:

`pnpm check`

This runs:

`eslint . --max-warnings 0`

Result:

- No linting errors
- No warnings

---

## 3. Build the Project

To ensure everything still compiles correctly:

`pnpm build`

Result:

- Build completed successfully
- Static pages generated
- Client bundle built without errors
