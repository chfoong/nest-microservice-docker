#!/bin/bash

mongoimport --host mongodb --db nest-microservice --collection items --type json --file /items.json --jsonArray
mongoimport --host mongodb --db nest-microservice --collection users --type json --file /users.json --jsonArray