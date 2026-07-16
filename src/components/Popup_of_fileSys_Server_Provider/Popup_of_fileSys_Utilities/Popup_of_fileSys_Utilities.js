export async function Popup_inside_fetch_ff(path, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setError, setLoading_01, setIsPathNavigationDivDisable) {
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    setIsPathNavigationDivDisable(true);
    setLoading_01(true);
    const { success, tree } = await validateRootFolder(path, { useHookLoader: false });
    if (success) {
        setLoading_01(false);
        tree.length == 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
        setIsPathNavigationDivDisable(false);
    } else {
        setLoading_01(false);
        const time = setTimeout(() => {
            setError(null);
            clearTimeout(time);
        }, 1800);
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
        setIsPathNavigationDivDisable(false);
    }
}

export async function HandleSelect(setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, ffName, setFallBackServer, setError, setIsPathNavigationDivDisable) {
    setIsSelectBtnDisable(true);
    setIsCancelBtnDisable(true);
    setIsInputFieldDisable(true);
    setIsPathNavigationDivDisable(true);
    const success = await validateRootFolder(ffName);
    if (success) {
        setFallBackServer(false);
        setIsCancelBtnDisable(false);
        setIsInputFieldDisable(false);
        setIsPathNavigationDivDisable(false);
    } else {
        setIsSelectBtnDisable(true);
        setIsCancelBtnDisable(true);
        setIsInputFieldDisable(true);
        setIsPathNavigationDivDisable(true);
        const time = setTimeout(() => {
            setError(null);
            clearTimeout(time);
            setIsCancelBtnDisable(false);
            setIsInputFieldDisable(false);
            setIsPathNavigationDivDisable(false);
        }, 1800);

    }
}

export function HandleBreadCrumbClick(idx, setBreadCrumbPath, setFfName, sliptPaths, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setLoading_01, setError, setIsPathNavigationDivDisable, setSeparatorVisibility) {
    setSeparatorVisibility(false);
    const newPaths = sliptPaths.slice(0, idx + 1).join("/");
    setBreadCrumbPath(newPaths);
    setFfName(newPaths);
    const time = setTimeout(() => {
        Popup_inside_fetch_ff(newPaths, setIsSelectBtnDisable, setIsCancelBtnDisable, setIsInputFieldDisable, validateRootFolder, setError, setLoading_01, setIsPathNavigationDivDisable);
        clearInterval(time);
    }, 150);
}

export function Handle_popup_input(e, setFfName, setIsSelectBtnDisable, setSeparatorVisibility) {
    setSeparatorVisibility(false);
    const inputValue = e.target.value.replace(/\s+/g, '');
    setFfName(inputValue);
    inputValue.length === 0 ? setIsSelectBtnDisable(true) : setIsSelectBtnDisable(false);
}

export function Handle_popup_folder_files_states_event(file, setFfName, setIsSelectBtnDisable, currentDir, setSeparatorVisibility) {
    setSeparatorVisibility(false);
    setFfName(`${currentDir}/${file.name}`);
    setIsSelectBtnDisable(false);
}

export function ResetStates_of_popup(setSelectType, setIsSelectBtnDisable, setIsInputFieldDisable, setRootFolder, reset, setSeparatorVisibility) {
    setSeparatorVisibility(false);
    setSelectType("file&folder");
    setIsSelectBtnDisable(true);
    setIsInputFieldDisable(false);
    setRootFolder(true);
    reset();
}

export function handleBreadCrumbSeparatorClick(event, setSeparatorTop, setSeparatorLeft, setSeparatorVisibility, idx, separatorVisibility) {
    setSeparatorVisibility(!separatorVisibility);
    setSeparatorTop(event.clientY + 17);
    setSeparatorLeft(event.clientX + 6);
}
