//   // const hanldeFileChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //   const imageFile = e.target.files;

//   //   if (imageFile) {
//   //     console.log("kkk", imageFile);
//   //     Array.from(imageFile).forEach((item) => {
//   //       if (item.size > 2e6) {
//   //         setErrorMessage("Please upload a file smaller than 2 MB");
//   //         return;
//   //       } else {
//   //         setErrorMessage("");
//   //       }
//   //       const reader = new FileReader();
//   //       reader.addEventListener("load", (e) => {
//   //         const result = e.target?.result;
//   //         const exist = images?.some((img) => img.name === item.name);
//   //         console.log("File read complete:", result); // Debugging output
//   //         if (typeof result === "string" && !exist) {
//   //           const items = {
//   //             id: nextId.current++,
//   //             name: item.name,
//   //             url: result,
//   //             size: item.size,
//   //           };
//   //           setImages((previw) => [...previw, items]);
//   //         } else if (exist) {
//   //           alert("gggg");
//   //         }
//   //       });

//   //       reader.readAsDataURL(item);
//   //     });
//   //   }
//   // };

//   const hanldeRemove = (id: number) => {
//     setImages(images.filter((item) => item.id !== id));
//     if (FileRef.current) {
//       // FileRef.current.value = "";
//     }
//   };

//   return (
//     <>
//       {/* <div className="  flex items-center justify-center flex-col w-screen h-screen">
//         <div className="flex items-center flex-col justify-center w-screen mb-7 ">
//           {errorMessage && (
//             <div className="w-96 border-red-300 mb-2 bg-[#FBEFEB] p-3 border-2 rounded-[8px] text-[#FC5758] flex gap-2">
//               <MdOutlineWarning color="red" size={"20px"} />
//               <p className="text-[0.9rem]">{errorMessage}</p>
//             </div>
//           )}

//           <div className="w-96 bg-white p-4 drop-shadow-xl rounded-xl">
//             <label
//               htmlFor="uploader-image"
//               className=" cursor-pointer bg-white p-4 border-2 flex-col border-dashed flex items-center justify-center rounded-xl  "
//             >
//               <input
//                 type="file"
//                 id="uploader-image"
//                 className="hidden md:none"
//                 // onChange={hanldeFileChnage}
//               />
//               <div className="bg-slate-100 rounded-full p-4 mt-4 ">
//                 <UploadIcon
//                   className="w-6 h-6 text-black-500"
//                   strokeWidth={1.3}
//                 />
//               </div>
//               <button className="mt-5 text-[0.9rem] ">
//                 Choose a file or drag & drop it here
//               </button>
//               <p className=" text-gray-400 text-[0.9rem]">
//                 JPEG, PNG, PDG, formats, up to 2MB
//               </p>
//               <button className="text-[#54575C] rounded-[9px] border-[#CBD0DC]  border  p-1 px-4 mb-2 mt-5 text-[0.9rem] ">
//                 Browse File
//               </button>
//             </label>
//             <div
//               className={`${images.length > 2 ? "overflow-y-auto" : ""} ${
//                 images.length > 2 ? "h-44" : ""
//               } `}
//             >
//               {images &&
//                 images.map((item) => (
//                   <div
//                     key={item.id}
//                     className="  mt-3 bg-white rounded-xl drop-shadow-xl px-3 flex gap-3 flex-col  border py-3 "
//                   >
//                     <div className="flex gap-2 justify-between items-center ">
//                       <div className="flex gap-3">
//                         <img
//                           src={item.url}
//                           style={{
//                             width: "50px",
//                             height: "50px",
//                             objectFit: "cover",
//                             borderRadius: "6px",
//                           }}
//                         />
//                         <div className="flex flex-col">
//                           {/* <p>{item.name.slice(0, 6).split(" ").join(" ")}</p> */}
//                           {/* <p>
//                             {images.length > 6
//                               ? "item.jpg"
//                               : `${item.name.slice(0, 6)}...${item.name.slice(
//                                   -4
//                                 )}`}
//                           </p>
//                           <div className=" bg-gray-200 h-2 rounded-full w-[230px] mt-2"></div>
                          
//                         </div>
//                       </div>
//                       <button onClick={() => hanldeRemove(item.id)}>
//                         <MdDeleteOutline size={"23px"} color="#808080" />
//                       </button>
//                     </div>
//       //             </div> */}
//       {/* //           ))}
//       //       </div> */}
//       //     </div>
//       //   </div>
//       // </div> */}
//     </>