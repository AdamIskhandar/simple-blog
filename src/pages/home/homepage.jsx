import React, { useEffect, useState } from 'react';
import Articles from '../../components/Articles';
import postsData from '../../posts.json';
import Search from '../../components/Search';
import '../../App.css';

export default function Homepage() {
	const [posts, setPosts] = useState(postsData);
	const [totalPost, setTotalPost] = useState(0);

	function searchArticles(value) {
		const filteredPosts = postsData.filter((item) => {
			return item.title.includes(value);
		});

		setPosts(filteredPosts);
		setTotalPost(filteredPosts.length);
	}

	return (
		<>
			<div className="homeTitle">Simple Blog</div>
			<Search onSearchArticle={searchArticles} totalPost={totalPost} />
			{posts.map(({ title, tags, date }, index) => (
				<Articles {...{ title, tags, date }} key={index} />
			))}
		</>
	);
}
