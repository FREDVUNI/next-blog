<p align="center">
  <img src="https://raw.githubusercontent.com/FREDVUNI/next-blog/main/src/app/favicon.ico" alt="Blog Logo" width="100"/>
</p>

# Next.js Blog with Dark/Light Theme 🌙☀️

A stylish and customizable Next.js blog template with a sleek dark and light theme, powered by Prisma for MongoDB database access.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running as a service or locally)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/FREDVUNI/nextjs-blog.git
   cd nextjs-blog
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Configure Prisma:**

   Rename `.env.example` to `.env` and update the MongoDB connection string.

4. **Generate Prisma Client:**

   ```bash
   npx prisma generate
   ```

## 📂 Project Structure

- `pages/`: Next.js pages for routing.
- `components/`: Reusable React components.
- `styles/`: CSS styles and theme-specific styles.
- `api/`: API routes for CRUD operations.
- `prisma/`: Prisma schema and configuration.

## 🖥️ Usage

### Running Locally

To run the blog locally, use the following command:

```bash
npm run dev
```

The blog will be available at `http://localhost:3000`.

### Themes

This blog supports both dark 🌙 and light ☀️ themes. Users can switch between themes by clicking a theme switcher button. Styles and themes can be customized in the `styles/` directory.

## Setting up Prisma with Google Auth and MongoDB

This guide outlines the steps required to integrate Prisma with Google Authentication while utilizing MongoDB as the database.

## Prerequisites

- Node.js installed
- Prisma CLI installed globally (`npm install prisma -g`)
- MongoDB database set up
- Google Developer Console project and OAuth 2.0 credentials

## Steps

### 1. Clone Repository

Clone the repository to your local machine:

```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies

Install project dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Configure Prisma

Edit the Prisma schema to define your data model (`schema.prisma`):

```prisma
// schema.prisma
datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String @id @default(uuid())
  email     String @unique
  name      String?
  // Add other fields as needed
}
```

### 4. Generate Prisma Client

Run the Prisma CLI to generate the Prisma Client:

```bash
npx prisma generate
# or
prisma generate
```

### 5. Configure Google Authentication

Set up the Google Developer Console project and obtain OAuth 2.0 credentials (client ID and secret).

### 6. Implement Authentication

Integrate Google Authentication using libraries like Passport.js or the Google Auth library.

### 7. Connect Prisma with MongoDB

Update the `.env` file with your MongoDB connection string:

``
DATABASE_URL="mongodb://<username>:<password>@<host>:<port>/<database>"
``

### 8. Start the Application

Run the application:

```bash
npm start
# or
yarn start
```

Visit `http://localhost:3000` in your browser to access the application.

## Additional Notes

- Ensure proper error handling and security measures for authentication.
- Refer to Prisma and MongoDB documentation for detailed configurations and usage.

---

## 🌐 API Routes

API routes in the `api/` directory handle CRUD operations for blog posts. You can customize and extend these routes as needed.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository.**
2. **Create a New Branch:** Use a descriptive name for your feature or bug fix.
3. **Make Your Changes:** Write clean and well-documented code.
4. **Push Your Changes:** Push your branch to your fork.
5. **Create a Pull Request:** Submit your changes to the `main` branch of this repository.
