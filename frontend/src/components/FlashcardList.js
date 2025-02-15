import React, { useEffect, useState } from "react";
import axios from "axios";
import Flashcard from "./Flashcard";
import BlurText from "./BlurText"; // Import the BlurText component
import backgroundImage from "./bg_1.jpg"; // Import the background image
import "./FlashcardList.css"; // Import the CSS file for styling

const FlashcardList = ({ token }) => {
  const [flashcards, setFlashcards] = useState([]);

  // Fetch flashcards from the backend
  const fetchFlashcards = async () => {
    try {
      const res = await axios.get("https://herctask.onrender.com/api/flashcards", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFlashcards(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fetch flashcards on component mount
  useEffect(() => {
    fetchFlashcards();
  }, [token]);

  // Group flashcards by box
  const groupFlashcardsByBox = () => {
    const grouped = {};
    flashcards.forEach((flashcard) => {
      const box = flashcard.box;
      if (!grouped[box]) {
        grouped[box] = [];
      }
      grouped[box].push(flashcard);
    });
    return grouped;
  };

  // Grouped flashcards
  const groupedFlashcards = groupFlashcardsByBox();

  return (
    <div
      className="flashcard-list"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
      }}
    >
      {/* Add a blur overlay */}
      <div className="blur-overlay" />
      {/* Add the BlurText component for the heading */}
      <BlurText
        text="Flashcard Learning App"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-2xl mb-8"
      />
<hr className="division-line" />


      {Object.keys(groupedFlashcards).map((box) => (
        <div key={box} className="flashcard-box">
          <h2>Box {box}</h2>
          {groupedFlashcards[box].map((flashcard) => (
            <Flashcard
              key={flashcard._id}
              flashcard={flashcard}
              onUpdate={fetchFlashcards}
              token={token}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default FlashcardList;
