export async function handle_Validate_RootFolder(setIsCancelBtnDisable, setIsInputFieldDisable, setIsSelectBtnDisable, validateRootFolder, setRootFolder, rootPath, setError) {
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    const { success, tree } = await validateRootFolder(rootPath);
    if (success) {
        tree.length == 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
        setRootFolder(false);
    } else {
        setIsSelectBtnDisable(true);
        setIsCancelBtnDisable(true);
        setIsInputFieldDisable(true);
        const time = setTimeout(() => {
            setError(null);
            clearTimeout(time);
            setIsCancelBtnDisable(false);
            setIsInputFieldDisable(false);
        }, 1800);

    }
}

export function resetStates_of_root_folder(setFallBackServer) {
    setFallBackServer(false);
}

export function Root_folder_input_handle(e, setRootPath, setBreadCrumbPath, setIsSelectBtnDisable) {
    const value = e.target.value.replace(/\s+/g, '');
    setRootPath(value);
    setBreadCrumbPath(value);
    value.length === 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
}