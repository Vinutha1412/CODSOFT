def chatbot_response(user_input):
    user_input = user_input.lower()  # Convert input to lowercase for matching

    # Define rules for responses
    if "hello" in user_input or "hi" in user_input:
        return "Hello! How can I help you today?"
    elif "how are you" in user_input:
        return "I'm just a program, but thanks for asking! How can I assist you?"
    elif "help" in user_input:
        return "Sure! What do you need help with?"
    elif "bye" in user_input or "exit" in user_input:
        return "Goodbye! Have a great day!"
    else:
        return "I'm sorry, I didn't understand that. Can you please rephrase?"

# Main loop for user interaction
def main():
    print("Welcome to the chatbot! Type 'bye' to exit.")
    while True:
        user_input = input("You: ")
        response = chatbot_response(user_input)
        print("Chatbot:", response)
        if user_input.lower() in ["bye", "exit"]:
            break

# Start the chatbot
main()
