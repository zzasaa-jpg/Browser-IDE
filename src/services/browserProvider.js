export async function read_Directories(path) {
    const dirHandle = await pickFolder();
    const tree = await buildTree(dirHandle);
    return {
        success: true,
        dirHandle,
        tree,
        fall_back_server: false,
    };
}

export async function pickFolder() {
    return await window.showDirectoryPicker();
}

export async function buildTree(dirHandle) {
    const children = [];

    for await (const [name, handle] of dirHandle.entries()) {
        if (handle.kind === "file") {
            const file = await handle.getFile();
            children.push({
                name,
                kind: "file",
                handle,
                size: file.size,
                modified: new Date(file.lastModified),
            });
        } else if (handle.kind === "directory") {
            children.push({
                name,
                type: "directory",
                handle,
                children: await buildTree(handle),
            });
        }
    }
    return children;
}

// Create new folder
export async function createFolder(dirHandle, folderName) {
    const folderHandle = await dirHandle.getDirectoryHandle(folderName, {
        create: true
    });
    return folderHandle;
}

// Create new file
export async function createFile(dirHandle, fileName) {
    const fileHandle = dirHandle.getFileHandle(fileName, {
        create: true
    });
    return fileHandle;
}