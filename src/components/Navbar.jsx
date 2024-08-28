const Navbar = () => {
    return (
        <>
        <header className="bg-gray-800 text-white p-4 flex justify-center" >
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Portofolio Saya</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:underline">Tentang</a></li>
                <li><a href="#projects" className="hover:underline">Proyek</a></li>
                <li><a href="#contact" className="hover:underline">Kontak</a></li>
              </ul>
            </nav>
          </div>
        </header>
        </>
    );
}
export default Navbar;
    
