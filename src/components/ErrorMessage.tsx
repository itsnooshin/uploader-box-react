import { PropsWithChildren } from "react";
import { MdOutlineWarning } from "react-icons/md";
interface Props {
  message: string;
}

export default function ErrorMessage(props: PropsWithChildren<Props>) {
  const { message } = props;
  return (
    <>
      {message && (
        <div className="w-96 border-red-300 mb-2 bg-[#FBEFEB] p-3 border-2 rounded-[8px] text-[#FC5758] flex gap-2">
          <MdOutlineWarning color="red" size={"20px"} />
          <p className="text-[0.9rem]">{message}</p>
        </div>
      )}
    </>
  );
}
