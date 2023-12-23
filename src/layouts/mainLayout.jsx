import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../styles/index.css';

export default function MainLayout() {
	return (
		<>
			<NavLink
				className={({ isActive, isPending }) =>
					isActive ? 'active' : isPending ? 'pending' : ''
				}
				style={{
					marginRight: '5px',
				}}
				to={'/'}
			>
				Home
			</NavLink>
			|
			<NavLink
				className={({ isActive, isPending }) =>
					isActive ? 'active' : isPending ? 'pending' : ''
				}
				style={{
					marginRight: '5px',
					marginLeft: '5px',
				}}
				to={'/myBlogs'}
			>
				My Blogs
			</NavLink>{' '}
			|
			<NavLink
				className={({ isActive, isPending }) =>
					isActive ? 'active' : isPending ? 'pending' : ''
				}
				style={{
					marginLeft: '5px',
				}}
				to={'/about'}
			>
				About
			</NavLink>
			<hr />
			<Outlet />
		</>
	);
}
