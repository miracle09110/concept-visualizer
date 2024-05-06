import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";
import { VscGraphScatter } from "react-icons/vsc";
import { LuFileSearch } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const SideBarNav = () => {
	return (
		<div className={"w-64 bg-tertiary fixed h-full px-4 py-2"}>
			<div className="my-2 mb-4">
				<h1 className="flex items-center text-xl">
					<FaBars className="me-4 cursor-pointer" />
					Dashboard
				</h1>
			</div>
			<hr />
			<ul className="mt-3 text-black font-bold">
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
	);
};

export default SideBarNav;
