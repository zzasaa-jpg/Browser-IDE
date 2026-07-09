import { useActionState, useState } from "react";
import "../Popup_of_fileSys_Components/Styles/Root_folder.css";
import Loader from "../../Loader/Loader";
import { handle_Validate_RootFolder, resetStates_of_root_folder, Root_folder_input_handle } from "../Root_folder_Utilities/Root_folder_Utilities";

export function Root_folder({ values, setters, action }) {
    const {
        error,
        loading,
        isInputFieldDisable,
        isCancelBtnDisable,
        isSelectBtnDisable
    } = values;

    const {
        setRootFolder,
        setFallBackServer,
        setBreadCrumbPath,
        setLoading,
        setIsInputFieldDisable,
        setError,
        setIsCancelBtnDisable,
        setIsSelectBtnDisable
    } = setters;

    const {
        validateRootFolder
    } = action;

    const [rootPath, setRootPath] = useState(null);
    // const [isSelectBtnDisbale, setIsSelectBtnDisable] = useState(true);
    // const [isCancelBtnDisable, setIsCancelBtnDisable] = useState(false);
    return (
        <>
            <div className="rootFolder_div">
                <div>
                    <label htmlFor="Root_folder_input">Enter root folder location: </label>
                    <input type="text" id="Root_folder_input"
                        onChange={(e) => Root_folder_input_handle(e, setRootPath, setBreadCrumbPath, setIsSelectBtnDisable)}
                        disabled={isInputFieldDisable}
                        style={{ cursor: isInputFieldDisable ? "not-allowed" : "auto", }}
                    />
                </div>
                {error &&
                    <span className="rootFolder_error">{error}</span>
                }
                <div className="rootFolder_div_btn">
                    <button className="select_btn" disabled={isSelectBtnDisable} onClick={() => handle_Validate_RootFolder(setIsCancelBtnDisable, setIsInputFieldDisable, setIsSelectBtnDisable, validateRootFolder, setRootFolder, rootPath, setError)} style={{ cursor: isSelectBtnDisable ? "not-allowed" : "pointer", padding: loading ? "0px" : "6px" }}>{
                        loading ?
                            <Loader H={21} W={21} /> :
                            "Select"}
                    </button>
                    <button className="cancel_btn" disabled={isCancelBtnDisable} onClick={() => resetStates_of_root_folder(setRootPath, setIsSelectBtnDisable, setFallBackServer)} style={{ cursor: isCancelBtnDisable ? "not-allowed" : "pointer", }}>Cancel</button>
                </div>
            </div>
        </>
    )
}