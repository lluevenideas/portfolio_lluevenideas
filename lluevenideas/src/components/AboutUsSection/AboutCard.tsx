import { IAbout } from "@/utils/interfaces";
import Image from "next/image";
import "@/app/globals.css";

const AboutCard = ({ itemData }: { itemData: IAbout }) => {
  const { title, description, bg, style, mb } = itemData;

  return (
    <div className="flex flex-col items-center text-center w-[30vw]  content-center">
      <div
        className={`${style} relative w-72 h-96 border-[8px] border-blue-500  overflow-hidden flex items-end justify-center`}
      >
        <Image src={bg} layout="fill" objectFit="cover" alt={title} />
        <p
          className={`${mb} absolute font-extrabold text-3xl m-6 text-right w-60`}
        >
          {title}
        </p>
      </div>
      <p className="mt-3 font-bold text-sm w-52 h-20">{description}</p>
    </div>
  );
};

export default AboutCard;
