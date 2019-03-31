# OrdersApp

- Refactor from original OrdersApp 
- Code base created through nestjs/cli
- Implemented API module /orders [POST, GET, DELETE]
    - With MongoDB to persist state
- Implemented Models
    - With Typegoose to bridge with MongoDB
    - With Swagger APIModalProperty
- Added Swagger decorator
    - Enabled Swagger docs test
- Added Bearer Authentication
    - Using stub value in MONGODB/users collection
- Added Promise
    - Created an async process concurrent with POST response. It will not affect POST response (Order Created)
    - Http Request to PaymentsApp
    - Update Order as Confirmed on Order(:id)
    - Wait 15 seconds
    - Update Order as Delivered on Order(:id)
- MongoDB was preloaded with /users and /items as initial stub data.
- Users were authenticated through predefined permanent_stub_bearer as design simplicity


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
