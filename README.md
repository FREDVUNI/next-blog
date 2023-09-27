<div align="center">
  <img src="your-blog-logo.png" alt="Blog Logo" width="200">
</div>

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
   git clone https://github.com/yourusername/nextjs-blog.git
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

## 🌐 API Routes

API routes in the `api/` directory handle CRUD operations for blog posts. You can customize and extend these routes as needed.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. **Fork the Repository.**
2. **Create a New Branch:** Use a descriptive name for your feature or bug fix.
3. **Make Your Changes:** Write clean and well-documented code.
4. **Push Your Changes:** Push your branch to your fork.
5. **Create a Pull Request:** Submit your changes to the `main` branch of this repository.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---
