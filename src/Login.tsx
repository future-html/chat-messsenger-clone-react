import React, { useState } from "react";

const Login = () => {
	const [isFocusInput, setIsFocusInput] = useState({ username: false, password: false });

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<form
				action=""
				className="border-gray-300 border-2 rounded-lg shadow-lg px-6 py-8 bg-white max-w-md w-full"
			>
				<h2 className="text-3xl text-center my-4 font-semibold">Login</h2>
				<div className="mb-4">
					<div
						className={
							isFocusInput.username ? "border-2 border-blue-400 relative " : "border-2 border-gray-200 relative"
						}
						onFocus={() => {
							setIsFocusInput((prev) => {
								return { ...prev, username: true };
							});
						}}
						onBlur={() => {
							setIsFocusInput((prev) => {
								return { ...prev, username: false };
							});
						}}
					>
						<label
							className={
								isFocusInput.username
									? "absolute text-blue-700 bg-white font-bold -top-3.5 left-5 transition-all scale-100 duration-500 ease-in-out"
									: "absolute text-blue-700 bg-white font-bold  top-5 left-10 transition-all scale-0 duration-500 ease-in-out"
							}
						>
							username
						</label>
						<input
							type="text"
							placeholder="Enter username"
							className={
								isFocusInput.username
									? " w-full  rounded-md outline-none p-3 placeholder-white"
									: " w-full  rounded-md outline-none p-3"
							}
						/>
					</div>
				</div>
				<div className="mb-4">
					<div
						className={
							isFocusInput.password ? "border-2 border-blue-400 relative" : "border-2 border-gray-200 relative"
						}
						onFocus={() => {
							setIsFocusInput((prev) => {
								return { ...prev, password: true };
							});
						}}
						onBlur={() => {
							setIsFocusInput((prev) => {
								return { ...prev, password: false };
							});
						}}
					>
						<label
							className={
								isFocusInput.password
									? "absolute text-blue-700 bg-white font-bold -top-3.5 left-5 transition-all scale-100 duration-500 ease-in-out"
									: "absolute text-blue-700 bg-white font-bold  top-5 left-10 transition-all scale-0 duration-500 ease-in-out"
							}
						>
							password
						</label>
						<input
							type="password"
							placeholder="Enter password"
							className={
								isFocusInput.password
									? " w-full  rounded-md outline-none p-3 placeholder-white"
									: " w-full  rounded-md outline-none p-3"
							}
						/>
					</div>
				</div>
				<div className="flex items-center mb-4">
					<input
						type="checkbox"
						id="remember"
						className="mr-2 h-4 w-4"
					/>
					<label
						htmlFor="remember"
						className="text-gray-700"
					>
						Remember me
					</label>
				</div>
				<button className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition duration-300">
					Login
				</button>
				<p className="mt-2 text-[18px]">
					Don't have an account{" "}
					<a
						href="/register"
						className="text-blue-500"
					>
						register
					</a>
				</p>
			</form>
		</div>
	);
};

export default Login;

// focus to element //it's ok
