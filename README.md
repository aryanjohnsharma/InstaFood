# InstaFood

A food ordering and delivery web application.

## Overview

InstaFood is a full-stack web application that allows users to browse restaurants, view menus, place orders, and track their food delivery. The project is designed to offer a seamless, user-friendly experience for both customers and restaurant partners.

## Features

- User authentication (sign up, login, forgot password)
- Browse restaurants and their menus
- Add items to cart and modify cart contents
- Checkout and make payments
- Order confirmation and tracking
- View order history and details
- User profile management

## Tech Stack

- **Frontend:** React (bootstrapped with Create React App)
- **Backend:** Java Spring Boot (RESTful API)
- **Styling:** CSS (custom, with support for dark mode)
- **Routing:** React Router
- **State Management:** React Context (for cart and user state)
- **Build Tools:** Webpack, Babel (via Create React App)

## Folder Structure

```
InstaFood/
├── food-delivery-app/      # Java Spring Boot backend
│   └── src/
│       └── main/
│           └── java/
│               └── com/aryansharma_n/food_delivery_app/
├── frontend/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── pages/
│       └── App.js
└── README.md
```

## Getting Started

### Backend (Spring Boot)

1. Make sure you have Java 17+ and Maven installed.
2. Navigate to `food-delivery-app/`.
3. Run the backend:

   ```bash
   mvn spring-boot:run
   ```

   The API will be served (by default) on `http://localhost:8080`.

> CORS is configured to allow requests from `http://localhost:3000` (the React frontend).

### Frontend (React)

1. Navigate to `frontend/`.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will run at [http://localhost:3000](http://localhost:3000).

### Available Scripts

In the `frontend` directory, you can run:

- `npm start` — Runs the app in development mode.
- `npm test` — Launches the test runner.
- `npm run build` — Builds the app for production.
- `npm run eject` — Ejects the build configuration (irreversible).

For more, see the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## Application Pages

- `/` — Home (restaurant listings)
- `/signup` — User registration
- `/login` — User login
- `/forgotpassword` — Password recovery
- `/restaurant/:restaurantId` — Menu for a specific restaurant
- `/cart` — Shopping cart and checkout
- `/payment` — Payment page
- `/order-confirmation/:orderId` — Order confirmation and tracking
- `/profile` — User profile
- `/orders` — Order history
- `/order/:id` — Order details

## Customization

- You can update the backend's CORS config in `WebConfig.java` if running frontend on a different host/port.
- The frontend and backend communicate via RESTful endpoints; adjust the base URLs as needed.

## License

This project is for educational/demo purposes. License information is not specified.

---

> Built by [@aryanjohnsharma](https://github.com/aryanjohnsharma)
