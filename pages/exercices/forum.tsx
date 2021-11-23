/** @format */

import type { NextPage } from "next";
import ListMessage from "../../components/listMessage";
import NewMessageForm from "../../components/newMessageForm";

const Forum: NextPage = () => {
	return (
		<div id="global">
			<div className="container">
				{" "}
				{/* <p>TODO: Créer le forum ici.</p> */}
				<div className="d-flex flex-column pt-3" id="forum-wrapper">
					<div className="flex-grow-1" id="messages-container">
						<ListMessage />
					</div>
					<div id="new-message-container">
						<NewMessageForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Forum;
