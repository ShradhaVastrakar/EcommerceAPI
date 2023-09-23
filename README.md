<h1 align="center">Triveous Ecommerce API</h1>


Triveous Ecommerce API is the server-side component of our robust e-commerce platform,  powering everything from user authentication to order processing. Built with Node.js, Express.js, and MongoDB, it provides the essential backend functionality for a complete online shopping experience.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Server](#running-the-server)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)

## Features

Our Triveous Ecommerce Backend API offers a comprehensive set of features to drive your e-commerce platform:

- **User Management:**
  - User registration.
  - Secure user authentication using JSON Web Tokens (JWT).

- **Category and Product Management:**
  - Create, update, and delete product categories.
  - Manage product details including title, price, description, and availability.

- **Shopping Cart:**
  - Add products to the cart.
  - View, update quantities, and remove items from the cart.

- **Order Processing:**
  - Place orders with automatic calculation of order totals.
  - Order history and order details retrieval.

- **Error Handling:**
  - Robust error handling and validation for data integrity.

- **RESTful APIs:**
  - Well-documented RESTful APIs for seamless integration with frontend applications.

## Technology Stack

Our backend leverages the following technologies to provide a secure and scalable e-commerce solution:

- **Node.js:** A server-side JavaScript runtime for building fast and scalable network applications.

- **Express.js:** A minimal and flexible Node.js web application framework that simplifies the development of robust APIs.

- **MongoDB:** A NoSQL database for efficient data storage and retrieval.

- **Mongoose:** An elegant object modeling library for MongoDB, making it easy to manage database interactions.

- **JSON Web Tokens (JWT):** Secure user authentication and authorization.

## Getting Started

### Prerequisites

Before you start, ensure you have met the following requirements:

- **Node.js:** Install Node.js (LTS version) from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the repository:**

   ```shell
   git clone https://github.com/ShradhaVastrakar/EcommerceAPI.git

2. **Install Dependencies:**

    ```shell
    cd EcommerceAPI
    npm install / npm i

### Configuration

1. **Database Setup:** Configure the MongoDB connection by providing your database URI in the `.env` file:

    ```shell
    MONGO_URI = your_mongodb_uri


### Running the Server

Start the backend server:

    ```shell
    npm start
    # or
    node index.js
    # or
    nodemon index.js
    # or
    npm run start
    # or
    npm run server



## API Documentation

Our API is thoroughly documented to help you integrate the backend with your frontend. For detailed information, please refer to the [API documentation](docs/apidocs.md).

<br>

### Swagger API Docs :  <a href="http://52.22.2.243:8080/api-docs">click here</a>

<br>

## Folder Structure

We maintain a clean and organized folder structure for easy navigation and development. Get familiar with it in the [Folder Structure](docs/folderStructure.md) document.

### Admin Credential to visit forbidden sites
- email: "shradha@gmail.com"
- password: "123"

### Deployment 
- Backend Deployed on AWS,  Click on the link to go to the deployed site
- http://52.22.2.243:8080/
