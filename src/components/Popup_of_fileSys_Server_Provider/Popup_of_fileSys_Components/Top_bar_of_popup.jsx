import React from "react";
import { HandleBreadCrumbClick } from "../Popup_of_fileSys_Utilities/Popup_of_fileSys_Utilities";

export function Top_bar_of_popup({ values, setters, action }) {
    const {
        forward_Btn,
        undo,
        canUndo,
        backward_Btn,
        redo,
        canRedo,
        sliptPaths,
        files
    } = values;

    const {
        setForwardBtn,
        setBackwardBtn,
        setIsSelectBtnDisable,
        setIsCancelBtnDisable,
        setIsInputFieldDisable,
        setBreadCrumbPath,
        setFfName,
        setLoading_01,
        setError
    } = setters;

    const {
        validateRootFolder
    } = action;

    return (
        <div className="top_bar_of_popup">
            <div className="forward_and_backward_btns">
                <img src="src\assets\Popup_top_bar_icons\arrow-back-outline.svg"
                    alt="img" width={20} height={20}
                    onPointerDown={() => setForwardBtn(true)}
                    onPointerUp={() => setForwardBtn(false)}
                    onPointerLeave={() => setForwardBtn(false)}
                    className={`popup_icon ${forward_Btn ? "pressed" : ""}`}
                    onClick={undo}
                    style={{
                        "userSelect": !canUndo ? "none" : "auto",
                        "pointerEvents": !canUndo ? "none" : "auto",
                    }}
                />
                <img src="src\assets\Popup_top_bar_icons\arrow-forward-outline.svg"
                    alt="img" width={20} height={20}
                    onPointerDown={() => setBackwardBtn(true)}
                    onPointerUp={() => setBackwardBtn(false)}
                    onPointerLeave={() => setBackwardBtn(false)}
                    className={`popup_icon ${backward_Btn ? "pressed" : ""}`}
                    onClick={redo}
                    style={{
                        "userSelect": !canRedo ? "none" : "auto",
                        "pointerEvents": !canRedo ? "none" : "auto",
                    }}
                />
            </div>
            <div className="path_navigation_div">
                {
                    sliptPaths.map((path, idx) => {
                        const isNoDiretories = files.every((file) => file.type !== "directory");
                        const showSeprator = isNoDiretories ?
                            idx !== sliptPaths.length - 1 :
                            idx !== sliptPaths.length;
                        return (
                            <React.Fragment key={idx}>
                                <span
                                    onClick={() => HandleBreadCrumbClick(idx, setBreadCrumbPath, setFfName, sliptPaths, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setLoading_01, setError)}
                                    style={{ "cursor": "pointer", "textWrapMode": "nowrap" }}>
                                    {path}
                                </span>
                                {showSeprator && <span style={{ "cursor": "pointer" }}>{">"}</span>}
                            </React.Fragment >
                        )
                    })
                }
            </div>
        </div>
    )
}