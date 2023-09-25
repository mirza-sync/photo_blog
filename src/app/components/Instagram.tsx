import IgImg1 from "../../../public/insta-img/ig-img-1.jpeg";
import IgImg2 from "../../../public/insta-img/ig-img-2.jpeg";
import IgImg3 from "../../../public/insta-img/ig-img-3.jpeg";
import IgImg4 from "../../../public/insta-img/ig-img-4.jpeg";
import IgImg5 from "../../../public/insta-img/ig-img-5.jpeg";
import IgImg6 from "../../../public/insta-img/ig-img-6.jpeg";
import InstagramImg from "./InstagramImg";

const Instagram = () => {
  return (
    <div>
      <p>Follow me on Instagram</p>
      <p>@Captur</p>
      <div>
        <InstagramImg socialImg={IgImg1} />
      </div>
    </div>
  );
};

export default Instagram;
