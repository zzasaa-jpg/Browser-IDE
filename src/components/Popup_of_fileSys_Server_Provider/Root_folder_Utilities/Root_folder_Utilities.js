export async function handle_Validate_RootFolder(setIsCancelBtnDisable, setIsInputFieldDisable,setIsSelectBtnDisable, validateRootFolder, setRootFolder, rootPath) {
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    const success = await validateRootFolder(rootPath);
    if (success) {
        setRootFolder(false);
    }
}

export function resetStates_of_root_folder(setRootPath, setIsSelectBtnDisable, setFallBackServer) {
    setRootPath(null);
    setIsSelectBtnDisable(false);
    setFallBackServer(false);
}

export function Root_folder_input_handle(e,setRootPath, setBreadCrumbPath,setIsSelectBtnDisable) {
    const value = e.target.value.replace(/\s+/g, '');
    setRootPath(value);
    setBreadCrumbPath(value);
    value.length === 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
}