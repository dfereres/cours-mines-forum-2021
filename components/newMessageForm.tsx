/** @format */

import { useState, ChangeEvent, SyntheticEvent } from "react";
import { mutate } from "swr";

const NewMessageForm = () => {
	const [pseudo, setPseudo] = useState("");
	const [message, setMessage] = useState("");

	const handlePseudoChange = (event: ChangeEvent<HTMLInputElement>) =>
		setPseudo(event.target.value);
	const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) =>
		setMessage(event.target.value);

	const handleSubmit = async (event: SyntheticEvent) => {
		// Prevent browser to submit
		event.preventDefault();

		//Validate data
		if (pseudo.length === 0 || message.length === 0) {
			return;
		}
		//send data
		await fetch("https://ensmn.herokuapp.com/messages?page=0", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: pseudo,
				message: message,
			}),
		});

		//Refresh data
		mutate("https://ensmn.herokuapp.com/messages?page=0"); //Refresh le cache appelé à cet url

		// Clear State
		setMessage("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-floating mt-3">
				<input
					type="text"
					id="pseudo"
					name="pseudo"
					placeholder="example@abc.com"
					className="form-control"
					required
					onChange={handlePseudoChange}
				/>
				<label htmlFor="pseudo">Pseudo</label>
			</div>
			<div class="form-floating mt-3">
				<textarea
					class="form-control"
					placeholder="Leave a comment here"
					id="floatingTextarea"
					require
                    onChange={handleMessageChange}
                    value = {message}
				></textarea>
				<label htmlFor="floatingTextarea">Message</label>
			</div>

			<div className="d-grid mt-3">
				<button type="submit" class="btn btn-success">
					Envoyer
				</button>
			</div>
		</form>
	);
};

export default NewMessageForm;
