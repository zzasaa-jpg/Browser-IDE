import { useState } from "react";
import { pickFolder, buildTree, createFolder, createFile } from "../services/filesystem";

export function useFiles() {
  const [currentDir, setCurrentDir] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const openFolder = async () => {
    setLoading(true);
    try {
      const dir = await pickFolder();
      setCurrentDir(dir);
      const fileList = await buildTree(dir);
      setFiles(fileList);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    files,
    currentDir,
    openFolder,
    loading,
    createFolder,
    createFile,
    buildTree,
    setFiles,
  };
}