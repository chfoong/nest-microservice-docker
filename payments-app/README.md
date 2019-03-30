# PaymentsApp

- Refactor from original PaymentsApp
- Code base created through nestjs/cli
- Implemented API module /payments
    - No MongoDB to persist state
- Implemented DTO
    - With Swagger APIModalProperty
    - With Class-Validator, Nested
- Added Swagger decorator
    - Enabled Swagger docs test
- Added Bearer Authentication
    - Using stub value in development.json during start:dev
- Added ValidationPipe to validate inputs


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```
