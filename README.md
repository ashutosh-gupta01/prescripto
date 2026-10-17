# Prescripto – Doctor Appointment Booking System

Prescripto is a full-stack doctor appointment booking application built using the MERN stack. It allows patients to explore doctors and manage appointments, while doctors and administrators can manage their respective operations through role-based interfaces.

## 🌐 Live Demo

- **Patient Website:** [Visit Prescripto](https://prescripto-frontend-0f7u.onrender.com/)
- **Admin Panel:** [Open Admin Dashboard](https://prescripto-admin-lliu.onrender.com/)
- **Backend API:** [API Health Check](https://prescripto-backend-xvjr.onrender.com/)

## ✨ Features

- **Role-Based Access Control (RBAC):** Role-specific access for patients, doctors, and administrators, based on implemented permissions.
- **Authentication:** User registration, login, and JWT-based authentication.
- **Doctor Listings:** Browse doctors and view their profiles and specializations.
- **Appointment Booking:** Book and manage doctor appointments.
- **Profile Management:** View and update personal information.
- **Admin Dashboard:** Manage doctors, appointments, and application data according to admin permissions.
- **RESTful APIs:** Backend endpoints for communication between the frontend and server.
- **Responsive UI:** User-friendly interface designed for different screen sizes.
- **Database Integration:** Store and manage application data using MongoDB.

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML5
- CSS3

**Backend**
- Node.js
- Express.js
- RESTful APIs
- JWT Authentication

**Database and Services**
- MongoDB
- Cloudinary for image uploads, if configured

## 📁 Project Structure

```text
prescripto/
├── admin/          # Admin dashboard
├── frontend/       # Patient-facing application
├── backend/        # Server and REST APIs
└── README.md
```

## ⚙️ Getting Started

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

Install dependencies separately for each application.

**Backend**

```bash
cd backend
npm install
```

**Patient Frontend**

```bash
cd ../frontend
npm install
```

**Admin Panel**

```bash
cd ../admin
npm install
```

### 3. Configure Environment Variables

Create the required `.env` file in the backend directory using the variable names expected by your application.

Example:

```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Add other environment variables required by your project, such as Cloudinary credentials. Configure frontend API URLs for your local or deployed environment as needed.

**Security:** Never commit real API keys, database credentials, or JWT secrets to GitHub.

### 4. Run the Application

Start the backend using the command configured in its `package.json`. For example:

```bash
npm run server
```

Start the patient frontend in a separate terminal using its configured script. For a Vite project:

```bash
npm run dev
```

Start the admin panel in another terminal using its configured script. For a Vite project:

```bash
npm run dev
```

If either frontend uses Create React App, run `npm start` instead. Check each `package.json` for the exact available scripts.

## 📚 Key Learning Outcomes

- Full-stack development using the MERN stack.
- Implementing JWT-based authentication and role-based authorization.
- Building and integrating RESTful APIs.
- Managing application data with MongoDB.
- Creating reusable React components and dashboard interfaces.
- Debugging frontend-backend integration issues.
- Deploying frontend and backend services.

## 🚀 Future Improvements

- Appointment reminders and notifications.
- Advanced doctor search and filtering.
- Enhanced dashboard analytics.
- Improved accessibility and user experience.

## 👨‍💻 Author

**Aashutosh Gupta**

- **GitHub:** [ashutosh-gupta01](https://github.com/ashutosh-gupta01)
- **LinkedIn:** [Aashutosh Gupta](https://www.linkedin.com/in/aashutosh-kumar-gupta-0561ab265/)
- **Portfolio:** [Personal Portfolio](https://personalportfolio-bzqy.onrender.com)

---

If you find this project useful, consider giving the repository a star.
