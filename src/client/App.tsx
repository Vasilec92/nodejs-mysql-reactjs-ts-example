import * as React from 'react';
import { useState, useEffect } from 'react';

/* HOOK REACT EXAMPLE */
const App = (props: AppProps) => {
	const [users, setUsers] = useState<any>([]);
	console.log(users)
	useEffect(() => {
		async function getGreeting() {
			try {
				const res = await fetch('/api/users');
				const data = await res.json();
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		}
		getGreeting();
	}, []);

	return (
		<main className="container my-5">
			<h1 className="text-primary text-center">users</h1>
			{users.map((user,idx)=>
				<p key={idx}>{user.first_name}</p>
			)}
		</main>
	);
};

interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

export default App;
