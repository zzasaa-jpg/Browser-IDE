import { useState } from "react";
import "./Popup.css";
import { sortFilesAndFolder } from "../../Utilities/SortFilesAndFolder";
import { readDirectories } from "../../services/filesystem";
import { Root_folder } from "./Root_folder";

export default function Popup({ files, currentDir, setFallBackServer, openFolder, error, validateRootFolder }) {
    const [ffName, setFfName] = useState(currentDir);
    const [selectType, setSelectType] = useState("both");
    const [rootFolder, setRootFolder] = useState(true);
    const handleSelect = async () => {
        const success = await openFolder(ffName);
        if (success) {
            setFallBackServer(false);
        }
    };

    const filtered_files = sortFilesAndFolder(files)
        .filter((file) => {
            if (selectType == "both") return true;
            return file.type == selectType;
        })
    return (
        <>
            <div className="popup_container">
                {
                    rootFolder ?
                        <Root_folder
                            error={error}
                            setRootFolder={setRootFolder}
                            setFallBackServer={setFallBackServer}
                            validateRootFolder={validateRootFolder}
                        /> :
                        <div className="pop_box">
                            <div className="top_div">
                                <ul className="popup_grid">
                                    {filtered_files.length == 0 ? (
                                        <div className="popup_no_folder_files_div">
                                            <img src={selectType == "directory" ? "src/assets/folder-outline.svg" : "src/assets/document-text-outline.svg"} alt="img" width={80} height={80} />
                                            <span> No {selectType} found.</span>
                                        </div>
                                    ) : (
                                        filtered_files.map((file, idx) =>
                                            <div className="popup_folder_files_div" key={idx} onClick={() => setFfName(`${currentDir}/${file.name}`)}>
                                                <img src={file.type == "directory" ? "src/assets/folder-outline.svg" : "src/assets/document-text-outline.svg"} alt="img" width={80} height={80} />
                                                <span className="file_list_tag">{file.name}</span>
                                            </div>
                                        )
                                    )
                                    }
                                </ul>
                            </div>
                            <div className="bottom_div">
                                <h4 className="currentDir">Root folder: {currentDir}</h4>
                                <div className="input_select_tag_div">
                                    <input type="text" name="file_path"
                                        id="file_path" value={ffName}
                                        onChange={(e) => setFfName(e.target.value.replace(/\s+/g, ''))}
                                    />
                                    <select className="select_tag" value={selectType} onChange={(e) => setSelectType(e.target.value)}>
                                        <option value={"directory"}>Only Folder</option>
                                        <option value={"file"}>Only Files</option>
                                        <option value={"both"}>Both Folder & Files</option>
                                    </select>
                                </div>
                                {error &&
                                    <span className="popup_error">{error}</span>
                                }
                                <div className="popup_btns_div">
                                    <button className="select_btn" onClick={handleSelect}>Select</button>
                                    <button className="cancel_btn" onClick={() => setRootFolder(true)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}