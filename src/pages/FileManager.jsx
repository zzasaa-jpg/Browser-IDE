import { useFiles } from "../hooks/useFiles";
import Sidebar from "../components/Sidebar/Sidebar";
import "./FileManager.css";

export default function FileManager() {
  const {
    files,
    openFolder,
    loading,
    currentDir,
    buildTree,
    createFolder,
    createFile,
    setFiles
  } = useFiles([]);

  return (
    <div>
      <Sidebar
        openFolder={openFolder}
        files={files}
        loading={loading}
        currentDir={currentDir}
        createFolder={createFolder}
        createFile={createFile}
        buildTree={buildTree}
        setFiles={setFiles}
      />
    </div>
  );
}
