import Loader from "../../Loader/Loader";
import {Popup_inside_fetch_ff, Handle_popup_folder_files_states_event} from "../Popup_of_fileSys_Utilities/Popup_of_fileSys_Utilities";

export function Middle_div_of_popup({ loading, filtered_files, selectType, currentDir, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setFfName }) {
    return (
        <div className="Middle_div_of_popup" style={{
            "display": loading ? "flex" : "block",
            "justifyContent": loading ? "center" : "normal",
            "alignItems": loading ? "center" : "normal"
        }}>
            {loading ? <Loader H={50} W={50} /> :
                <ul className="popup_grid">
                    {filtered_files.length == 0 ? (
                        <div className="popup_no_folder_files_div" style={{ cursor: "not-allowed" }}>
                            <img src={"src/assets/Bottom_icons_sidebar/warning-outline.svg"} alt="img" width={80} height={80} />
                            <span> No {selectType} found.</span>
                        </div>
                    ) : (
                        filtered_files.map((file, idx) =>
                            <div className="popup_folder_files_div" key={idx}
                                onClick={() => Handle_popup_folder_files_states_event(file, setFfName, setIsSelectBtnDisable, currentDir)}
                                onDoubleClick={() => Popup_inside_fetch_ff(`${currentDir}/${file.name}`, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder)}
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