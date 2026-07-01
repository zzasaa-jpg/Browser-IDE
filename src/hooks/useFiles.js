import { useState } from "react";
import { readDirectories } from "../services/filesystem";
import { pickFolder, buildTree, createFolder, createFile } from "../services/browserProvider";

export function useFiles() {
  const [currentDir, setCurrentDir] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fallBackServer, setFallBackServer] = useState(false);
  const [error, SetError] = useState(null);

  const openFolder = async (path = currentDir) => {
    setLoading(true);
    SetError(null)
    try {
      const result = await readDirectories(path);
      console.log(result);
      if (!result.success) {
        SetError(result.message);
        return;
      }
      setCurrentDir(result.dirPath);
      setFiles(result.tree);
      setFallBackServer(result.fall_back_server)
      return true;
    } catch (err) {
      SetError(err.message || "Something went wrong.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    files,
    currentDir,
    setCurrentDir,
    openFolder,
    loading,
    createFolder,
    createFile,
    buildTree,
    setFiles,
    fallBackServer,
    setFallBackServer,
    error,
  };
}