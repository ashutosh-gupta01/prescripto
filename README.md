# Prescripto – Doctor Appointment Booking System

Prescripto is a full-stack doctor appointment booking application built using the MERN stack. It helps patients explore doctors, manage appointments, and maintain their profiles through a responsive user interface.

## Features

- **User Authentication:** Secure login and registration using JWT authentication.
- **Doctor Listings:** Browse doctors and view their profiles and specializations.
- **Appointment Booking:** Book and manage doctor appointments.
- **User Profiles:** View and update personal profile information.
- **Role-Based Access:** Separate functionality for patients, doctors, and administrators, according to the implemented roles.
- **Responsive UI:** Interface designed for desktop and mobile screens.
- **Backend APIs:** RESTful APIs for application data and operations.
- **Database Management:** MongoDB integration for storing application data.

## Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML5 and CSS3

**Backend**
- Node.js
- Express.js
- REST APIs
- JWT Authentication

**Database and Services**
- MongoDB
- Cloudinary for image storage, if configured
- Additional integrations as implemented in the project

## Project Structure

```text
Prescripto/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── package.json
└── README.md
```

*Note: Update the folder names above if your repository uses a different structure.*

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ashutosh-gupta01/prescripto.git
cd prescripto
```

### 2. Install Dependencies

Open a terminal in the backend directory:

```bash
cd backend
npm install
```

Open another terminal in the frontend directory:

```bash
cd frontend
npm install
```

### 3. Configure Environment Variables

Create the required `.env` file in the backend directory according to your existing application configuration.

Example:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add any other variables required by your project, such as Cloudinary credentials.

**Security:** Never commit real API keys, database credentials, or JWT secrets to GitHub.

### 4. Run the Application

Start the backend from its directory:

```bash
npm run server
```

If this script is not defined in your backend `package.json`, use the actual start script configured in your project.

Start the frontend in a separate terminal:

```bash
npm run dev
```

If your frontend uses Create React App, use `npm start` instead.

## What I Learned

- Building a full-stack application using React, Node.js, Express, and MongoDB.
- Creating and integrating RESTful APIs.
- Implementing JWT-based authentication.
- Managing application state and reusable React components.
- Connecting frontend forms and interfaces with backend services.
- Debugging API integration and deployment issues.

## Future Improvements

- Appointment reminders and notifications.
- Improved appointment filtering and search.
- Enhanced dashboards and analytics.
- Additional accessibility and user experience improvements.

## Author

**Aashutosh Gupta**

- GitHub: [ashutosh-gupta01](https://github.com/ashutosh-gupta01)
- LinkedIn: [Aashutosh Gupta](https://www.linkedin.com/in/aashutosh-kumar-gupta-0561ab265/)
- Portfolio: [Personal Portfolio](https://personalportfolio-bzqy.onrender.com)

---

If you find this project useful, consider giving the repository a star.
