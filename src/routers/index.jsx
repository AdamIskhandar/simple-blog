import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../pages/home/homepage';
import MainLayout from '../layouts/mainLayout';
import About from '../pages/home/About';
import MyBlogs from '../pages/blogs/MyBlogs';
import Post from '../pages/blogs/_id';
import { postLoader, postDetailLoader } from '../apis/loader';
import ErrorPage from '../components/ErrorPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Homepage />,
			},
			{
				path: '/myBlogs',
				element: <MyBlogs />,
				loader: postLoader,
			},
			{
				path: '/myBlogs/:id',
				element: <Post />,
				loader: postDetailLoader,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);
