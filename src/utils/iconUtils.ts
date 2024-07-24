import folderIcon from "../assets/icons/folder.svg";
import fileJSIcon from "../assets/icons/js-file.svg";
import fileHtmlIcon from "../assets/icons/html-file.svg";
import fileImgIcon from "../assets/icons/img-file.svg";
import fileSvgIcon from "../assets/icons/svg-file.svg";

export const getFileIcon = (fileMeta?: string): string => {
  switch (fileMeta) {
    case "js":
      return fileJSIcon;
    case "html":
      return fileHtmlIcon;
    case "img":
      return fileImgIcon;
    case "svg":
      return fileSvgIcon;
    default:
      return fileImgIcon;
  }
};

export const getFolderIcon = (): string => folderIcon;
