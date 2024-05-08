import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { VscGraphScatter } from "react-icons/vsc";
import { LuFileSearch } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { useState } from "react";

const SideBarNav = () => {
	const [click, setClick] = useState(false);

	return (
		<div>
			<div className={`bg-tertiary h-full fixed top-0 left-0 px-2 py-3 ${click ? "w-50" : "w-17"}`}>
				<button onClick={() => setClick(!click)}>
					<FaBars className="text-black cursor-pointer" />
				</button>
			</div>

			<div className={`w-45 h-screen ${click ? "" : "hidden"}`}>
				<ul className="text-black font-bold fixed top-0 left-8 h-full bg-tertiary py-2">
					<h1 className="text-black font-bold items-center text-xl px-1 ms-5 mb-2 mr-12 pb-3">Dashboard</h1>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-12">
							<FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
							Home
						</a>
					</li>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-12">
							<BsBarChartFill className="inline-block w-6 h-6 mr-2 -mt-2" />
							Sorting
						</a>
					</li>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-12">
							<LuFileSearch className="inline-block w-6 h-6 mr-2 -mt-2" />
							Searching
						</a>
					</li>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-10">
							<VscGraphScatter className="inline-block w-6 h-6 mr-2 -mt-2" />
							Pathfinding
						</a>
					</li>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-12">
							<FaReact className="inline-block w-6 h-6 mr-2 -mt-2" />
							ReactJS
						</a>
					</li>
					<li className="mb-2 rounded hover:mr-1 hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="pr-12">
							<FaNodeJs className="inline-block w-6 h-6 mr-2 -mt-2" />
							NodeJS
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideBarNav;
