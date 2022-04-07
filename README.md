# lambda-crud-ex

lambda-crud-example

## build
`$> sam build`

## dynamodb docker run
`$> docker-compose up`

## local start
`$> sam local start-api`

## API Test

### GET `http://localhost:3000/kanban/cards`
---

### POST `http://localhost:3000/kanban/cards`
```
{
    "id":"unique_string",
    "category":"content",
    "title":"content"
}
```
---

### PUT `http://localhost:3000/kanban/cards/{id}`
```
{
    "category":"content",
    "title":"content"
}
```
---

### DELETE `http://localhost:3000/kanban/cards/{id}`
