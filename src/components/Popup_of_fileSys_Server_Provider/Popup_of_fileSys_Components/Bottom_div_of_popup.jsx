import Loader from "../../Loader/Loader";
import { HandleSelect, Handle_popup_input, ResetStates_of_popup } from "../Popup_of_fileSys_Utilities/Popup_of_fileSys_Utilities";

export function Bottom_div_of_popup({ values, setters, actions }) {
    const {
        ffName,
        isInputFieldDisable,
        selectType,
        error,
        isSelectBtnDisable,
        isCancelBtnDisable,
        loading
    } = values;

    const {
        setFfName,
        setIsSelectBtnDisable,
        setIsCancelBtnDisable,
        setIsInputFieldDisable,
        setFallBackServer,
        setRootFolder,
        setSelectType,
        setError,
        setIsPathNavigationDivDisable
    } = setters;
    const {
        validateRootFolder,
        reset
    } = actions;

    return (
        <div className="bottom_div">
            <h4 className="currentDir">Root folder: {ffName}</h4>
            <div className="input_select_tag_div">
                <input type="text" name="popup_input"
                    id="popup_input" value={ffName}
                    onChange={(e) => Handle_popup_input(e, setFfName, setIsSelectBtnDisable)}
                    disabled={isInputFieldDisable}
                    style={{ cursor: isInputFieldDisable ? "not-allowed" : "auto", }}
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
                <button className="select_btn" disabled={isSelectBtnDisable} onClick={() => HandleSelect(setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, ffName, setFallBackServer, setError, setIsPathNavigationDivDisable)} style={{ cursor: isSelectBtnDisable ? "not-allowed" : "pointer", padding: loading ? "0px" : "6px" }}>{
                    loading ?
                        <Loader H={21} W={21} /> :
                        "Select"}</button>
                <button className="cancel_btn" disabled={isCancelBtnDisable} onClick={() => ResetStates_of_popup(setFfName, setSelectType, setIsSelectBtnDisable, setIsInputFieldDisable, setRootFolder, reset)} style={{ cursor: isCancelBtnDisable ? "not-allowed" : "pointer" }}>Cancel</button>
            </div>
        </div>
    )
}