import { useState } from "react";
import Loader from "../../Loader/Loader";
import { Popup_inside_fetch_ff, Handle_popup_folder_files_states_event } from "../Popup_of_fileSys_Utilities/Popup_of_fileSys_Utilities";

export function Middle_div_of_popup({ values, setters, action }) {
    const {
        loading,
        loading_01,
        filtered_files,
        selectType,
        currentDir,
        error
    } = values;
    const {
        setIsSelectBtnDisable,
        setIsCancelBtnDisable,
        setIsInputFieldDisable,
        setFfName,
        setError,
        setLoading_01,
        setIsPathNavigationDivDisable,
    } = setters;
    const {
        validateRootFolder
    } = action;

    return (
        <div className="Middle_div_of_popup" style={{
            "display": loading_01 ? "flex" : "block",
            "justifyContent": loading_01 ? "center" : "normal",
            "alignItems": loading_01 ? "center" : "normal"
        }}>
            {loading_01 ? <Loader H={50} W={50} /> :
                <ul className="popup_grid">
                    {filtered_files.length == 0 ? (
                        <div className="popup_no_folder_files_div" style={{ cursor: "not-allowed" }}>
                            <img src={"src/assets/Bottom_icons_sidebar/warning-outline.svg"} alt="img" width={80} height={80} />
                            <span> No {selectType} found.</span>
                        </div>
                    ) : (
                        filtered_files.map((file, idx) =>
                            <div className="popup_folder_files_div" key={idx} style={{ cursor: file.type == "directory" ? "pointer" : "auto" }}
                                onClick={() => Handle_popup_folder_files_states_event(file, setFfName, setIsSelectBtnDisable, currentDir)}
                                onDoubleClick={() => file.type == "directory" ? Popup_inside_fetch_ff(`${currentDir}/${file.name}`, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setError, setLoading_01, setIsPathNavigationDivDisable) : null}
                            >
                                <img src={file.type == "directory" ? "src/assets/folder-outline.svg" : "src/assets/document-text-outline.svg"} alt="img" width={80} height={80} />
                                <span className="file_list_tag">{file.name}</span>
                            </div>
                        )
                    )
                    }
                </ul>
            }
        </div>
    )
}