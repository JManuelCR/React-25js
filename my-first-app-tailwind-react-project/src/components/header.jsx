function Header() {
  const fontfamilly = "Inter Var";
  const menuOptios = [Guide, Config, Plugins];

  return (
    <>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex gap-2">
          <a
            href="/"
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <img
              className="w-6"
              src="https://vitejs.dev/logo.svg"
              alt="Vite home logo"
            />
            <span className="text-white text-lg">Vite</span>
          </a>
          <div action="submit">
            <input
              type="search"
              placeholder="Search"
              className="rounded px-3 bg-black h-8"
            />
          </div>
        </div>
        <ul className="flex space-x-4 gap-8">
          {menuOptios.map((option) => {
            return (
              <>
                <li>
                  <a
                    href="/"
                    className={`flex items-center space-x-2 text-slate-300 hover:text-[#646cff] font-[${fontfamilly}]`}
                  >
                    <span>`${option}`</span>
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Header;
