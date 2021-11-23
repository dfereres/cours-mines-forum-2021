/** @format */

import { fr } from "date-fns/locale";
import { formatDistanceToNow } from "date-fns";

interface Props {
	pseudo: string;
	body: string;
	date: Date;
}

const Message = (props: Props) => {
	const pseudo = props.pseudo;
	const body = props.body;
	const date = props.date;

	return (
		<div className="card my-3">
			<div className="card-body">
				<p className="card-text">{body} </p>
			</div>
			<div className="card-footer text-muted text-right">
				Par <span className="author">{pseudo}</span>,{" "}
				{formatDistanceToNow(date, { addSuffix: true, locale: fr })}
			</div>
		</div>
	);
};

export default Message;
