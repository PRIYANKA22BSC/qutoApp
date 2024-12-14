const quotes = [
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don’t take.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you’re busy making other plans.",
  ];
  
  const quoteElement = document.getElementById("quote");
  const newQuoteButton = document.getElementById("new-quote");
  const saveQuoteButton = document.getElementById("save-quote");
  const savedQuotesList = document.getElementById("saved-quotes");
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  function saveQuote() {
    const currentQuote = quoteElement.textContent;
    if (currentQuote && !getSavedQuotes().includes(currentQuote)) {
      const savedQuotes = getSavedQuotes();
      savedQuotes.push(currentQuote);
      localStorage.setItem("savedQuotes", JSON.stringify(savedQuotes));
      displaySavedQuotes();
    }
  }
  
  function getSavedQuotes() {
    return JSON.parse(localStorage.getItem("savedQuotes")) || [];
  }
  
  function displaySavedQuotes() {
    const savedQuotes = getSavedQuotes();
    savedQuotesList.innerHTML = "";
    savedQuotes.forEach((quote) => {
      const listItem = document.createElement("li");
      listItem.textContent = quote;
      savedQuotesList.appendChild(listItem);
    });
  }
  
  
  newQuoteButton.addEventListener("click", displayRandomQuote);
  saveQuoteButton.addEventListener("click", saveQuote);
  
  displaySavedQuotes();
  
