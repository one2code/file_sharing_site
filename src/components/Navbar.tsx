export default function Navbar() {
	return (
		<nav className="pt-5">
			<ul className="flex justify-end mr-20 text-white text-2xl ">
				<li className="">
					<a
						href="#"
						className="hover:text-yellow-300 hover:cursor-pointer hover:decoration-8"
					>
						Home
					</a>
				</li>
				<li className="ml-10">
					<a
						href="#"
						className="hover:text-yellow-300 hover:cursor-pointer hover:decoration-8"
					>
						About
					</a>
				</li>
			</ul>
		</nav>
	);
}
