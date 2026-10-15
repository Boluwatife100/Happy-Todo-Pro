# Happy Todo Pro

A full-stack Todo application built with Node.js, Express, PostgreSQL, and Prisma ORM. The project includes user authentication, secure password hashing, JWT-based authorization, and Docker support.

## Features

- User registration and authentication
- Password hashing with bcrypt
- JWT-based authentication
- Create and manage personal todo tasks
- PostgreSQL database integration
- Prisma ORM for database operations
- Docker and Docker Compose support
- RESTful API endpoints

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcryptjs
- **Containerization:** Docker and Docker Compose

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Docker Desktop
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Boluwatife100/Happy-Todo-Pro.git
   ```

2. Navigate into the project directory:

   ```bash
   cd Happy-Todo-Pro
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create your environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use:

   ```powershell
   Copy-Item .env.example .env
   ```

5. Update `.env` with your PostgreSQL connection string and JWT secret.

### Running with Docker

Start the application services using Docker Compose:

```bash
docker compose up --build
```

Ensure your environment variables and Docker configuration are set correctly before starting the services.

### Running Locally

If your PostgreSQL database is already running and your environment variables are configured, start the development server:

```bash
npm run dev
```

The server uses Node.js watch mode for development.

## API Testing

You can use the `todo-app.rest` file to test API requests with a compatible REST client, such as the REST Client extension in Visual Studio Code.

## Project Structure

```text
Happy-Todo-Pro/
├── migrations/
├── public/
├── src/
│   ├── middleware/
│   ├── prisma/
│   ├── routes/
│   ├── db.js
│   └── server.js
├── .env.example
├── Dockerfile
├── docker-compose.yaml
├── package.json
├── prisma.config.ts
└── todo-app.rest
```

## Environment Variables

Configure the required environment variables in your `.env` file. Refer to `.env.example` for the variables expected by the project.

Never commit your actual `.env` file or expose database credentials and JWT secrets.

## Author

**Boluwatife Adeniji**

GitHub: [@Boluwatife100](https://github.com/Boluwatife100)

---

Built as a practical full-stack development project to explore backend development, authentication, database management, and containerization.
