# GramophoneStore
 

Gramaphone Store is a fullstack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to perform CRUD (Create, Read, Update, Delete) operations to add, edit, and delete records information.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new records
- View all records in Table view or Card view
- Update existing records
- Delete records
- Responsive design

## Technologies Used

- **MongoDB**: NoSQL database for storing records data
- **Express.js**: Web framework for Node.js
- **React**: Frontend library for building user interfaces
- **Node.js**: JavaScript runtime for server-side development
- **Tailwind CSS**: Utility-first CSS framework for styling

## Installation

1. Clone the repository
    ```sh
    git clone https://github.com/yourusername/gramaphone-store.git
    ```
2. Navigate to the project directory
    ```sh
    cd gramaphone-store
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
    MONGO_URI=your_mongodb_uri
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

## Usage

1. Navigate to `http://localhost:3000` in your web browser.
2. Use the interface to add, view, update, and delete records.

## API Endpoints

- `GET /records` - Get all records
- `POST /records` - Create a new record
- `GET /records/:id` - Get a single record by ID
- `PUT /records/:id` - Update a record by ID
- `DELETE /records/:id` - Delete a record by ID

## Screenshots

![Home Page](screenshots/home.png)
*Description of the home page screenshot*

![Add Record](screenshots/add-record.png)
*Description of the add record page screenshot*

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
