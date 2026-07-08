export async function Popup_inside_fetch_ff(path, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder) {
    console.log(path)
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    const success = await validateRootFolder(path);
    if (success) {
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
    }
}

export async function HandleSelect(setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, ffName, setFallBackServer) {
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    const success = await validateRootFolder(ffName);
    if (success) {
        setFallBackServer(false);
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
    }
}

export function HandleBreadCrumbClick(idx, setBreadCrumbPath, setFfName, sliptPaths, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder) {
    const newPaths = sliptPaths.slice(0, idx + 1).join("/");
    setBreadCrumbPath(newPaths);
    setFfName(newPaths);
    const time = setTimeout(() => {
        Popup_inside_fetch_ff(newPaths, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder);
        clearInterval(time);
    }, 150);
}

export function Handle_popup_input(e, setFfName, setIsSelectBtnDisable) {
    const inputValue = e.target.value.replace(/\s+/g, '');
    setFfName(inputValue);
    inputValue.length == 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
}

export function Handle_popup_folder_files_states_event(file, setFfName, setIsSelectBtnDisable, currentDir) {
    setFfName(`${currentDir}/${file.name}`);
    setIsSelectBtnDisable(false);
}

export function ResetStates_of_popup(setFfName, setSelectType, setIsSelectBtnDisable, setIsInputFieldDisable, setRootFolder, reset) {
    setFfName("");
    setSelectType("file&folder")
    setIsSelectBtnDisable(true);
    setIsInputFieldDisable(false);
    setRootFolder(true)
    reset();
}