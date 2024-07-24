import React from "react";
import Folder from "./Folder";
import { IFileType } from "../../types";
import "../../styles/fileExplorer.css";

interface IFileExplorerProps {
  data: IFileType;
  selectedFile: string | null;
  onFileSelect: (fileName: string) => void;
  onFileAction: (fileName: string, action: string) => void;
}

const FileExplorer: React.FC<IFileExplorerProps> = ({
  data,
  selectedFile,
  onFileSelect,
  onFileAction,
}) => {
  return (
    <div className="file-explorer">
      <Folder
        folder={data}
        selectedFile={selectedFile}
        onFileSelect={onFileSelect}
        onFileAction={onFileAction}
      />
    </div>
  );
};

export default FileExplorer;
