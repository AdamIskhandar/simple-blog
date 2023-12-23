import React, { useState } from 'react';
import '../App.css';

export default function Search(props) {
	const [search, setSearch] = useState('');

	function searchArticle() {
		props.onSearchArticle(search);
	}

	function keyDownHandler(e) {
		if (e.key === 'Enter') {
			searchArticle();
		}
	}

	return (
		<>
			<div className="searchBar">
				Cari Article :{' '}
				<input
					onChange={(event) => setSearch(event.target.value)}
					onKeyDown={keyDownHandler}
				></input>
				<button onClick={searchArticle}>Cari</button>
			</div>
			<div className="infoSearch">
				jumpa {props.totalPost} data dengan carian anda : {search}
			</div>
		</>
	);
}
