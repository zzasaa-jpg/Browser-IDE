import { useActionState, useState } from "react";
import "../Popup_of_fileSys_Components/Styles/Root_folder.css";
import Loader from "../../Loader/Loader";
import { handle_Validate_RootFolder, resetStates_of_root_folder, Root_folder_input_handle } from "../Root_folder_Utilities/Root_folder_Utilities";

export function Root_folder({ values, setters, action }) {
    const {
        error,
        loading,
        isInputFieldDisable
    } = values;

    const {
        setRootFolder,
        setFallBackServer,
        setBreadCrumbPath,
        setLoading,
        setIsInputFieldDisable
    } = setters;

    const {
        validateRootFolder
    } = action;

    const [rootPath, setRootPath] = useState(null);
    const [isSelectBtnDisbale, setIsSelectBtnDisable] = useState(true);
    const [isCancelBtnDisable, setIsCancelBtnDisable] = useState(false);
    return (
        <>
            <div className="rootFolder_div">
                <div>
                    <label htmlFor="Root_folder_input">Enter root folder location: </label>
                    <input type="text" id="Root_folder_input"
                        onChange={(e) => Root_folder_input_handle(e, setRootPath, setBreadCrumbPath, setIsSelectBtnDisable)}
                        disabled={isInputFieldDisable}
                        style={{ cursor: isInputFieldDisable ? "not-allowed" : "pointer", }}
                    />
                </div>
                {error &&
                    <span className="rootFolder_error">{error}</span>
                }
                <div className="rootFolder_div_btn">
                    <button className="select_btn" disabled={isSelectBtnDisbale} onClick={() => handle_Validate_RootFolder(setIsCancelBtnDisable, setIsInputFieldDisable, setIsSelectBtnDisable, validateRootFolder, setRootFolder, rootPath)} style={{ cursor: isSelectBtnDisbale ? "not-allowed" : "pointer", padding: loading ? "0px" : "6px" }}>{
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