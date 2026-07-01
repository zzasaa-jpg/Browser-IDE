import { useState } from "react";
import "./Root_folder.css";
export function Root_folder({ error, setRootFolder, setFallBackServer, validateRootFolder }) {
    const [rootPath, setRootPath] = useState(null);
    async function handleSelect() {

        const success = await validateRootFolder(rootPath);

        if (success) {
            setRootFolder(false);
        }
    }
    return (
        <>
            <div className="rootFolder_div">
                <div>
                    <label htmlFor="Root_folder_input">Enter root folder location: </label>
                    <input type="text" id="Root_folder_input" onChange={(e) => setRootPath(e.target.value.replace(/\s+/g, ''))} />
                </div>
                {error &&
                    <span className="rootFolder_error">path is not exists</span>
                }
                <div className="rootFolder_div_btn">
                    <button className="select_btn" onClick={handleSelect}>Select</button>
                    <button className="cancel_btn" onClick={() => setFallBackServer(false)}>Cancel</button>
                </div>
            </div>
        </>
    )
}