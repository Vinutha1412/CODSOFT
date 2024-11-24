const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Act as if what you do makes a difference. It does. - William James"
  ];
  
  const quoteElement = document.getElementById("quote");
  const refreshBtn = document.getElementById("refresh-btn");
  const favoriteBtn = document.getElementById("favorite-btn");
  const shareBtn = document.getElementById("share-btn");
  const favoritesList = document.getElementById("favorites-list");
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  function addToFavorites() {
    const currentQuote = quoteElement.textContent;
    const li = document.createElement("li");
    li.textContent = currentQuote;
    favoritesList.appendChild(li);
  }
  
  function shareQuote() {
    const currentQuote = quoteElement.textContent;
    if (navigator.share) {
      navigator.share({
        text: currentQuote
      }).catch(error => console.error("Error sharing", error));
    } else {
      alert("Sharing not supported on this browser.");
    }
  }
  
  refreshBtn.addEventListener("click", displayRandomQuote);
  favoriteBtn.addEventListener("click", addToFavorites);
  shareBtn.addEventListener("click", shareQuote);
  
  window.onload = displayRandomQuote;