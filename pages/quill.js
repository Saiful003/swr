import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function Quill() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }], // custom dropdown
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto pt-5">
        <ReactQuill
          placeholder="Enter your friend Name"
          modules={modules}
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
    </>
  );
}

export default Quill;
