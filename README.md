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
