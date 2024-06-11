import { FromTypeEnum, messageIProps } from "@/types/message-types";

const getBotResponse2 = async (userMessage: string): Promise<messageIProps> => {
	const responses: { [key: string]: string } = {
		hello: "Hi there! How can I help you?",
		"how are you": "I'm just a bot, but thanks for asking!",
		goodbye: "Goodbye! Have a great day!",
		"thank you": "You're welcome!",
		"how can I help you": "What do you need assistance with?",
		"tell me a joke": "", // Leave empty for now, will fetch a joke from API
		"random fact":
			"Did you know that the shortest war in history lasted only 38 minutes?",
		"give me a random user data": "", // Leave empty for now, will fetch random user data
		"give me a random post": "", // Leave empty for now, will fetch random post
		"quote of the day": "", // Leave empty for now, will fetch quote of the day
		"cat fact": "", // Leave empty for now, will fetch a cat fact
		"dog fact": "", // Leave empty for now, will fetch a dog fact
		default: "Sorry, I didn't understand. Can you please clarify?",
	};

	let responseMessage = responses.default;

	for (const key of Object.keys(responses)) {
		if (userMessage.toLowerCase().includes(key)) {
			switch (key) {
				case "tell me a joke":
					responseMessage = await fetchJoke();
					break;
				case "give me a random user data":
					responseMessage = await fetchRandomUserData();
					break;
				case "give me a random post":
					responseMessage = await fetchRandomPost();
					break;
				case "quote of the day":
					responseMessage = await fetchQuoteOfTheDay();
					break;
				case "cat fact":
					responseMessage = await fetchCatFact();
					break;
				case "dog fact":
					responseMessage = await fetchDogFact();
					break;
				default:
					await new Promise((resolve) => setTimeout(resolve, 1000));
					responseMessage = responses[key];
					break;
			}
			break;
		}
	}

	return {
		message: responseMessage,
		from: FromTypeEnum.BOT,
	};
};

const fetchResponseFromPythonModal = async (message: string): Promise<messageIProps> => {
  try {
      const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
      });
      const data = await res.json();
      return {
          message: data.response,
          from: FromTypeEnum.BOT,
      };
  } catch (error) {
      console.error("Error fetching response from Python modal:", error);
      return {
          message: "Sorry, I couldn't fetch a response at the moment. Please try again later.",
          from: FromTypeEnum.BOT,
      };
  }
};

// Function to fetch a random joke from an API
const fetchJoke = async (): Promise<string> => {
	try {
		const response = await fetch("https://api.chucknorris.io/jokes/random");
		const data = await response.json();
		return data.value;
	} catch (error) {
		console.error("Error fetching joke:", error);
		return "Sorry, I couldn't fetch a joke at the moment. Please try again later.";
	}
};

// Function to fetch random user data
const fetchRandomUserData = async (): Promise<string> => {
	try {
		const response = await fetch("https://randomuser.me/api/");
		const data = await response.json();
		const user = data.results[0];
		return `Name: ${user.name.first} ${user.name.last}, Email: ${user.email}, Gender: ${user.gender}`;
	} catch (error) {
		console.error("Error fetching random user data:", error);
		return "Sorry, I couldn't fetch random user data at the moment. Please try again later.";
	}
};

// Function to fetch random post
const fetchRandomPost = async (): Promise<string> => {
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const data = await response.json();
		const randomIndex = Math.floor(Math.random() * data.length);
		const post = data[randomIndex];
		return `Title: ${post.title}, Body: ${post.body}`;
	} catch (error) {
		console.error("Error fetching random post:", error);
		return "Sorry, I couldn't fetch random post at the moment. Please try again later.";
	}
};

// Function to fetch quote of the day
const fetchQuoteOfTheDay = async (): Promise<string> => {
	try {
		const response = await fetch("https://favqs.com/api/qotd");
		const data = await response.json();
		return data.quote.body;
	} catch (error) {
		console.error("Error fetching quote of the day:", error);
		return "Sorry, I couldn't fetch the quote of the day at the moment. Please try again later.";
	}
};

// Function to fetch a cat fact
const fetchCatFact = async (): Promise<string> => {
	try {
		const response = await fetch("https://meowfacts.herokuapp.com/");
		const data = await response.json();
		return data.data;
	} catch (error) {
		console.error("Error fetching cat fact:", error);
		return "Sorry, I couldn't fetch a cat fact at the moment. Please try again later.";
	}
};

// Function to fetch a dog fact
const fetchDogFact = async (): Promise<string> => {
	try {
		const response = await fetch("https://dog-api.kinduff.com/api/facts");
		const data = await response.json();
		return data.facts[0];
	} catch (error) {
		console.error("Error fetching dog fact:", error);
		return "Sorry, I couldn't fetch a dog fact at the moment. Please try again later.";
	}
};

export default getBotResponse2;
export {fetchResponseFromPythonModal}
