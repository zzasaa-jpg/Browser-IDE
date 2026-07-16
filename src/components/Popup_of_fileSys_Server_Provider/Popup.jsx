import React, { useState, useEffect } from "react";
import "./Popup.css";
import { sortFilesAndFolder } from "../../Utilities/SortFilesAndFolder";
import { Root_folder } from "../Popup_of_fileSys_Server_Provider/Popup_of_fileSys_Components/Root_folder";
import { Top_bar_of_popup } from "./Popup_of_fileSys_Components/Top_bar_of_popup";
import { Middle_div_of_popup } from "./Popup_of_fileSys_Components/Middle_div_of_popup";
import { Bottom_div_of_popup } from "./Popup_of_fileSys_Components/bottom_div_of_popup";

export default function Popup({ files, currentDir, setFallBackServer, openFolder, error, validateRootFolder, undo, redo, canUndo, canRedo, reset, loading, setLoading, setError }) {
    const [ffName, setFfName] = useState("");
    const [selectType, setSelectType] = useState("file&folder");
    const [rootFolder, setRootFolder] = useState(true);
    const [isSelectBtnDisable, setIsSelectBtnDisable] = useState(true);
    const [isCancelBtnDisable, setIsCancelBtnDisable] = useState(false);
    const [forward_Btn, setForwardBtn] = useState(false);
    const [backward_Btn, setBackwardBtn] = useState(false);
    const [breadCrumbPath, setBreadCrumbPath] = useState("");
    const [isInputFieldDisable, setIsInputFieldDisable] = useState(false);
    const [loading_01, setLoading_01] = useState(false);
    const [isPathNavigationDivDisable, setIsPathNavigationDivDisable] = useState(false);
    const [separatorVisibility, setSeparatorVisibility] = useState(false);

    useEffect(() => {
        if (currentDir) {
            setFfName(currentDir);
            setBreadCrumbPath(currentDir);
        }
    }, [currentDir]);

    const sliptPaths = breadCrumbPath.split("/").filter(Boolean);
    const filtered_files = sortFilesAndFolder(files)
        .filter((file) => {
            if (selectType == "file&folder") return true;
            return file.type == selectType;
        });

    return (
        <>
            <div className="popup_container">
                {
                    rootFolder ?
                        <Root_folder
                            values={{
                                error,
                                loading,
                                isInputFieldDisable,
                                isCancelBtnDisable,
                                isSelectBtnDisable
                            }}
                            setters={{
                                setRootFolder,
                                setFallBackServer,
                                setBreadCrumbPath,
                                setLoading,
                                setIsInputFieldDisable,
                                setError,
                                setIsCancelBtnDisable,
                                setIsSelectBtnDisable
                            }}
                            action={{
                                validateRootFolder
                            }}
                        /> :
                        <div className="pop_box">
                            <Top_bar_of_popup
                                values={{
                                    forward_Btn,
                                    undo,
                                    canUndo,
                                    backward_Btn,
                                    redo,
                                    canRedo,
                                    sliptPaths,
                                    files,
                                    isPathNavigationDivDisable,
                                    separatorVisibility,
                                }}

                                setters={{
                                    setForwardBtn,
                                    setBackwardBtn,
                                    setIsSelectBtnDisable,
                                    setIsCancelBtnDisable,
                                    setIsInputFieldDisable,
                                    setBreadCrumbPath,
                                    setFfName,
                                    setLoading_01,
                                    setError,
                                    setIsPathNavigationDivDisable,
                                    setSeparatorVisibility
                                }}
                                action={{
                                    validateRootFolder
                                }}
                            />
                            <Middle_div_of_popup
                                values={{
                                    loading,
                                    loading_01,
                                    filtered_files,
                                    selectType,
                                    currentDir,
                                    error
                                }}
                                setters={{
                                    setIsSelectBtnDisable,
                                    setIsCancelBtnDisable,
                                    setIsInputFieldDisable,
                                    setFfName,
                                    setError,
                                    setLoading_01,
                                    setIsPathNavigationDivDisable,
                                    setSeparatorVisibility
                                }}
                                action={{
                                    validateRootFolder
                                }}
                            />
                            <Bottom_div_of_popup
                                values={{
                                    ffName,
                                    isInputFieldDisable,
                                    selectType,
                                    error,
                                    isSelectBtnDisable,
                                    isCancelBtnDisable,
                                    loading
                                }}
                                setters={{
                                    setFfName,
                                    setIsSelectBtnDisable,
                                    setIsCancelBtnDisable,
                                    setIsInputFieldDisable,
                                    setFallBackServer,
                                    setRootFolder,
                                    setSelectType,
                                    setError,
                                    setIsPathNavigationDivDisable,
                                    setSeparatorVisibility
                                }}
                                actions={{
                                    validateRootFolder,
                                    reset
                                }}
                            />
                        </div>
                }
            </div>
        </>
    )
}