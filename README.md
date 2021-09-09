# FAKE REST API

### Request

`Listar usuários`

`Get /users`

### Response

    Status: 200 OK
    {
      "name": "Lar de idosos",
      "email": "filipe@mail.com",
      "address": "Rua João Coelho, Bairro: Santa Clara, nº100, Cidade: Manaus",
      "password": "$2a$10$eFmCPmPsaWpbymqbn5R/iOtIVLIhKi4kqvkZv2HYVQT7Z7IgpvXdO",
      "type": "Institution",
      "id": 1
    },
    {
    "name": "Douglas",
    "email": "douglas@mail.com",
    "password": "$2a$10$eFmCPmPsaWpbymqbn5R/iOtIVLIhKi4kqvkZv2HYVQT7Z7IgpvXdO",
    "type": "Voluntary",
    "id": 2
    }

### Request

`Criar Conta`

`Post /register`

    Exemplos
    {
      "email": "eduardo@mail.com",
      "password": "123456",
      "name": "Eduardo",
      "address": "Av.: Brasil, Bairro: Santa Clara, nº100, Cidade: São Paulo",
      "type": "Voluntary"
    }

    {
      "email": "lardeidosos@mail.com",
      "password": "123456",
      "name": "Lar de idosos",
      "address": "Av.: Brasil, Bairro: Santa Clara, nº100, Cidade: São Paulo",
      "type": "Institution"
    }

### Response

    {
     "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVkdWFyZG9AbWFpbC5jb20iLCJpYXQiOjE2MzExMTY2MTMsImV4cCI6MTYzMTEyMDIxMywic3ViIjoiNiJ9.LxASXk4wAhvXN1UO3XNfqPq6_Bm5z7NUaI7xYEw_8og"
    }


# Requisições da instituição 

### Request

`Criar Eventos`

`Post /event`

    {
      "local": "Av.: Plugisi n°726",
      "date": "27/08/2021",
      "hour": "14:00",
      "duration": "2h30min",
      "event-name": "Cinema",
      "idInstitution": 1
    }


### Response

    {
        "local": "Av.: Plugisi n°726",
        "date": "27/08/2021",
        "hour": "14:00",
        "duration": "2h30min",
        "event-name": "Cinema",
        "idInstitution": 1,
        "id": 3
    }


### Request

`Criar doação`

`Post /donations`

    {
      "name": "Cobertores",
      "quantity": 6,
      "received": 0,
      "idInstitution": 1
    }

### Response

    {
      "name": "Cobertores",
      "quantity": 6,
      "received": 0,
      "idInstitution": 1,
      "id": 3
    }

### Request

`Atualizar doação`

`Patch /donations/1`

    {
        "received": 4
    }

### Response

    {
        "name": "Cobertores",
        "quantity": 6,
        "received": 4,
        "idInstitution": 1,
        "id": 1
    }

# Requisições para o voluntário

### Request

`Inscrever na instituição`

`Post/subscribeInstitution`

    {
      "idUser": 2,
      "idInstitution": 1
    }

### Response


    {
        "idUser": 2,
        "idInstitution": 1,
        "id": 5
    }


### Request

`Usuários inscritos na instituição`

`Get/subscribeInstitution?idInstitution=1`

### Response

    [
    {
        "idUser": 2,
        "idInstitution": 1,
        "id": 1
    },
    {
        "idUser": 1,
        "idInstitution": 1,
        "id": 2
    },
    {
        "idUser": 2,
        "idInstitution": 1,
        "id": 5
    }
    ]


### Request

`Inscrever-se em evento`

`Post/subscribeEvents`

    {
      "eventId": 1,
      "idInstitution": 1,
      "idUser": 1,
      "event": {
        "local": "Av.: Plugisi n°726",
        "date": "27/08/2021",
        "hour": "14:00",
        "duration": "2h30min",
        "event-name": "Cinema"
      }
    }

### Response
  
    {
      "eventId": 1,
      "idInstitution": 1,
      "idUser": 1,
      "event": {
        "local": "Av.: Plugisi n°726",
        "date": "27/08/2021",
        "hour": "14:00",
        "duration": "2h30min",
        "event-name": "Cinema"
      }
    }

### Request

`Verificar em qual evento o voluntário está inscrito`

`Get/subscribeEvents?idUser=1`

### Response

    {
      "idInstitution": 1,
      "idUser": 1,
      "id": 1,
      "idEvent": 1,
      "event": {
        "local": "Av.: Plugisi n°726",
        "date": "27/08/2021",
        "hour": "14:00",
        "duration": "2h30min",
        "event-name": "Cinema"
      }
    }