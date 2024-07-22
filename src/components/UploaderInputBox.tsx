import React, { PropsWithChildren } from "react";
import UploadIcon from "./uploadIcon";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
}

export default function UploaderInputBox(props: PropsWithChildren<Props>) {
  const { onChange } = props;
  return (
    <>
      <label
        htmlFor="uploader-image"
        className=" cursor-pointer bg-white p-4 border-2 flex-col border-dashed flex items-center justify-center rounded-xl  "
      >
        <input
          type="file"
          accept="image/*"
          multiple
          id="uploader-image"
          className="hidden md:none"
          onChange={onChange}
        />
        <div className="bg-slate-100 rounded-full p-4 mt-4 ">
          <UploadIcon className="w-6 h-6 text-black-500" strokeWidth={1.3} />
        </div>
        <button className="mt-5 text-[0.9rem] ">
          Choose a file or drag & drop it here
        </button>

        <p className=" text-gray-400 text-[0.9rem]">
          JPEG, PNG, PDG, formats, up to 2MB
        </p>
        <button className="text-[#54575C] rounded-[9px] border-[#CBD0DC]  border  p-1 px-4 mb-2 mt-5 text-[0.9rem] ">
          Browse File
        </button>
      </label>
    </>
  );
}
