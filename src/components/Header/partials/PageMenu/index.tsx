import { useState, useEffect, useRef } from "react";

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
    setShowMenu(!showMenu);
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
    <div>
      <button
        className={`${
          showMenu ? "bg-menu-btn-bg-hover" : "bg-menu-btn-bg"
        } hover:bg-menu-btn-bg-hover bg-contain bg-no-repeat rounded-md w-16 h-16`}
        onClick={handleClick}
      ></button>
      {showMenu && (
        <div
          className="bg-color-1 bg-page-menu-bg w-60 h-72 px-10 py-6 text-2xl rounded-xl"
          style={{ backgroundSize: "100% 100%" }}
          ref={menuRef}
        >
          {MenuList.map((item: MenuItem, idx: number) => (
            <p key={"menuBar" + idx}>
              <a href={item.link} className="text-color-2 hover:text-color-3">
                {item.title}
              </a>
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
            <a href="/mummycity" className="text-color-4 hover:text-color-5">
              Switch Side
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default PageMenu;
