import React, { useState, useEffect } from "react";
import "./Popup.css";
import { sortFilesAndFolder } from "../../Utilities/SortFilesAndFolder";
import { Root_folder } from "../Popup_of_fileSys_Server_Provider/Popup_of_fileSys_Components/Root_folder";
import { Top_bar_of_popup } from "./Popup_of_fileSys_Components/Top_bar_of_popup";
import { Middle_div_of_popup } from "./Popup_of_fileSys_Components/Middle_div_of_popup";
import { Bottom_div_of_popup } from "./Popup_of_fileSys_Components/bottom_div_of_popup";

export default function Popup({ files, currentDir, setFallBackServer, openFolder, error, validateRootFolder, undo, redo, canUndo, canRedo, reset, loading, setLoading }) {
    const [ffName, setFfName] = useState("");
    const [selectType, setSelectType] = useState("file&folder");
    const [rootFolder, setRootFolder] = useState(true);
    const [isSelectBtnDisbale, setIsSelectBtnDisable] = useState(true);
    const [isCancelBtnDisable, setIsCancelBtnDisable] = useState(false);
    const [forward_Btn, setForwardBtn] = useState(false);
    const [backward_Btn, setBackwardBtn] = useState(false);
    const [breadCrumbPath, setBreadCrumbPath] = useState("");
    const [isInputFieldDisable, setIsInputFieldDisable] = useState(false);

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
                            error={error}
                            setRootFolder={setRootFolder}
                            setFallBackServer={setFallBackServer}
                            validateRootFolder={validateRootFolder}
                            setBreadCrumbPath={setBreadCrumbPath}
                            loading={loading}
                            setLoading={setLoading}
                            isInputFieldDisable={isInputFieldDisable}
                            setIsInputFieldDisable={setIsInputFieldDisable}
                        /> :
                        <div className="pop_box">
                            <Top_bar_of_popup
                                setForwardBtn={setForwardBtn}
                                forward_Btn={forward_Btn}
                                undo={undo}
                                canUndo={canUndo}
                                setBackwardBtn={setBackwardBtn}
                                backward_Btn={backward_Btn}
                                redo={redo}
                                canRedo={canRedo}
                                sliptPaths={sliptPaths}
                                files={files}
                                setIsSelectBtnDisable={setIsSelectBtnDisable}
                                setIsCancelBtnDisable={setIsCancelBtnDisable}
                                setIsInputFieldDisable={setIsInputFieldDisable}
                                validateRootFolder={validateRootFolder}
                                setBreadCrumbPath={setBreadCrumbPath}
                                setFfName={setFfName}
                            />
                            <Middle_div_of_popup
                                loading={loading}
                                filtered_files={filtered_files}
                                selectType={selectType}
                                currentDir={currentDir}
                                setIsSelectBtnDisable={setIsSelectBtnDisable}
                                setIsCancelBtnDisable={setIsCancelBtnDisable}
                                setIsInputFieldDisable={setIsInputFieldDisable}
                                validateRootFolder={validateRootFolder}
                                setFfName={setFfName}
                            />
                            <Bottom_div_of_popup
                                ffName={ffName}
                                isInputFieldDisable={isInputFieldDisable}
                                selectType={selectType}
                                setSelectType={setSelectType}
                                error={error}
                                isSelectBtnDisbale={isSelectBtnDisbale}
                                isCancelBtnDisable={isCancelBtnDisable}
                                loading={loading}
                                setFfName={setFfName}
                                setIsSelectBtnDisable={setIsSelectBtnDisable}
                                setIsCancelBtnDisable={setIsCancelBtnDisable}
                                setIsInputFieldDisable={setIsInputFieldDisable}
                                validateRootFolder={validateRootFolder}
                                setFallBackServer={setFallBackServer}
                                setRootFolder={setRootFolder}
                                reset={reset}
                            />
                        </div>
                }
            </div>
        </>
    )
}