interface form {}

export default function form() {
	return (
		<div className="container mx-auto">
			<h1 className="block m-auto mt-20 text-black text-3xl border-8 border-black bg-yellow-300 py-10 pl-14 w-80 font-mono ">
				File Uploader
			</h1>
			<div className="flex items-center justify-center h-96">
				<form>
					<label
						htmlFor="file"
						className="mb-2 uppercase font-bold text-lg text-white mr-4"
					>
						File:
					</label>
					<input
						type="file"
						id="file"
						name="file"
						className="border-8 border-black rounded-full bg-gray-100 py-2 px-3 text-gray-500"
					/>
					<label
						htmlFor="password"
						className="mb-2 uppercase font-bold text-lg text-white ml-10"
					>
						Password:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						className="border-8 border-black rounded-full bg-gray-100 leading-10 ml-3"
					/>
					<button
						className="rounded-lg border-8 border-black bg-yellow-400 text-md font-bold px-4 py-2 ml-10 text-black hover:bg-green-500"
						type="submit"
					>
						Send it!
					</button>
				</form>
			</div>
		</div>
	);
}
