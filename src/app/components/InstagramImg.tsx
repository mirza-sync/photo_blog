import Image, { StaticImageData } from "next/image";
import { FaInstagram } from "react-icons/fa";

type InstagramImgProps = {
  socialImg: StaticImageData;
};

const InstagramImg = ({ socialImg }: InstagramImgProps) => {
  return (
    <div className="relative">
      <Image
        src={socialImg}
        alt=""
        className="h-full w-full"
        // layout="responsive"
      />
      <div className="group absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center hover:bg-black/50">
        <span className="hidden group-hover:block">
          <FaInstagram size={30} />
        </span>
      </div>
    </div>
  );
};

export default InstagramImg;
