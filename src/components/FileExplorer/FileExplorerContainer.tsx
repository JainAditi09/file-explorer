import React, { useState } from "react";
import { IFileType } from "../../types";
import filesData from "../../utils/filesData";
import FileExplorer from "./FileExplorer";
import "../../styles/fileExplorer.css";

const FileExplorerContainer: React.FC = () => {
  const [data, setData] = useState<IFileType>(filesData);
  const [selectedFile, setSelectedFile] = useState<string | null>(null); // state used for storing the selected file

  // Function to handle file selection
  const handleFileSelect = (fileName: string) => {
    setSelectedFile(fileName);
  };

  // Function to handle file actions on right click (copy, delete and rename)
  const handleFileAction = (fileName: string, action: string) => {
    alert(`${action} ${fileName}`);
    console.log(`${action} ${fileName}`);
  };

  return (
    <FileExplorer
      data={data}
      selectedFile={selectedFile}
      onFileSelect={handleFileSelect}
      onFileAction={handleFileAction}
    />
  );
};

export default FileExplorerContainer;
