document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.toLowerCase();
    var chatbotBox = document.getElementById('chatbot-box');
    var userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('chatbot-message', 'user-message');
    userMessageDiv.innerHTML = `<p>${userInput}</p>`;
    chatbotBox.appendChild(userMessageDiv);
  
    var botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('chatbot-message', 'bot-message');
    var botResponse = getBotResponse(userInput);
    botMessageDiv.innerHTML = `<p>${botResponse}</p>`;
    chatbotBox.appendChild(botMessageDiv);
  
    document.getElementById('user-input').value = '';
    chatbotBox.scrollTop = chatbotBox.scrollHeight; // Scroll to the bottom
  });
  
  function getBotResponse(input) {
    if (input.includes('destinations') || input.includes('places')) {
      return 'The three main destinations in Kerala are Munnar, Athirappalli, and Kuttanad. You can click on the "Destinations" section for more details!';
    } else if (input.includes('book') || input.includes('booking')) {
      return 'To book your trip, click the "Book Your Trip" button on the homepage.';
    } else if (input.includes('kerala tourism') || input.includes('about kerala')) {
      return 'Kerala is known for its backwaters, beaches, hills, and wildlife sanctuaries. It is a popular travel destination. Explore more on Kerala Tourism website.';
    } else if (input.includes('best months to visit') || input.includes('when to visit')) {
      return 'The best months to visit Kerala are from October to March when the weather is pleasant and ideal for sightseeing.';
    } else if (input.includes('munnar')) {
      return 'Munnar is a hill station in Kerala known for its tea plantations and cool weather. It is one of the top tourist destinations in Kerala.';
    } else if (input.includes('athirappalli')) {
      return 'Athirappalli is famous for its waterfalls, often referred to as the "Niagara of India." It is located in the Thrissur district of Kerala.';
    } else if (input.includes('kuttanad')) {
      return 'Kuttanad is known for its backwaters and paddy fields. It is a popular spot for houseboat cruises.';
    } else {
      return 'I\'m sorry, I don\'t have information on that. Please ask about destinations, booking, or Kerala tourism.';
    }
  }
  document.querySelector('.chatbot-header').addEventListener('click', function() {
    const chatbot = document.querySelector('.chatbot');
    chatbot.classList.toggle('expanded');
  });
    