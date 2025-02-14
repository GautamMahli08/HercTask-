Flashcard Learning App

Overview
The Flashcard Learning App is a web application designed to help users learn and review flashcards using the Leitner System. It features a login system, flashcard management, and spaced repetition logic to optimize learning. The app is built with a React frontend and a Node.js/Express backend, with data stored in MongoDB.

Features
User Authentication: Register, login, and logout functionality using JWT.

Flashcard Management:

Add, update, and delete flashcards.

Move flashcards between boxes based on user responses.

Spaced Repetition: Flashcards are reviewed at increasing intervals using the Leitner System.

Responsive UI: Clean and minimal design with animations and a particles background.

Roadmap
Backend Development:

Set up Express server and MongoDB.

Implement API endpoints for flashcards and user authentication.

Add Leitner System logic for spaced repetition.

Frontend Development:

Create login and registration pages.

Build the flashcard management interface.

Add animations and a particles background.

Testing:

Test API endpoints using Postman.

Debug and fix issues in the frontend and backend.

Deployment:

Deploy the backend on Render or Heroku.

Deploy the frontend on Vercel or Netlify.

Folder Structure
Copy
flashcard-app/
├── backend/
│   ├── models/
│   │   ├── Flashcard.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── flashcardRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── public/
│   │   ├── bg_1.jpg
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Flashcard.js
│   │   │   ├── FlashcardList.js
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── BlurText.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── README.md
└── README.md
Routes
Backend API Routes
Authentication:

POST /api/auth/register: Register a new user.

POST /api/auth/login: Log in an existing user.

Flashcards:

POST /api/flashcards: Add a new flashcard.

GET /api/flashcards: Get all flashcards for the logged-in user.

PUT /api/flashcards/:id: Update a flashcard (move to the next box or reset).

DELETE /api/flashcards/:id: Delete a flashcard.

Frontend Routes
/: Home page (flashcard list) – accessible only to logged-in users.

/login: Login page.

/register: Registration page.

Dependencies
Backend
Node.js: JavaScript runtime.

Express: Web framework for building APIs.

Mongoose: MongoDB object modeling.

jsonwebtoken: For JWT-based authentication.

bcryptjs: For password hashing.

cors: Enable Cross-Origin Resource Sharing.

dotenv: Load environment variables.

Frontend
React: JavaScript library for building the UI.

React Router: For client-side routing.

Axios: For making HTTP requests to the backend.

@react-spring/web: For animations (e.g., BlurText component).

OGL: For the particles background.

Challenges Faced
JWT Authentication:

Ensuring secure token storage and validation.

Debugging issues with token expiration and refresh.

Spaced Repetition Logic:

Implementing the Leitner System to move flashcards between boxes.

Calculating the next review date based on the box level.

Frontend-Backend Integration:

Debugging CORS issues during development.

Ensuring proper error handling and user feedback.

UI/UX:

Adding animations and a particles background without affecting performance.

Making the app responsive and visually appealing.

API-MongoDB Integration
Mongoose Models:

Flashcard: Stores the question, answer, box level, and next review date.

User: Stores the username and hashed password.

API Workflow:

User logs in and receives a JWT.

The JWT is sent with every API request in the Authorization header.

The backend validates the JWT and fetches/updates data from MongoDB.

Flashcards are grouped by their box level and displayed on the frontend.

Postman Testing
Steps:

Register a new user using POST /api/auth/register.

Log in using POST /api/auth/login and copy the JWT from the response.

Use the JWT to test flashcard endpoints:

Add a flashcard using POST /api/flashcards.

Fetch flashcards using GET /api/flashcards.

Update a flashcard using PUT /api/flashcards/:id.

Delete a flashcard using DELETE /api/flashcards/:id.

Results:

All endpoints were tested and verified to work as expected.

Proper error messages were returned for invalid requests.

Frontend Frameworks and Libraries
React: Core library for building the UI.

React Router: For client-side routing.

Axios: For making API requests.

@react-spring/web: For smooth animations (e.g., BlurText component).

OGL: For the particles background effect.

How to Run the Project
Backend
Navigate to the backend folder:

bash
Copy
cd backend
Install dependencies:

bash
Copy
npm install
Create a .env file and add the following:

Copy
MONGO_URI=mongodb://localhost:27017/flashcard-app
JWT_SECRET=your_jwt_secret_key
PORT=5000
Start the server:

bash
Copy
node server.js
Frontend
Navigate to the frontend folder:

bash
Copy
cd frontend
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
Deployment
Backend: Deployed on Render or Heroku.

Frontend: Deployed on Vercel or Netlify.

Future Improvements
Add a dark mode toggle.

Implement progress tracking (e.g., "You have 5 flashcards due today").

Add animations for smoother transitions.

Allow users to export/import flashcards.

Contributors
[Your Name]