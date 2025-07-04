import bee from '../assets/bee.png';

// Header of the website with a mascot, title, and description
const Header = () => {
    return (
        <header className="p-10 pl-10 sm:pl-16 md:pl-24 lg:pl-32">
            <div className="flex items-center gap-3">
                <img src={bee} alt="Bee" className="w-20 h-auto" />
                <h1 className="text-4xl font-bold text-[#795e61]">Algebee</h1>
            </div>
            <p className="text-lg">Practice solving algebra equations!</p>
        </header>
    );
}

export default Header;