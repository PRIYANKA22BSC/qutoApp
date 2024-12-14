const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const saveQuoteButton = document.getElementById("save-quote");
const savedQuotesList = document.getElementById("saved-quotes");

function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = `"${randomQuote.text}"`;
  authorElement.textContent = `- ${randomQuote.author}`;
}

function saveQuote() {
  const currentQuote = quoteElement.textContent;
  const currentAuthor = authorElement.textContent;
  const savedQuotes = getSavedQuotes();

  const newSavedQuote = { text: currentQuote, author: currentAuthor };

  if (
    currentQuote &&
    !savedQuotes.some((quote) => quote.text === currentQuote)
  ) {
    savedQuotes.push(newSavedQuote);
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
    listItem.innerHTML = `<strong>${quote.text}</strong> <br> <em>${quote.author}</em>`;
    savedQuotesList.appendChild(listItem);
  });
}

newQuoteButton.addEventListener("click", displayRandomQuote);
saveQuoteButton.addEventListener("click", saveQuote);

displaySavedQuotes();
