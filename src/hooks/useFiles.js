import { useState } from "react";
import { readDirectories } from "../services/filesystem";
import { pickFolder, buildTree, createFolder, createFile } from "../services/browserProvider";

export function useFiles() {
  const [currentDir, setCurrentDir] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const openFolder = async () => {
    setLoading(true);
    try {
      const result = await readDirectories();
      setCurrentDir(result.dirHandle);
      setFiles(result.tree);
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