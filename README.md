# SCATCH

A modern e-commerce platform built with Node.js, Express, and MongoDB for managing products, owners, and users with secure authentication and session management.

## Features

- **User Authentication & Authorization** - Secure login with JWT tokens and bcrypt password hashing
- **Multi-role Support** - Separate routes and functionality for owners and users
- **Product Management** - Full product catalog with owner controls
- **Session Management** - Express sessions with flash messaging for user feedback
- **File Upload Support** - Multer integration for handling file uploads
- **EJS Templating** - Dynamic server-side rendered views
- **Environment Configuration** - Dotenv support for secure configuration management
- **Cookie Handling** - Secure cookie parsing and management

## Security Features

- **Password Hashing** - Bcrypt for secure password storage
- **JWT Tokens** - JSON Web Tokens for API authentication
- **Session Security** - Express sessions with configurable secrets
- **Environment Variables** - Sensitive data stored in .env files
- **CORS & Middleware** - Proper middleware configuration for security

## Technology Stack

- **Backend**: Node.js with Express
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS Templates with CSS
- **Authentication**: JWT + Bcrypt
- **File Handling**: Multer
