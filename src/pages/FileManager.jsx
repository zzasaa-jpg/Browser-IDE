import { useFiles } from "../hooks/useFiles";
import Sidebar from "../components/Sidebar/Sidebar";
import "./FileManager.css";
import Popup from "../components/Popup_of_fileSys_Server_Provider/Popup";
import { Root_folder } from "../components/Popup_of_fileSys_Server_Provider/Popup_of_fileSys_Components/Root_folder";

export default function FileManager() {
  const {
    files,
    openFolder,
    loading,
    currentDir,
    setCurrentDir,
    buildTree,
    createFolder,
    createFile,
    setFiles,
    fallBackServer,
    setFallBackServer,
    error,
    validateRootFolder,
    undo, redo,
    canUndo,
    canRedo,
    reset,
    setLoading,
    setError,
  } = useFiles([]);

  return (
    <>
      {
        fallBackServer ?
          <Popup
            files={files}
            currentDir={currentDir}
            setFallBackServer={setFallBackServer}
            openFolder={openFolder}
            error={error}
            validateRootFolder={validateRootFolder}
            undo={undo}
            redo={redo}
            canUndo={canUndo}
            canRedo={canRedo}
            reset={reset}
            loading={loading}
            setLoading={setLoading}
            setError={setError}
          /> :
          <div className="IDE_Parent_div">
            <div className="class_06">
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
            <div className="Editor_Container">
              Hello world from react
            </div>
          </div>
      }
    </>
  );
}
