import FileItem from "./FileItem";
import "./FileLists.css";

export default function FileList({ files }) {
  return (
    <div className="Node_box">
      {files.map((file, i) => (
        <FileItem key={i} file={file} />
      ))}
    </div>
  );
}
