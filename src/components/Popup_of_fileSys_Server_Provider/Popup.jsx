import React, { useState, useEffect } from "react";
import "./Popup.css";
import { sortFilesAndFolder } from "../../Utilities/SortFilesAndFolder";
import { Root_folder } from "./Root_folder";

export default function Popup({ files, currentDir, setFallBackServer, openFolder, error, validateRootFolder, undo, redo,
    canUndo, canRedo, reset }) {
    const [ffName, setFfName] = useState("");
    const [selectType, setSelectType] = useState("file&folder");
    const [rootFolder, setRootFolder] = useState(true);
    const [isSelectBtnDisbale, setIsSelectBtnDisable] = useState(true);
    const [forward_Btn, setForwardBtn] = useState(false);
    const [backward_Btn, setBackwardBtn] = useState(false);
    const [breadCrumbPath, setBreadCrumbPath] = useState("");

    useEffect(() => {
        if (currentDir) {
            setBreadCrumbPath(currentDir);
        }
    }, [currentDir])

    const sliptPaths = breadCrumbPath.split("/").filter(Boolean);

    const handleSelect = async () => {
        const success = await validateRootFolder(ffName);
        if (success) {
            setFallBackServer(false);
        }
    };

    const popup_inside_fetch_ff = async () => {
        return await validateRootFolder(ffName);
    };

    const filtered_files = sortFilesAndFolder(files)
        .filter((file) => {
            if (selectType == "file&folder") return true;
            return file.type == selectType;
        })

    function handle_popup_input(e) {
        const inputValue = e.target.value.replace(/\s+/g, '');
        setFfName(inputValue);
        inputValue.length == 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
    }

    function handle_popup_folder_files_states_event(file) {
        setFfName(`${currentDir}/${file.name}`);
        setBreadCrumbPath(`${currentDir}/${file.name}`);
        setIsSelectBtnDisable(false);
    }

    function resetStates() {
        setFfName("");
        setSelectType("file&folder")
        setIsSelectBtnDisable(true);
        setRootFolder(true)
        reset();
    }

    function handleBreadCrumbClick(idx) {
        const newPaths = sliptPaths.slice(0, idx + 1).join("/");
        setBreadCrumbPath(newPaths);
        setFfName(newPaths);
    }

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
                            setBreadCrumbPath={setBreadCrumbPath}
                        /> :
                        <div className="pop_box">
                            <div className="top_bar_of_popup">
                                <div className="forward_and_backward_btns">
                                    <img src="src\assets\Popup_top_bar_icons\arrow-back-outline.svg"
                                        alt="img" width={20} height={20}
                                        onPointerDown={() => setForwardBtn(true)}
                                        onPointerUp={() => setForwardBtn(false)}
                                        onPointerLeave={() => setForwardBtn(false)}
                                        className={`popup_icon ${forward_Btn ? "pressed" : ""}`}
                                        onClick={undo}
                                        style={{ "userSelect": !canUndo ? "none" : "auto", "pointerEvents": !canUndo ? "none" : "auto" }}
                                    />
                                    <img src="src\assets\Popup_top_bar_icons\arrow-forward-outline.svg"
                                        alt="img" width={20} height={20}
                                        onPointerDown={() => setBackwardBtn(true)}
                                        onPointerUp={() => setBackwardBtn(false)}
                                        onPointerLeave={() => setBackwardBtn(false)}
                                        className={`popup_icon ${backward_Btn ? "pressed" : ""}`}
                                        onClick={redo}
                                        style={{ "userSelect": !canRedo ? "none" : "auto", "pointerEvents": !canRedo ? "none" : "auto" }}
                                    />
                                </div>
                                <div className="path_navigation_div">
                                    {
                                        sliptPaths.map((path, idx) => (
                                            <React.Fragment key={idx}>
                                                <span
                                                    onClick={() => handleBreadCrumbClick(idx)}
                                                    onDoubleClick={popup_inside_fetch_ff}
                                                    style={{ "cursor": "pointer", "textWrapMode": "nowrap" }}>
                                                    {path}
                                                </span>
                                                {idx !== sliptPaths.length && <span style={{ "cursor": "pointer" }}>{">"}</span>}
                                            </React.Fragment >
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="top_div">
                                <ul className="popup_grid">
                                    {filtered_files.length == 0 ? (
                                        <div className="popup_no_folder_files_div" style={{ cursor: "not-allowed" }}>
                                            <img src={"src/assets/Bottom_icons_sidebar/warning-outline.svg"} alt="img" width={80} height={80} />
                                            <span> No {selectType} found.</span>
                                        </div>
                                    ) : (
                                        filtered_files.map((file, idx) =>
                                            <div className="popup_folder_files_div" key={idx}
                                                onClick={() => handle_popup_folder_files_states_event(file)}
                                                onDoubleClick={popup_inside_fetch_ff}
                                            >
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
                                    <input type="text" name="popup_input"
                                        id="popup_input" value={ffName}
                                        onChange={(e) => handle_popup_input(e)}
                                    />
                                    <select className="select_tag" value={selectType} onChange={(e) => setSelectType(e.target.value)}>
                                        <option value={"directory"}>Only Folder</option>
                                        <option value={"file"}>Only Files</option>
                                        <option value={"file&folder"}>Both Folder & Files</option>
                                    </select>
                                </div>
                                {error &&
                                    <span className="popup_error">{error}</span>
                                }
                                <div className="popup_btns_div">
                                    <button className="select_btn" disabled={isSelectBtnDisbale} onClick={handleSelect} style={{ cursor: isSelectBtnDisbale ? "not-allowed" : "pointer" }}>Select</button>
                                    <button className="cancel_btn" onClick={() => resetStates()}>Cancel</button>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}