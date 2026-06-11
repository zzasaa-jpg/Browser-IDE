import "./FileItem.css";
import { useState } from "react";

export default function FileItem({ file }) {
	const [open, setOpen] = useState(false);
	const isFolder = file.type === "directory";

	return (
		<>
			<div className="file_or_folder_name" onClick={() => isFolder && setOpen(!open)}>
				{
					file.type == "directory" ?
						<img className="Directory_img" src="src/assets/folder-outline.svg" alt="icon" width="20" height="20" /> :
						<img className="File_img" src="src/assets/document-text-outline.svg" alt="icon" width="20" height="20" />
				}
				<span className="file_name_text">
					{file.name}
				</span>
			</div>
			<div className="children_container">
				{
					open &&
					file.children?.map(child => (
						<div key={child.name}>
							<FileItem file={child} />
						</div>
					))
				}
			</div>
		</>
	);
};