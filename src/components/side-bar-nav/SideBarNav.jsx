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
			<div className={`w-17 bg-tertiary fixed px-2 py-2 ${click && "w-[50px]"}`}>
				<button onClick={() => setClick(!click)}>
					<FaBars className="me-5 ms-2 mt-1.5 cursor-pointer" />
				</button>
			</div>

			<div className={`${click ? "hidden" : "block"}`}>
				<div className="w-64 bg-tertiary px-4 py-2">
					<h1 className="flex items-center text-xl ms-11 mb-2">Dashboard</h1>
					<hr />
				</div>
				<ul className="text-black font-bold fixed h-full w-64 bg-tertiary px-4 py-2">
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
							<FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
							Home
						</a>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
							<BsBarChartFill className="inline-block w-6 h-6 mr-2 -mt-2" />
							Sorting
						</a>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
							<LuFileSearch className="inline-block w-6 h-6 mr-2 -mt-2" />
							Searching
						</a>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
							<VscGraphScatter className="inline-block w-6 h-6 mr-2 -mt-2" />
							Pathfinding
						</a>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
							<FaReact className="inline-block w-6 h-6 mr-2 -mt-2" />
							React
						</a>
					</li>
					<li className="mb-2 rounded hover:shadow hover:bg-slate-800 py-2 hover:text-secondary">
						<a href="" className="px-3">
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
