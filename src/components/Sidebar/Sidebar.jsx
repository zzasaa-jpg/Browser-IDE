import "./Sidebar.css";
import { Sidebar_bottom_section } from "./Sidebar_Components/Sidebar_bottom_section";
import { Sidebar_Icons } from "./Sidebar_Components/Sidebar_Icons";
import { Sidebar_top_btns_and_title_parent } from "./Sidebar_Components/Sidebar_top_btns_and_title_parent";

export default function Sidebar({ openFolder, files, loading, currentDir, buildTree, setFiles, createFolder, createFile }) {
	const hasFiles = files.length > 0;
	console.log(files, hasFiles);
	return (
		<>
			<div className="Sidebar">
				<div className="Sidebar_top_section">
					<Sidebar_Icons openFolder={openFolder} />
					<Sidebar_top_btns_and_title_parent
						currentDir={currentDir}
						createFolder={createFolder}
						createFile={createFile}
						loading={loading}
						buildTree={buildTree}
						setFiles={setFiles}
						files={files}
					/>
				</div>
				<Sidebar_bottom_section />
			</div >
		</>
	);
}
