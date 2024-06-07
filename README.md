# GramaphoneStore
 

Gramaphone Store is a fullstack web application, built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to perform CRUD (Create, Read, Update, Delete) operations to add, edit, and delete records information.

The application is containerized using Docker to ensure consistency across different environments and to simplify deployment. Docker allows the application to run in isolated containers, each with its own dependencies and configurations.

Docker Compose is used to manage multi-container Docker applications. It allows you to define and run multi-container applications with ease using a docker-compose.yml file.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Application Without Docker](#running-the-application-without-docker)
  - [Running the Application With Docker](#running-the-application-with-docker)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new records
- View all records in Table view or Card view
- View details of each record
- Update existing records
- Delete records
- Responsive design

## Technologies Used

- **MongoDB Atlas**: Cloud-based NoSQL database for storing records data
- **Express.js**: Web framework for Node.js
- **React**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Docker**:Platform for developing, shipping, and running applications inside containers
- **Docker Compose**: Tool for defining and running multi-container Docker applications
- **Postman**: API testing and development tool

## Getting Started

### Prerequisites
Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account and cluster
- [Docker](https://www.docker.com/get-started) (if you want to run with Docker)
- [Docker Compose](https://docs.docker.com/compose/install/) (if you want to run with Docker)
### Running the Application Without Docker

1. Clone the repository
    ```sh
    git clone https://github.com/FayeAlangi/GramaphoneStore.git
    ```
2. Navigate to the project directory
    ```sh
    cd GramaphoneStore
    ```
3. Install server dependencies
    ```sh
    cd backend
    npm install
    ```
4. Install client dependencies
    ```sh
    cd ../frontend
    npm install
    ```
5. Set up environment variables
    - Create a `.env` file in the `backend` directory with the following contents:
    ```.env
    PORT=5555
    mongoDBURL=your_mongodb_uri
    ```
6. Start the development server
    ```sh
    cd ../backend
    npm run dev
    ```
7. Start the application
    ```sh
    cd ../frontend
    npm run dev
    ```
### Running the Application With Docker

1. Clone the repository
    ```sh
    git clone https://github.com/FayeAlangi/GramaphoneStore.git
    ```
2. Navigate to the project directory
    ```sh
    cd GramaphoneStore
    ```
3. Set up environment variables
    - Create a `.env` file in the `backend` directory with the following contents:
    ```.env
    PORT=5555
    mongoDBURL=your_mongodb_uri
    ```
4. Build and start the containers
    ```sh
    docker-compose up --build
    ```

## Usage

1. Frontend: `http://localhost:3000` .In your web browser, use the interface to add, view, update, and delete records.
3. Backend API: `http://localhost:5555`

## API Endpoints

- `GET /records` - Get all records
- `POST /records` - Create a new record
- `GET /records/:id` - Get a single record by ID
- `PUT /records/:id` - Update a record by ID
- `DELETE /records/:id` - Delete a record by ID


## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="Walkthrough.gif" width=400><br>

GIF created with LICEcap.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

Copyright 2024 Faye Alangi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
