export async function handleRefresh(currentDir, buildTree, setFiles) {
    if (!currentDir) return;
    try {
        const fileList = await buildTree(currentDir);
        setFiles(fileList);
    } catch (err) {
        console.error("Failed to Refresh content of folder tree:", err);
    }
}