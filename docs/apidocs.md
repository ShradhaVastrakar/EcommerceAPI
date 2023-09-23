# API Documentation

This document provides documentation for the Triveous Ecommerce application's API endpoints.

## Authentication

### Register User

**POST /api/users/register**

Register a new user.

#### Request Body

- **name** (string, required): The user's name.
- **email** (string, required): The user's email address.
- **password** (string, required): The user's password.
- **role** (string): The user's role Customer(by default).

#### Response

- Status Code: 200 OK
- Response Body: User registration successful.

### Login User

**POST /api/users/login**

Log in an existing user.

#### Request Body

- **email** (string, required): The user's email address.
- **password** (string, required): The user's password.

#### Response

- Status Code: 200 OK
- Response Body: User login successful with a JWT token.

<br>

## Products

### Get All Products

**GET /api/products/**

Retrieve a list of all products.

#### Response

- Status Code: 200 OK
- Response Body: Array of product objects.

### Get Product Details

**GET /api/products/product/details/:productId**

Retrieve details of a specific product by its ID.

#### Request Parameters

- **productId** (string, required): The ID of the product.

#### Response

- Status Code: 200 OK
- Response Body: Details of the product.

### Get Products by Category

**GET /api/products/category/details/:categoryId**

Retrieve products by a specific category.

#### Request Parameters

- **categoryId** (string, required): The ID of the category.

#### Response

- Status Code: 200 OK
- Response Body: Array of product objects within the specified category.

### Add Product

**POST /api/products/**

Add a new product.

#### Request Body

- **name** (string, required): The name of the product.
- **description** (string, required): A description of the product.
- **imageUrl** (string, required): A Image of the product.
- **price** (number, required): The price of the product.
- **category** (string, required): The category of the product.

#### Response

- Status Code: 200 OK
- Response Body: The added product.

### Update Product

**PUT /api/products/:productId**

Update a product by its ID.

#### Request Parameters

- **productId** (string, required): The ID of the product to update.

#### Request Body

- **name** (string, optional): The updated name of the product.
- **imageUrl** (string, required): A Image of the product.
- **description** (string, optional): The updated description of the product.
- **price** (number, optional): The updated price of the product.
- **category** (string, optional): The updated category of the product.

#### Response

- Status Code: 200 OK
- Response Body: The updated product.

### Delete Product

**DELETE /api/products/:productId**

Delete a product by its ID.

#### Request Parameters

- **productId** (string, required): The ID of the product to delete.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the product has been deleted.

<br>

## Categories

### Get All Categories

**GET /api/categories/**

Retrieve a list of all categories.

#### Response

- Status Code: 200 OK
- Response Body: Array of category objects.

### Get Category by ID

**GET /api/categories/:categoryId**

Retrieve a category by its ID.

#### Request Parameters

- **categoryId** (string, required): The ID of the category.

#### Response

- Status Code: 200 OK
- Response Body: Details of the category.

### Create Category

**POST /api/categories/**

Create a new category.

#### Request Body

- **name** (string, required): The name of the category.

#### Response

- Status Code: 200 OK
- Response Body: The added category.

### Update Category

**PUT /api/categories/:categoryId**

Update a category by its ID.

#### Request Parameters

- **categoryId** (string, required): The ID of the category to update.

#### Request Body

- **name** (string, required): The updated name of the category.

#### Response

- Status Code: 200 OK
- Response Body: The updated category.

### Delete Category

**DELETE /api/categories/:categoryId**

Delete a category by its ID.

#### Request Parameters

- **categoryId** (string, required): The ID of the category to delete.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the category has been deleted.

<br>

## Cart

### Add to Cart

**POST /api/cart/add-to-cart**

Add a product to the user's shopping cart.

#### Request Body

- **items** (string, required): The items of the product to add to the cart.
- **productId** (string, required): The ID of the product to add to the cart.
- **quantity** (number, required): The quantity of the product to add to the cart.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the product has been added to the cart.

### View Cart

**GET /api/cart/view-cart/:userId**

- **userId** (string, required): The ID of the user to view cart.

Retrieve the user's shopping cart.

#### Response

- Status Code: 200 OK
- Response Body: Array of product objects in the user's cart.

### Update Cart

**PUT /api/cart/update-cart/:userId**

- **userId** (string, required): The ID of the user to update cart.

Update the user's shopping cart.

#### Request Body

- **cart** (array, required): An array of objects representing the updated cart.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the cart has been updated.

### Remove from Cart

**DELETE /api/cart/remove-from-cart/:userId/:productId**

Remove a product from the user's shopping cart.

#### Request Parameters

- **productId** (string, required): The ID of the product to remove from the cart.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the product has been removed from the cart.

<br>

## Orders

### Place Order

**POST /api/orders/place-order/:userId**

- **userId** (string, required): The ID of the user to place order.

Place an order using the items in the user's shopping cart.

#### Response

- Status Code: 200 OK
- Response Body: Details of the placed order.

### Order History

**GET /api/orders/order-history/:userId**

- **userId** (string, required): The ID of the user to view order history.

Retrieve the user's order history.

#### Response

- Status Code: 200 OK
- Response Body: Array of order objects in the user's history.

### Order Details

**GET /api/orders/order-details/:orderId**

Retrieve details of a specific order by its ID.

#### Request Parameters

- **orderId** (string, required): The ID of the order.

#### Response

- Status Code: 200 OK
- Response Body: Details of the order.

### Update Order Status

**PUT /api/orders/update-order-status/:orderId**

Update the status of a specific order by its ID.

#### Request Parameters

- **orderId** (string, required): The ID of the order to update.

#### Request Body

- **status** (string, required): The updated status of the order.

#### Response

- Status Code: 200 OK
- Response Body: Message indicating the order status has been updated.

### Logger MIddleware

- Each and every route will be logged in path.txt file when the user hit any API.

### Admin Credential to visit forbidden sites
- email: "shradha@gmail.com"
- password: "123"