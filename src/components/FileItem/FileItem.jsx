import "./FileItem.css";

export default function FileItem({ file }) {
	return (
		<div className="file_or_folder_name">
			{file.type == "directory" ? <img className="Directory_img" src="src/assets/folder-outline.svg" alt="icon" width="20" height="20" /> : <img className="File_img" src="src/assets/document-text-outline.svg" alt="icon" width="20" height="20" />}
			{file.name}

			{/* {
		  file.children?.map(child => (
			  <FileItem key={child.name} file={child}/>
		  ))
	  } */}
		</div>
	);
};