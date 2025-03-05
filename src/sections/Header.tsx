import LogoIcon from '@/assets/logo-black.svg';
import MenuIcon from '@/assets/menu-icon.svg';


export const Header = () => {
    return (
    <header className="py-4">
        <div className="container">
            <div className="flex justify-between">
                <div>
                    <LogoIcon className="h-8 w-8"/>
                    <div className="flex gap-4 items-center">
                        <button>Join waitlist</button>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
};