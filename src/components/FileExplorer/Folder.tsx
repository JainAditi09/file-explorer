import React, { useState } from "react";
import { IFileType } from "../../types";
import File from "./File";
import { getFolderIcon } from "../../utils/iconUtils";
import "../../styles/fileExplorer.css";

interface IFolderProps {
  folder: IFileType;
  selectedFile: string | null;
  onFileSelect: (fileName: string) => void;
  onFileAction: (fileName: string, action: string) => void;
}

const Folder: React.FC<IFolderProps> = ({
  folder,
  selectedFile,
  onFileSelect,
  onFileAction,
}) => {
  const [isExpanded, setExpanded] = useState(false); // state used to manage which folder is expanded or not

  // Function to toggle the folder expansion state
  const toggleExpand = () => setExpanded(!isExpanded);

  const folderIcon = getFolderIcon();
  return (
    <div className="folder">
      <div className="folder-name" onClick={toggleExpand}>
        <img src={folderIcon} className="file-folder-icon" alt="📁" />{" "}
        {folder.name}
      </div>
      {isExpanded && (
        <div className="folder-content">
          {folder.data?.map((item, index) =>
            item.type === "folder" ? (
              <Folder
                key={index}
                folder={item}
                selectedFile={selectedFile}
                onFileSelect={onFileSelect}
                onFileAction={onFileAction}
              />
            ) : (
              <File
                key={index}
                file={item}
                selectedFile={selectedFile}
                onFileSelect={onFileSelect}
                onFileAction={onFileAction}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
