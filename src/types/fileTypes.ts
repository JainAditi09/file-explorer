export interface IFileType {
  type: "file" | "folder";
  name: string;
  meta?: string;
  data?: IFileType[];
}
