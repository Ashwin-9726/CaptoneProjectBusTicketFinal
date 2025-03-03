http://localhost:8080/swagger-ui/index.html#/  (for accessing swagger URL for API endpoints)

A full-stack application for booking bus tickets.

## Features
- User registration and authentication (JWT)
- Bus route search and booking
- User profile management
- Booking history
- Responsive UI with Bootstrap
- Unit tests for backend and frontend
- API documentation with Swagger

## Prerequisites
- Java 17+
- Maven 3.8+
- Node.js 16+, npm 8+
- MySQL 8.0+

## API Endpoints
- **POST /api/auth/register**: Register a user
- **POST /api/auth/login**: Login and get JWT
- **GET /api/buses**: List all buses
- **GET /api/buses/search**: Search buses by route
- **POST /api/bookings**: Create a booking
- **GET /api/bookings/history**: Get booking history
- **GET /api/users/profile**: Get user profile
- **PUT /api/users/profile**: Update profile
- **PUT /api/users/change-password**: Change password
