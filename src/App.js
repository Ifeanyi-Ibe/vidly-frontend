import "./App.css";
import MoviesTable from "./components/moviesTable";
import * as movieService from "./services/fakeMovieService";
import { useState, useEffect } from "react";

function App() {
	const [movies, setMovies] = useState(movieService.getMovies());
	const [count, setCount] = useState(movies.length);

	useEffect(() => setCount(movies.length), [movies]);

	const handleDelete = (id) => {
		let filtered = movies.filter((movie) => movie._id !== id);
		setMovies(filtered);
	};

	const handleLiked = (movie) => {
		const clonedMovies = [...movies];
		const index = movies.indexOf(movie);
		clonedMovies[index] = { ...movies[index] };
		clonedMovies[index].liked = !movies[index].liked;
		setMovies(clonedMovies);
	};

	return (
		<div className="App">
			<main className="container">
				{movies.length > 0 ? (
					<>
						<div className="mt-4">
							<p>Showing {count} in the database</p>
						</div>
						<MoviesTable
							movies={movies}
							handleDelete={handleDelete}
							handleLiked={handleLiked}
						/>
					</>
				) : (
					<h2>There are no movies in the database</h2>
				)}
			</main>
		</div>
	);
}

export default App;
