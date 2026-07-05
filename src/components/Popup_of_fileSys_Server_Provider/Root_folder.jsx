import { useActionState, useState } from "react";
import "./Root_folder.css";
import Loader from "../Loader/Loader";

export function Root_folder({ error, setRootFolder, setFallBackServer, validateRootFolder, setBreadCrumbPath, loading, setLoading }) {
    const [rootPath, setRootPath] = useState(null);
    const [isSelectBtnDisbale, setIsSelectBtnDisable] = useState(true);
    const [isCancelBtnDisable, setIsCancelBtnDisable] = useState(false);

    async function handleSelect() {
        setIsSelectBtnDisable(true);
        setIsCancelBtnDisable(true);
        const success = await validateRootFolder(rootPath);

        if (success) {
            setRootFolder(false);
        }
    }

    function Root_folder_input_handle(e) {
        const value = e.target.value.replace(/\s+/g, '');
        setRootPath(value);
        setBreadCrumbPath(value);
        value.length === 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
    }

    function resetStates() {
        setRootPath(null);
        setIsSelectBtnDisable(false);
        setFallBackServer(false);
    }

    return (
        <>
            <div className="rootFolder_div">
                <div>
                    <label htmlFor="Root_folder_input">Enter root folder location: </label>
                    <input type="text" id="Root_folder_input" onChange={(e) => Root_folder_input_handle(e)} />
                </div>
                {error &&
                    <span className="rootFolder_error">{error}</span>
                }
                <div className="rootFolder_div_btn">
                    <button className="select_btn" disabled={isSelectBtnDisbale} onClick={handleSelect} style={{ cursor: isSelectBtnDisbale ? "not-allowed" : "pointer", padding: loading ? "0px" : "6px" }}>{
                        loading ?
                            <Loader H={21} W={21} /> :
                            "Select"}
                    </button>
                    <button className="cancel_btn" disabled={isCancelBtnDisable} onClick={() => resetStates()} style={{ cursor: isCancelBtnDisable ? "not-allowed" : "pointer", }}>Cancel</button>
                </div>
            </div>
        </>
    )
}