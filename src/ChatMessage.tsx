import React from "react";

const ChatMessage = () => {
	return (
		<div className="h-screen flex">
			<div className="h-full w-1/4 border-r-[1px] border-gray-700">
				<div className="flex flex-col h-full">
					<div className="flex justify-between items-center px-3 py-4 border-b-[1px] border-black">
						<h2 className="text-2xl ">Friend</h2>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="size-8 cursor-pointer"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
							/>
						</svg>
					</div>
					<div className=" no-scrollbar flex-grow overflow-scroll">
						<ul className="flex flex-col">
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 1</h2>
									<p>Lastmessage 1</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>
							<li className="flex items-center gap-[20px] p-4">
								<img
									src="https://placehold.co/50"
									alt=""
									className="rounded-full"
								/>
								<div>
									<h2>FriendName 2</h2>
									<p>Lastmessage 2</p>
								</div>
							</li>

							{/* Repeat list items as needed */}
						</ul>
					</div>
					<div className="p-2 border-t-[1px] border-black">
						<button className="text-center w-full bg-blue-500 text-white py-3">Logout</button>
					</div>
				</div>
			</div>
			<div className="h-full w-3/4  flex flex-col">
				<div className=" flex items-end p-2 border-b-[1px] border-black">
					<div className="">
						<img
							src="https://placehold.co/50"
							alt="friend1"
							className="rounded-full mr-4"
						/>
						<div className="greenborder-color"></div>
					</div>
					<div>
						<h2>Alice</h2>
						<p>Active now</p>
					</div>
				</div>
				<div className=" flex-grow overflow-auto no-scrollbar">
					<div className="flex p-3">
						<div>
							<img
								src="https://placehold.co/50"
								alt=""
								className="rounded-full"
							/>
						</div>
						<div className="ml-2 max-w-[60%] bg-blue-500 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3 justify-end">
						<div className="ml-2 max-w-[60%] bg-gray-400 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3">
						<div>
							<img
								src="https://placehold.co/50"
								alt=""
								className="rounded-full"
							/>
						</div>
						<div className="ml-2 max-w-[60%] bg-blue-500 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3">
						<div>
							<img
								src="https://placehold.co/50"
								alt=""
								className="rounded-full"
							/>
						</div>
						<div className="ml-2 max-w-[60%] bg-blue-500 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3">
						<div>
							<img
								src="https://placehold.co/50"
								alt=""
								className="rounded-full"
							/>
						</div>
						<div className="ml-2 max-w-[60%] bg-blue-500 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3 justify-end">
						<div className="ml-2 max-w-[60%] bg-gray-400 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
					<div className="flex p-3 justify-end">
						<div className="ml-2 max-w-[60%] bg-gray-400 rounded-md text-white p-3">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti harum exercitationem iure laborum
							nam amet animi sapiente! Quae mollitia animi nisi alias maxime voluptatem, a error voluptatum ad
							quo veniam ea qui iste eveniet repudiandae molestiae suscipit corrupti voluptates voluptas!
						</div>
					</div>
				</div>
				<div className=" px-3 py-4 border-t-[1px] border-black">
					<form
						action=""
						className="flex items-center"
					>
						<svg
							height="800px"
							width="800px"
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 280.067 280.067"
							className="size-8 rotate-[-45deg]"
						>
							<g>
								<path
									fill="black"
									d="M149.823,257.142c-31.398,30.698-81.882,30.576-113.105-0.429
  c-31.214-30.987-31.337-81.129-0.42-112.308l-0.026-0.018L149.841,31.615l14.203-14.098c23.522-23.356,61.65-23.356,85.172,0
  s23.522,61.221,0,84.586l-125.19,123.02l-0.044-0.035c-15.428,14.771-40.018,14.666-55.262-0.394
  c-15.244-15.069-15.34-39.361-0.394-54.588l-0.044-0.053l13.94-13.756l69.701-68.843l13.931,13.774l-83.632,82.599
  c-7.701,7.596-7.701,19.926,0,27.53s20.188,7.604,27.88,0L235.02,87.987l-0.035-0.026l0.473-0.403
  c15.682-15.568,15.682-40.823,0-56.39s-41.094-15.568-56.776,0l-0.42,0.473l-0.026-0.018l-14.194,14.089L50.466,158.485
  c-23.522,23.356-23.522,61.221,0,84.577s61.659,23.356,85.163,0l99.375-98.675l14.194-14.089l14.194,14.089l-14.194,14.098
  l-99.357,98.675C149.841,257.159,149.823,257.142,149.823,257.142z"
								/>
							</g>
						</svg>
						<input
							type="text"
							placeholder="Type message"
							className=" rounded-full flex-1 ml-2 mr-2 p-3"
						/>
						<button className="bg-blue-500 p-2 text-white">send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ChatMessage;
