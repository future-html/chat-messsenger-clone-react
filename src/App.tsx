// import React, { useEffect, useState } from "react";
// import dataUser from "./../../server/db.json";
// import axios from "axios";

// interface User {
// 	id: number;
// 	name: string;
// 	username: string;
// 	email: string;
// 	password: string;
// }

// export default function App() {
// 	const [data, setData] = useState<User[]>([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);
// 	const [newUser, setNewUser] = useState({ name: "", username: "", email: "", password: "" });

// 	useEffect(() => {
// 		try {
// 			setData(dataUser);
// 			setLoading(false);
// 		} catch (err) {
// 			setError((err as Error).message);
// 			setLoading(false);
// 		}
// 	}, []);

// 	if (loading) return <div>Loading...</div>;
// 	if (error) return <div>Error: {error}</div>;

// 	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// 		setNewUser({ ...newUser, [e.target.name]: e.target.value });
// 	};

// 	const handleSubmit = async (e: React.FormEvent) => {
// 		e.preventDefault();
// 		const userWithId = { ...newUser, id: Math.floor(Math.random() * 20000000000) };
// 		try {
// 			// Update local state first
// 			setData((prev) => [...prev, userWithId]);
// 			// Make the POST request to the server
// 			await axios.post("/data", userWithId);
// 			// Clear the form fields
// 			setNewUser({ name: "", username: "", email: "", password: "" });
// 		} catch (error) {
// 			// Handle any errors from the request
// 			console.error("Error adding user:", error);
// 			// Optionally, set an error state to display an error message to the user
// 		}
// 	};

// 	return (
// 		<div>
// 			<h1 className="text-3xl font-bold underline">Hello world!</h1>
// 			<div>
// 				<h2>Data from API:</h2>
// 				<ul>
// 					{data.map((user) => (
// 						<li key={user.id}>
// 							<p>Name: {user.name}</p>
// 							<p>Username: {user.username}</p>
// 							<p>Email: {user.email}</p>
// 						</li>
// 					))}
// 				</ul>
// 			</div>
// 			<form
// 				action=""
// 				onSubmit={handleSubmit}
// 			>
// 				<input
// 					type="text"
// 					name="name"
// 					placeholder="Name"
// 					value={newUser.name}
// 					onChange={handleChange}
// 				/>
// 				<input
// 					type="text"
// 					name="username"
// 					placeholder="Username"
// 					value={newUser.username}
// 					onChange={handleChange}
// 				/>
// 				<input
// 					type="email"
// 					name="email"
// 					placeholder="Email"
// 					value={newUser.email}
// 					onChange={handleChange}
// 				/>
// 				<input
// 					type="password"
// 					name="password"
// 					placeholder="Password"
// 					value={newUser.password}
// 					onChange={handleChange}
// 				/>
// 				<button type="submit">Add user</button>
// 			</form>
// 		</div>
// 	);
// }

import ChatMessage from "./ChatMessage";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
const App = () => {
	const Context = createContext<{
		showMenu: boolean;
		setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
	} | null>(null);
	const [showMenu, setShowMenu] = useState(false);

	return (
		<BrowserRouter>
			<Context.Provider value={{ showMenu: showMenu, setShowMenu: setShowMenu }}>
				<Routes>
					<Route
						element={<ChatMessage />}
						path="/"
					></Route>
					<Route
						element={<Login />}
						path="/login"
					/>
					<Route
						element={<Register />}
						path="/register"
					/>
				</Routes>
			</Context.Provider>
		</BrowserRouter>
	);
};

export default App;
