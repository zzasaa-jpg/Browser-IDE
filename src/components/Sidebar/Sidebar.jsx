import { useState } from "react";
import "./Sidebar.css";
import { Sidebar_bottom_section } from "./Sidebar_Components/Sidebar_bottom_section";
import { Sidebar_Icons } from "./Sidebar_Components/Sidebar_Icons";
import { Sidebar_top_btns_and_title_parent } from "./Sidebar_Components/Sidebar_top_btns_and_title_parent";

export default function Sidebar({ openFolder, files, loading, currentDir, buildTree, setFiles, createFolder, createFile }) {
	const hasFiles = files.length > 0;
	console.log(files, hasFiles);
	const [activeTab, setActiveTab] = useState("explorer");
	const [isVisible, setIsVisible] = useState(true);
	return (
		<>
			<aside className="Sidebar" style={{width: isVisible ? '270px' : 'auto'}}>
				<div className="Sidebar_left_div">
					<Sidebar_Icons
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						setIsVisible={setIsVisible}
						isVisible={isVisible}
					/>
				</div>
				<div className="Sidebar_right_div" style={{display: isVisible ? 'flex' : 'none'}}>
					<Sidebar_top_btns_and_title_parent
						currentDir={currentDir}
						createFolder={createFolder}
						createFile={createFile}
						loading={loading}
						buildTree={buildTree}
						setFiles={setFiles}
						files={files}
						openFolder={openFolder}
					/>
					<Sidebar_bottom_section />
				</div>
			</aside>
		</>
	);
}
