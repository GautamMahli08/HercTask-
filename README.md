# Flashcard Learning App  
**Revolutionize Your Learning Experience with Spaced Repetition**  

The Flashcard Learning App is a sleek, modern web application designed to help users master their study material efficiently. Built with a **React frontend** and a **Node.js/Express backend**, and powered by **MongoDB**, this app leverages the **Leitner System** for spaced repetition, ensuring optimal retention and recall.  

---

## ✨ Key Features  

### 1. User Authentication  
- **Secure Registration & Login**: JWT-based authentication ensures your data is safe.  
- **Seamless Logout**: Easy session management for a smooth user experience.  

### 2. Flashcard Management  
- **Add, Edit, Delete Flashcards**: Full control over your study material.  
- **Dynamic Box System**: Move flashcards between boxes based on your performance.  

### 3. Spaced Repetition with the Leitner System  
- **Optimized Learning**: Flashcards are reviewed at increasing intervals to maximize retention.  
- **Smart Scheduling**: Automatically calculates the next review date for each flashcard.  

### 4. Stunning UI/UX  
- **Responsive Design**: Works flawlessly on all devices.  
- **Animations & Particles Background**: A visually engaging experience that keeps you motivated.  

---

## � Roadmap  

### Backend Development  
- Set up **Express server** and **MongoDB**.  
- Implement **API endpoints** for flashcards and user authentication.  
- Add **Leitner System logic** for spaced repetition.  

### Frontend Development  
- Create **login** and **registration pages**.  
- Build an intuitive **flashcard management interface**.  
- Add **animations** and a **particles background** for a modern look.  

### Testing  
- Test API endpoints using **Postman**.  
- Debug and refine both frontend and backend for a seamless experience.  

### Deployment  
- Deploy the backend on **Render** or **Heroku**.  
- Deploy the frontend on **Vercel** or **Netlify**.  

---

## 📂 Folder Structure  
flashcard-app/
├── backend/
│ ├── models/
│ │ ├── Flashcard.js
│ │ └── User.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── flashcardRoutes.js
│ ├── server.js
│ ├── .env
│ └── package.json
├── frontend/
│ ├── public/
│ │ ├── bg_1.jpg
│ │ └── index.html
│ ├── src/
│ │ ├── components/
│ │ │ ├── Flashcard.js
│ │ │ ├── FlashcardList.js
│ │ │ ├── Login.js
│ │ │ ├── Register.js
│ │ │ └── BlurText.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── App.css
│ ├── package.json
│ └── README.md
└── README.md


---

## 🔗 Routes  

### Backend API Routes  
- **Authentication**:  
  - `POST /api/auth/register`: Register a new user.  
  - `POST /api/auth/login`: Log in an existing user.  

- **Flashcards**:  
  - `POST /api/flashcards`: Add a new flashcard.  
  - `GET /api/flashcards`: Get all flashcards for the logged-in user.  
  - `PUT /api/flashcards/:id`: Update a flashcard (move to the next box or reset).  
  - `DELETE /api/flashcards/:id`: Delete a flashcard.  

### Frontend Routes  
- `/`: Home page (flashcard list) – accessible only to logged-in users.  
- `/login`: Login page.  
- `/register`: Registration page.  

---

## 🛠️ Dependencies  

### Backend  
- **Node.js**: JavaScript runtime.  
- **Express**: Web framework for building APIs.  
- **Mongoose**: MongoDB object modeling.  
- **jsonwebtoken**: For JWT-based authentication.  
- **bcryptjs**: For password hashing.  
- **cors**: Enable Cross-Origin Resource Sharing.  
- **dotenv**: Load environment variables.  

### Frontend  
- **React**: JavaScript library for building the UI.  
- **React Router**: For client-side routing.  
- **Axios**: For making HTTP requests to the backend.  
- **@react-spring/web**: For animations (e.g., BlurText component).  
- **OGL**: For the particles background.  

---

## 🔥 Challenges Faced  

- **JWT Authentication**: Ensuring secure token storage and validation.  
- **Spaced Repetition Logic**: Implementing the Leitner System and calculating review dates.  
- **Frontend-Backend Integration**: Debugging CORS issues and ensuring proper error handling.  
- **UI/UX**: Balancing animations and performance while maintaining responsiveness.  

---

## 🔌 API-MongoDB Integration  

### Mongoose Models  
- **Flashcard**: Stores the question, answer, box level, and next review date.  
- **User**: Stores the username and hashed password.  

### API Workflow  
1. User logs in and receives a JWT.  
2. The JWT is sent with every API request in the `Authorization` header.  
3. The backend validates the JWT and fetches/updates data from MongoDB.  
4. Flashcards are grouped by their box level and displayed on the frontend.  

---

## 🧪 Postman Testing  

### Steps  
1. Register a new user using `POST /api/auth/register`.  
2. Log in using `POST /api/auth/login` and copy the JWT from the response.  
3. Use the JWT to test flashcard endpoints:  
   - Add a flashcard using `POST /api/flashcards`.  
   - Fetch flashcards using `GET /api/flashcards`.  
   - Update a flashcard using `PUT /api/flashcards/:id`.  
   - Delete a flashcard using `DELETE /api/flashcards/:id`.  

### Results  
- All endpoints were tested and verified to work as expected.  
- Proper error messages were returned for invalid requests.  

---

## 🎨 Frontend Frameworks and Libraries  
- **React**: Core library for building the UI.  
- **React Router**: For client-side routing.  
- **Axios**: For making API requests.  
- **@react-spring/web**: For smooth animations (e.g., BlurText component).  
- **OGL**: For the particles background effect.  

---

## 🚀 How to Run the Project  

### Backend  
1. Navigate to the backend folder:  
   ```bash
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
🌐 Deployment
Backend: Deployed on Render or Heroku.

Frontend: Deployed on Vercel or Netlify.

🔮 Future Improvements
Add a dark mode toggle.

Implement progress tracking (e.g., "You have 5 flashcards due today").

Add animations for smoother transitions.

Allow users to export/import flashcards.
