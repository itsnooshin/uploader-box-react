import { PropsWithChildren } from "react";
import { MdDeleteOutline } from "react-icons/md";
// import Image from "../types/ImageType";

interface Image {
  id: number;
  url: string;
  name: string;
  size: number;
  progress: number;
  total: number | undefined;
  load: number;
}
interface Props {
  images: Image[];
}

export default function UploaderDetail(props: PropsWithChildren<Props>) {
  const { images } = props;
  return (
    <>
      <div
        className={`${images.length > 2 ? "overflow-y-auto" : ""} ${
          images.length > 2 ? "h-44" : ""
        } `}
      >
        {images &&
          images.map((item) => (
            <div
              key={item.id}
              className="  mt-3 bg-white rounded-xl drop-shadow-xl px-3 flex  flex-col  border py-3 "
            >
              <div className="flex gap-2 justify-between items-center ">
                <div className="flex gap-3">
                  <img
                    draggable="true"
                    src={item.url}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                  <div className=" flex flex-col">
                    <div className="flex flex-col">
                      <p>
                        {images.length > 7
                          ? "item.jpg"
                          : `${item.name
                              .split("")
                              .slice(0, 6)
                              .join("")}${item.name.slice(-4)}`}
                      </p>
                      <div className="flex gap-2 items-center">
                        <p className="text-[0.8rem]">
                          {item.load} KB of {item.total} KB
                        </p>
                        <p className="text-[0.8rem]">
                          {item.progress < 100 ? "Uploading" : "Completed"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {item.progress === 100 ? (
                  <p>
                    {" "}
                    <MdDeleteOutline size={"20px"} color="grey" />
                  </p>
                ) : (
                  <p>{item.progress}%</p>
                )}
              </div>
              {item.progress === 100 ? (
                <p></p>
              ) : (
                <div className=" bg-gray-200 h-2 rounded-full w-full mt-2">
                  <div
                    className={`bg-slate-400   h-full rounded-full`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
