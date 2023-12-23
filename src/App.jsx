import './App.css';
import { GlobalContext } from './context';
import { RouterProvider } from 'react-router-dom';
import { router } from './routers';

function App() {
	const user = {
		username: 'Adam Iskhandar',
	};

	return (
		<>
			<GlobalContext.Provider value={user}>
				<RouterProvider router={router} />
			</GlobalContext.Provider>
		</>
	);
}

export default App;
