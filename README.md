# Medieval Times Products 🏰⚔️🛡️

This project was developed while I was studying 'Typescript and Sequelize' at Trybe Programming School.

This application was created to register medieval products, list items, validate products, and facilitate users login.

Regular deadline: July 07, 2023 at 2:00 pm


<details>
  <summary><strong>🏗 Project structure</strong></summary><br />

The files created by me are in `src/`:

- In the folder  📁`controllers` there are the files responsible for receiving all user requests and controlling what will be shown to the user.
- In the folder  📁`services` there are the files responsible for doing the business rules.
- In the folder  📁`routers` there are the files responsible for defining routes.
- In the folder  📁`middlewares` there are the files responsible for the validations.
- In the folder  📁`utils` there is a file responsible for generate JWT tokens.
- Inside the 📁`types` folder, you'll find the files responsible for storing type definitions for various entities or objects within the code.

The created endpoints are:
- GET /products
- POST /products
- POST /login

The tests created by me are in `tests/`:

- Integration tests were performed on the POST/login route.
- Unit tests were performed on the POST/products and GET/products route.

Sinon and Chai are the test libraries used. 

</details>

<details>
  <summary><strong>🖥️ To access</strong></summary><br />

1 - Clone the repository:
`git@github.com:VicSales28/project-medieval-times.git`

2 - Enter the repository folder you just cloned.

You must be using node version 16 (or higher).

To check your version, use the command:
`nvm --version`

<details>
  <summary><strong>Specifications on using Docker🐳</strong></summary><br />

Run the services app-trybesmith and db using the command `docker-compose up -d --build`.

Remember to stop the local MySQL if you are using it on the default port (3306), or adjust it if you want to use the application in containers.

These services will start a container named trybesmith_api and another named trybesmith_db.

From here, you can run the trybesmith_api container via the CLI or open it in VS Code.

Execute the command `npm run db:reset` to create the database, the tables that will be used, and populate them.

Use the command `docker exec -it trybesmith_api bash` to enter the container.

This will grant you access to the interactive terminal of the container created by the compose, which is running in the background.

</details>

<details>
  <summary><strong>🧪 Running tests locally </strong></summary>


To run tests locally use the following command:

```bash
npm run test:local
```

To verify coverage tests use the following command:

```bash
npm run test:coverage
```
</details>

</details>

<details>
  <summary><strong>🗣 Feedbacks</strong></summary><br />
  
_Give me feedbacks, I'm open to new ideas_ 😉

</details>

