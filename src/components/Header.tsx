
function Header() {

  return (
    <header>
      <div className="px-4 py-4">
        <div className="flex justify-between items-center fixed z-50 bg-background/50 w-full">
          <h1 className="text-xl md:text-2xl font-bold">My Portfolio</h1>
          
          {/* Navigation menu */}
          <nav className="flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-300 px-2 py-1">About</a>
            <a href="#skills" className="hover:text-gray-300 px-2 py-1">Skills</a>
            <a href="#archiving" className="hover:text-gray-300 px-2 py-1">Archiving</a>
            <a href="#projects" className="hover:text-gray-300 px-2 py-1">Projects</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
