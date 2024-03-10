### README.md

#### Introduction
This is a simple Node.js application for managing restaurant orders and deliveries. It allows restaurants to update their menu, manage their online status, accept/reject orders, and receive ratings from customers. Delivery agents can update delivery statuses. Users can place orders, view order details, and leave ratings.

#### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd <project-directory>
   ```
3. Install dependencies:
   ```
   npm install
   ```

4.Change the port and mongoose url from app.js files

5. Start the server:
   ```
   npm start
   ```

#### Usage
You can use Postman to interact with the API endpoints.

#### API Endpoints

##### Delivery Routes
- **Update Delivery Status**
  - Endpoint: PUT /delivery/status/:id
  - Body: 
    ```json
    {
      "status": "<new-status>"
    }
    ```
    
##### Restaurant Routes
- **Update Menu**
  - Endpoint: PUT /restaurant/menu/:id
  - Body: 
    ```json
    {
      "menu": [
        {
          "name": "<item-name>",
          "price": <item-price>
        },
        ...
      ]
    }
    ```
- **Update Status**
  - Endpoint: PUT /restaurant/status/:id
  - Body:
    ```json
    {
      "status": "<new-status>"
    }
    ```
- **Accept/Reject Order**
  - Endpoint: POST /restaurant/orders/:id
  - Body:
    ```json
    {
      "status": "<accepted-or-rejected>"
    }
    ```
- **Add Item to Menu**
  - Endpoint: PUT /restaurant/menu/:id/add-item
  - Body:
    ```json
    {
      "name": "<item-name>",
      "price": <item-price>
    }
    ```
- **Get Menu Items**
  - Endpoint: GET /restaurant/menu/:id/items

##### User Routes
- **Get Restaurants**
  - Endpoint: GET /users/restaurants
- **Place Order**
  - Endpoint: POST /users/orders
  - Body:
    ```json
    {
      "restaurantId": "<restaurant-id>",
      "customerId": "<customer-id>",
      "items": [
        {
          "name": "<item-name>",
          "quantity": <quantity>
        },
        ...
      ]
    }
    ```
- **Get Order Details**
  - Endpoint: GET /users/orders/:id
- **Leave Rating**
  - Endpoint: POST /users/ratings
  - Body:
    ```json
    {
      "orderId": "<order-id>",
      "deliveryAgentId": "<delivery-agent-id>",
      "rating": <rating>
    }
    ```

#### Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests.

#### License
This project is licensed under the [MIT License](LICENSE).
