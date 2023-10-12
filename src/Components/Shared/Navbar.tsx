import { SiShowtime } from "react-icons/si";
import { BsFillBookmarkPlusFill, BsCheckAll } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black relative min-w-full m-10">
      <div className="fixed top-0 right-0  min-w-full z-50">
        <div className="flex items-center justify-between gap-10 bg-black py-4 px-8">
          <div>
            <Link to="/">
              <SiShowtime className="text-yellow-600 w-10 h-10" />
            </Link>
          </div>
          <div className="flex items-center gap-x-10">
            <div>
              <Link to="/watchlist">
                <div className="flex items-center gap-x-2">
                  <BsFillBookmarkPlusFill className="text-white w-5 h-5 " />
                  <p className="font-semibold text-white">Watchlist</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/watchinglists">
                <div className="flex items-center">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                  </span>
                  <p className="font-semibold text-white pl-2">Watchinglist</p>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/watchedlists">
                <div className="flex items-center">
                  <BsCheckAll className="text-green-500 w-8 h-8" />
                  <p className="font-semibold text-white pl-2">WatchedList</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
