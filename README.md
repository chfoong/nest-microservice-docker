# nest-microservice-docker
Simple Microservice with NestJS as backend and Docker

## Simple Diagram
```
+---------------------+                      +---------------------+     +---------------------+
|       (:4000)       |                      |       (:3000)       |     |       (:27000)      |
+---------------------+                      +---------------------+     +---------------------+
| payments-app (:4000)|                      |  orders-app (:3000) |     |   mongodb (:27017)  |
+---------------------+                      +---------------------+     +---------------------+
| # image:            |                      | # image:            |     | # image:            |
|  - node:latest      |                      |  - node:latest      |     |  - mongo:latest     |
|                     |    Promise Request   |                     |     | # links:            |
| POST /payments      | <------------------- | POST /orders        | --> |  - mongodb-seed     |
| with Auth           |   70% approval rate  | GET /orders/:id     |     |                     |
|                     |                      | DELETE /orders/:id  |     | Preloaded with      |
|                     |                      | with Auth           |     | items/ & users/     |
|                     |                      |                     |     | collections         |
| Swaggeer Testpoint  |                      | Swagger Testpoint   |     |                     |
| /api                |                      | /api                |     |                     |
|                     |                      |                     |     |                     |
+---------------------+                      +---------------------+     +---------------------+
+----------------------------------------------------------------------------------------------+
|                                                                                              |
|                                          Docker                                              |
|                                                                                              |
------------------------------------------------------------------------------------------------
```

## Implementation
- Refactor from https://github.com/chfoong/microservice-test
- With NestJS, Swagger, Typegoose + Mongoose, MongoDB
- Deployable through Docker with docker-compose
- Seeded data on items/ and users/ collections for easier illustration


## For more information
[OrdersApp](orders-app/README.md) OrdersApp README.

[PaymentsApp](payments-app/README.md) PaymentsApp README.

