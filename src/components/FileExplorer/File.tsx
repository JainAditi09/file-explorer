import React, { useEffect, useState } from "react";
import { IFileType } from "../../types";
import { getFileIcon } from "../../utils/iconUtils";

interface IFileProps {
  file: IFileType;
  selectedFile: string | null;
  onFileSelect: (fileName: string) => void;
  onFileAction: (fileName: string, action: string) => void;
}

const File: React.FC<IFileProps> = ({
  file,
  selectedFile,
  onFileSelect,
  onFileAction,
}) => {
  const [contextMenu, setContextMenu] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const handleClick = () => onFileSelect(file.name);

  // Function to handle right-click (context menu) on the file
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({ x: event.pageX, y: event.pageY });
  };

  const handleAction = (action: string) => {
    onFileAction(file.name, action);
    setContextMenu(null);
  };

  // handleClickOutside effect is added to close the context menu outside of it
  useEffect(() => {
    const handleClickOutside = () => {
      setContextMenu(null);
    };

    document.removeEventListener("click", handleClickOutside);

    // cleanup event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [contextMenu]);

  const fileIcon = getFileIcon(file.meta);

  return (
    <div
      className={`file ${selectedFile === file.name ? "selected" : ""}`}
      onClick={handleClick}
      onContextMenu={handleContextMenu}>
      <img src={fileIcon} alt={file.meta} className="file-folder-icon" />{" "}
      {file.name}
      {contextMenu && (
        <div
          className="context-menu"
          style={{ top: contextMenu.y, left: contextMenu.x }}>
          <div onClick={() => handleAction("Copy")}>Copy</div>
          <div onClick={() => handleAction("Delete")}>Delete</div>
          <div onClick={() => handleAction("Rename")}>Rename</div>
        </div>
      )}
    </div>
  );
};

export default File;
