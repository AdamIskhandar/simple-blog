export const postLoader = () => {
	return fetch('https://jsonplaceholder.typicode.com/posts');
};

export const postDetailLoader = ({ params }) => {
	return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
