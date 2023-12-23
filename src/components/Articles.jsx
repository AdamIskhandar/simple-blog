import React from 'react';
import '../App.css';
import { useContext } from 'react';
import { GlobalContext } from '.././context';

export default function Articles(props) {
	const user = useContext(GlobalContext);
	return (
		<>
			<div className="title">{props.title}</div>
			<div className="reference">
				tags : {props.tags.join(', ')} | create on : {props.date}
			</div>
			<div className="reference2">Dibuat oleh : {user.username}</div>
		</>
	);
}
