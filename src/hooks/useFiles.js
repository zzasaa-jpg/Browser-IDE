import { useState } from "react";
import { CheckFileSystemAPI } from "../services/filesystem";
import { pickFolder, buildTree, createFolder, createFile } from "../services/browserProvider";
import * as BrowserProvider from "../services/browserProvider.js";
import * as ServerProvider from "../services/serverProvider.js";

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
      const Provider_status = await CheckFileSystemAPI(path);
      if (Provider_status == 49) {
        const result = await BrowserProvider.read_Directories();
        console.log(result);
        if (!result.success) {
          SetError(result.message);
          return;
        }
        setCurrentDir(result.dirPath);
        setFiles(result.tree);
        setFallBackServer(result.fall_back_server)
      } else {
        setFallBackServer(true);
      }
      return true;
    } catch (err) {
      SetError(err.message || "Something went wrong.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const validateRootFolder = async (path) => {
    setLoading(true);
    SetError(null);

    try {
      const result = await ServerProvider.read_Directories(path);

      if (!result.success) {
        SetError(result.message);
        return false;
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
    validateRootFolder,
  };
}