import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface MenuItem {
  title: string;
  link: string;
}

const MenuList: MenuItem[] = [
  { title: "Map", link: "/map" },
  { title: "Mint", link: "/mint" },
  { title: "Oasis", link: "/oasis" },
  { title: "Shop", link: "/" },
];

const PageMenu: React.FC = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative w-16 h-16" ref={menuRef}>
      <button
        className={`${
          showMenu ? "bg-menu-btn-bg-hover" : "bg-menu-btn-bg"
        } hover:bg-menu-btn-bg-hover bg-contain bg-no-repeat rounded-md w-full h-full`}
        onClick={handleClick}
      ></button>
      {showMenu && (
        <div
          className="bg-color-1 bg-page-menu-bg w-60 h-72 px-10 py-6 text-lg lg:text-xl rounded-xl absolute top-[100%]"
          style={{ backgroundSize: "100% 100%" }}
        >
          {MenuList.map((item: MenuItem, idx: number) => (
            <p key={"menuBar" + idx}>
              <Link to={item.link} className="text-color-2 hover:text-color-3">
                {item.title}
              </Link>
            </p>
          ))}
          <p>
            <span
              className="text-color-2 hover:text-color-3"
              onClick={() => window.open("https://docs.tombsoffortune.com/")}
            >
              Wiki
            </span>
          </p>
          <p className="absolute bottom-10">
            <Link to="/mummycity" className="text-color-4 hover:text-color-5">
              Switch Side
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default PageMenu;
