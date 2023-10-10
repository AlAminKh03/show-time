import { SiShowtime } from "react-icons/si";
import { BsFillBookmarkPlusFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-black relative min-w-full m-10">
      <div className="fixed top-0 right-0  min-w-full z-50">
        <div className="flex items-center justify-between gap-10 bg-black py-4 px-8">
          <div>
            <SiShowtime className="text-yellow-600 w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center">
              <BsFillBookmarkPlusFill className="text-white w-5 h-5 " />
              <p className="font-semibold text-white">Watchlist</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
