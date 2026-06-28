export function SupportsFileSystemAPI() {
    return (
        "showDirectoryPicker" in window &&
        "showOpenFilePicker" in window
    );
}