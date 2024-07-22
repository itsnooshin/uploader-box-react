import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import ErrorMessage from "./components/ErrorMessage";
import UploaderInputBox from "./components/UploaderInputBox";
import UploaderDetail from "./components/UploaderDetail";
import UploadIcon from "../src/components/uploadIcon";
import axios from "axios";
interface Image {
  id: number;
  url: string;
  name: string;
  size: number;
  progress: number;
  total: number | undefined;
  load: number;
}

function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handledrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  // const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const imageF = e.dataTransfer.files;
  //   if (imageF) {
  //     Array.from(imageF).forEach((item, index) => {
  //       const fileUrl = URL.createObjectURL(item);

  //       if (item.size > 2 * 1024 * 1024) {
  //         setErrorMessage("The files must be less than 2MB");
  //         return;
  //       } else {
  //         const newImage = {
  //           id: Date.now() + index,
  //           name: item.name,
  //           url: fileUrl,
  //           size: item.size,
  //         };
  //         const exist = images.some((img) => img.name === item.name);
  //         if (exist) {
  //           setErrorMessage("Image already exist");
  //         } else {
  //           setImages((prevImages) => [...prevImages, newImage]);
  //           setErrorMessage("");
  //         }
  //       }
  //     });
  //   }
  // };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target?.files;
    if (imageFile) {
      Array.from(imageFile).forEach((item, index) => {
        const fileUrl = URL.createObjectURL(item);

        if (item.size > 2 * 1024 * 1024) {
          setErrorMessage("The files must be less than 2MB");
          return null;
        }
        // Check if the file already exists
        const exist = images.some((img) => img.name === item.name);
        const newItem = {
          id: Date.now() + index,
          url: fileUrl,
          name: item.name,
          size: Number((item.size / 1024 / 1024).toFixed(2)),
          progress: 0,
          total: 0,
          load: 0,
        };
        if (exist) {
          setErrorMessage("A file with the same name already exists!");
        } else if (!exist) {
          setImages((prevImages) => [...prevImages, newItem]);
          setErrorMessage("");
        }
        uploadFiles(item, newItem);
      });
    }

    e.target.value = "";
  };

  const uploadFiles = (file: File, image: Image) => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentCompleted = Math.round(
            (loaded * 100) / (total as number)
          );
          const loadEl = Math.round(loaded / 1024);
          const totalEl = Math.round((total as number) / 1024);

          updateImageProgress(image.id, percentCompleted, loadEl, totalEl);
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setErrorMessage(`${error}`);
      });
  };

  const updateImageProgress = (
    id: number,
    progress: number,
    load: number,
    totalEl: number
  ) => {
    setImages((prevImage) =>
      prevImage.map((img) =>
        img.id === id
          ? { ...img, progress: progress, load: load, total: totalEl }
          : img
      )
    );
  };

  return (
    <>
      <div className="  flex items-center justify-center flex-col w-screen h-screen">
        <div className="flex items-center flex-col justify-center w-screen mb-7 ">
          <ErrorMessage message={errorMessage} />

          <div className="w-96 bg-white p-4 drop-shadow-xl rounded-xl">
            <UploaderInputBox onChange={handleChangeInput} />

            <UploaderDetail images={images} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
