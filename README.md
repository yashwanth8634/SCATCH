# SCATCH

A modern e-commerce platform built with Node.js, Express, and MongoDB for managing products, owners, and users with secure authentication and session management.

## 🚀 Features

- **User Authentication & Authorization** - Secure login with JWT tokens and bcrypt password hashing
- **Multi-role Support** - Separate routes and functionality for owners and users
- **Product Management** - Full product catalog with owner controls
- **Session Management** - Express sessions with flash messaging for user feedback
- **File Upload Support** - Multer integration for handling file uploads
- **EJS Templating** - Dynamic server-side rendered views
- **Environment Configuration** - Dotenv support for secure configuration management
- **Cookie Handling** - Secure cookie parsing and management

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB instance
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yashwanth8634/SCATCH.git
cd SCATCH
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
# Add other environment variables as needed
```

4. Start the application:
```bash
node app.js
```

The application will be running at `http://localhost:3000`

## 📁 Project Structure

```
SCATCH/
├── app.js                    # Main application entry point
├── config/
│   └── mongoose-connection.js # Database configuration
├── routes/
│   ├── index.js             # Main routes
│   ├── ownersRouter.js      # Owner-specific routes
│   ├── usersRouter.js       # User-specific routes
│   └── productsRouter.js    # Product management routes
├── public/                   # Static files (CSS, images, etc.)
├── views/                    # EJS template files
├── package.json             # Project dependencies
└── .env                      # Environment variables (create this file)
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.1.4 | MongoDB ODM |
| bcrypt | ^6.0.0 | Password hashing |
| jsonwebtoken | ^9.0.3 | JWT authentication |
| express-session | ^1.18.2 | Session management |
| ejs | ^4.0.1 | Template engine |
| cookie-parser | ^1.4.7 | Cookie parsing middleware |
| multer | ^2.0.2 | File upload handling |
| dotenv | ^17.2.3 | Environment variable management |
| connect-flash | ^0.1.1 | Flash messaging |
| config | ^4.2.0 | Configuration management |
| debug | ^4.4.3 | Debugging utility |

## 🔌 API Routes

### Authentication & Index
- `GET /` - Home page
- `POST /register` - User registration
- `POST /login` - User login

### Owner Routes (`/owner`)
- Owner-specific product management and administrative functions

### User Routes (`/user`)
- User profile and order management

### Product Routes (`/product`)
- Product listing, details, and browsing

## 🔐 Security Features

- **Password Hashing** - Bcrypt for secure password storage
- **JWT Tokens** - JSON Web Tokens for API authentication
- **Session Security** - Express sessions with configurable secrets
- **Environment Variables** - Sensitive data stored in .env files
- **CORS & Middleware** - Proper middleware configuration for security

## 🌐 Technology Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS Templates with CSS
- **Authentication**: JWT + Bcrypt
- **File Handling**: Multer

## 📝 Environment Variables

Create a `.env` file with the following variables:

```env
JWT_SECRET=your_secret_key_here
MONGODB_URI=mongodb://localhost:27017/scatch
NODE_ENV=development
PORT=3000
```

## 🚀 Getting Started

1. Install all dependencies
2. Configure your MongoDB connection
3. Set up environment variables in `.env`
4. Run the application: `node app.js`
5. Access the application at `http://localhost:3000`

## 📄 License

ISC

## 👤 Author

[yashwanth8634](https://github.com/yashwanth8634)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and submit pull requests.

## 📞 Support

For issues and questions, please open an issue on the [GitHub repository](https://github.com/yashwanth8634/SCATCH/issues).

---

**Last Updated**: January 2026
