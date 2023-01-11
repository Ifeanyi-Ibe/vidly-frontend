import React from "react";
import Like from "./common/like";

export default function MoviesTable({ movies, handleDelete, handleLiked }) {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Genre</th>
						<th scope="col">Stock</th>
						<th scope="col">Rate</th>
						<th scope="col"></th>
						<th scope="col"></th>
					</tr>
				</thead>
				<tbody>
					{movies.map((movie) => (
						<tr key={movie._id}>
							<td>{movie.title}</td>
							<td>{movie.genre.name}</td>
							<td>{movie.numberInStock}</td>
							<td>{movie.dailyRentalRate}</td>
							<td>
								<Like
									liked={movie.liked}
									handleLiked={() => handleLiked(movie)}
									movieId={movie.id}
								/>
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => handleDelete(movie._id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
