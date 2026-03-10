# Library API

A RESTful API for managing a library system with books, users, and borrowing records.

## Features

- User authentication and management
- Book catalog management
- Borrowing and returning books
- Inventory tracking

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn

### Installation

```bash
git clone https://github.com/MuhammadTalha57/library-api.git
cd library-api
npm install
```

### Usage

```bash
npm start
```

The API will be available at `http://localhost:3000`

## API Endpoints

- `GET /books` - List all books
- `POST /books/create` - Add a new book
- `POST /books/delete` - Delete a book
- `POST /books/update` - Update a book
- `POST /books/borrow` - Borrow a book
- `POST /books/return` - Return a book

- `POST /auth/register` - Signup
- `POST /auth/login` - Login

## Project Structure

```
library-api/
├── src/
├── routes/
├── models/
└── controllers/
```

## License

MIT
