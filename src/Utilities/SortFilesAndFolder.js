export function sortFilesAndFolder(files){
    let sortedFiles = [...files].sort((a, b) => {
        if(a.type != b.type){
            return a.type == "directory" ? -1 : 1;
        }
        return a.name.localeCompare(b.name);
    });
    return sortedFiles;
}