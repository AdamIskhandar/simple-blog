import React from 'react';
import Articles from '../../components/Articles';
import { Link, useLoaderData } from 'react-router-dom';

export default function MyBlogs() {
	const posts = useLoaderData();

	return (
		<>
			<div className="external">My Posts</div>
			{posts.map((item, index) => (
				<div key={item.id}>
					<Link to={`/myBlogs/${item.id}`}>
						<Articles
							title={item.title}
							tags={['entah', 'tak paham']}
							date={'23/11/2000'}
							key={index}
						/>
					</Link>
				</div>
			))}
		</>
	);
}
