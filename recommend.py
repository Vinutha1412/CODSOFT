movies = [
    {'id': 1, 'name': 'The Shawshank Redemption', 'genre': 'Drama'},
    {'id': 2, 'name': 'The Godfather', 'genre': 'Crime'},
    {'id': 3, 'name': 'The Dark Knight', 'genre': 'Action'},
    {'id': 4, 'name': 'Pulp Fiction', 'genre': 'Crime'},
    {'id': 5, 'name': 'Forrest Gump', 'genre': 'Drama'},
    {'id': 6, 'name': 'The Matrix', 'genre': 'Sci-Fi'},
    {'id': 7, 'name': 'Inception', 'genre': 'Sci-Fi'},
    {'id': 8, 'name': 'The Lord of the Rings: The Return of the King', 'genre': 'Fantasy'},
    {'id': 9, 'name': 'Gladiator', 'genre': 'Action'},
    {'id': 10, 'name': 'The Social Network', 'genre': 'Drama'},
]

def recommend_movies(user_genres):
    recommendations = []
    for movie in movies:
        if movie['genre'] in user_genres:
            recommendations.append(movie)
    return recommendations

def get_user_preferences():
    print("Enter your preferred movie genre (e.g., Drama, Action, Sci-Fi,Fantasy,)(comma-separated):")
    genres_input = input()
    user_genres = [genre.strip() for genre in genres_input.split(',')]
    return user_genres

user_genres = get_user_preferences()  
recommended = recommend_movies(user_genres) 

print("\nRecommended movies:")
if recommended:
    for movie in recommended:
        print(f"{movie['name']} (ID: {movie['id']}) - Genre: {movie['genre']}")
else:
    print("No movies found for the given genres.")
