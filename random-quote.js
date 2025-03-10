import React, { useState, useEffect } from "react";
import "./index";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("Loading...");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      console.log("API Response:", data); // Check if 'content' and 'author' exist
  
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  
  
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="wrapper">
      <div id="quote-box">
  <p id="text">{quote}</p>  {/* This should display the quote */}
  <p id="author">- {author}</p>  {/* This should display the author */}
  <button id="new-quote" onClick={fetchQuote}>New Quote</button>

      </div>
    </div>
  );
};

export default QuoteMachine;
