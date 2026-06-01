import FileItem from "../../FileItem/FileItem";
import { handleRefresh } from "../../Sidebar/Sidebar_Utilities/Handle_refresh";
import { handle_New_Folder_or_File } from "../../Sidebar/Sidebar_Utilities/Handle_new_folder_or_file";
import { resize_sidebar } from "../Sidebar_Utilities/Handle_resize_file_explorer";

export function Sidebar_top_btns_and_title_parent({ currentDir, createFolder, createFile, loading, buildTree, setFiles, files }) {
    return (
        <div className="Sidebar_top_btns_and_ResizeHandle_parent_div">
            <div className="Sidebar_top_btns_and_title_parent_div">
                <div className="Sidebar_top_btns_and_title_section">
                    <div className="Title_of_project_div">
                        <h4 className="Title_of_project">{currentDir?.name ? currentDir.name : "Title"}</h4>
                    </div>
                    <div className="Creating_btns">
                        <div className="create_folder" onClick={() => handle_New_Folder_or_File(currentDir, createFolder, createFile, buildTree, setFiles, 0)}>
                            <img className="create_folder_icon" alt="icon" width="20" height="20" src="src/assets/folder-outline.svg" />
                            <img className="create_folder_add_icon" alt="icon" width="12" height="12" src="src/assets/add-outline.svg" />
                        </div>
                        <div className="create_file" onClick={() => handle_New_Folder_or_File(currentDir, createFolder, createFile, buildTree, setFiles, 1)}>
                            <img className="create_file_icon" alt="icon" width="20" height="20" src="src/assets/document-text-outline.svg" />
                            <img className="create_file_add_icon" alt="icon" width="12" height="12" src="src/assets/add-outline.svg" />
                        </div>
                        <div className="refresh" onClick={() => handleRefresh(currentDir, buildTree, setFiles)}>
                            <img className="refresh_icon" alt="icon" width="20" height="20" src="src/assets/refresh-outline.svg" />
                        </div>
                    </div>
                </div>
                {loading ? (
                    <h4>Loading...</h4>
                ) : files.length > 0 ? (
                    <>
                        <div className="no_folder_mes">
                            {files.map((file) => (
                                <FileItem
                                    key={file.name}
                                    file={file}
                                />
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="no_folder_mes">
                        <h4>No Folder Selected!</h4>
                    </div>
                )}
            </div>
            <div
                className="ResizeHandle"
                onPointerMove={resize_sidebar}
            ></div>
        </div>
    );
};