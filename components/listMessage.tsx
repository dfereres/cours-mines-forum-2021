/** @format */

import Message from "./message";
import useSWR from "swr";

interface ApiMessage {
	author: string;
	content: string;
	timestamp: number;
}

const fetcher = async (url: string) => {
	let pageIndex = 0;
	let messages: ApiMessage[] = [];
	let finished = false;
	while (!finished) {
		let urlWithPage = `${url}?page=${pageIndex}`;
		const response = await fetch(urlWithPage).then((response) =>
			response.json()
		);

		//Merge Pages
		messages = messages.concat(response);

		pageIndex += 1;
		finished = response.length === 0;
	}

	return messages.reverse(); //renvoie les messages du plus récent au plus vieux
};

const ListMessage = () => {
	const { data, error } = useSWR<ApiMessage>(
		"https://ensmn.herokuapp.com/messages",
		fetcher,
		{
			refreshInterval: 30000,
		}
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	//render data
	const Messages = data;
	return (
		<div className="card my-3">
			{Messages.map(({ author, content, timestamp }, i) => (
				<Message
					key={i}
					pseudo={author}
					body={content}
					date={new Date(timestamp)}
				/>
			))}
		</div>
	);
};

export default ListMessage;
