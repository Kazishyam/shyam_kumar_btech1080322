# Task Management System (Kanban Board)

A full-stack task management web application that lets users register/login, create tasks, and manage them using a drag-and-drop Kanban board. It’s built with **React**, **Tailwind CSS**, **Node.js**, **Express**, **MongoDB**, and **JWT authentication**.

## 🚀 Demo
(You can add deployed links here, e.g., Render/Netlify/Vercel)

---

## 📌 Features

- 🧑‍💻 User Authentication (Register & Login)
- 🔐 JWT-protected backend APIs
- 📋 Create, read, update & delete tasks
- 🎯 Drag & drop tasks between columns
- 📊 Kanban board with Pending, In Progress, Completed columns
- 🚪 Logout
- 🔍 Filter tasks by status

---

## 🧠 Tech Stack

**Frontend**
- React  
- Tailwind CSS  
- Axios  
- @hello-pangea/dnd (drag-and-drop)

**Backend**
- Node.js + Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing

---

## 📂 Folder Structure

ozi sde project/
│
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── config/
│   ├── .env.example
│   ├── server.js
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js
│   │   │   ├── Column.js
│   │   │   ├── TaskCard.js
│   │   │   └── AddTaskModal.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── index.css
│   └── package.json
│
└── README.md


The project follows a clean and modular folder structure separating backend and frontend concerns.

- `backend/` – REST API, authentication, database models
- `frontend/` – React UI, Tailwind styling, Kanban board
- `README.md` – Project documentation


---

## 🧾 Environment Setup

### Backend

1. Navigate to backend folder:

    ```bash
    cd backend

2. Install dependencies:

    npm install


3. Copy .env.example and create .env:

    PORT=5000
    MONGO_URI=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret>


4. Start the server:

    npm run dev

5. Frontend

    a. Navigate to frontend folder:

        cd frontend


    b. Install dependencies:

        npm install


    c. Start the React app:

        npm start


Open http://localhost:3000 in your browser.


🧪 API Endpoints

    Authentication

    Method	Endpoint	        Description
    POST	/api/auth/register	Register new user
    POST	/api/auth/login	    Login user

    Tasks

    Method	Endpoint	    Description
    GET	    /api/tasks	    Get all user tasks
    POST	/api/tasks	    Create a task
    PUT	    /api/tasks/:id	Update a task
    DELETE	/api/tasks/:id	Delete a task


Use request header:

Authorization: Bearer <token>


#🧑‍💻 How It Works

1. User registers/logins and receives a JWT token.

2. Token is stored in browser localStorage.

3. Frontend sends this JWT in headers for protected routes.

4. Tasks are stored in MongoDB and fetched per user.

5. Drag & drop updates task status via API.



📜 License

This project is open-source and available under the MIT License.


❤️ Credits
    Project built by [Your Name]
    Inspired by MERN stack best practices and Kanban UI designs