import { ThemeToggle } from './ui/ThemeToggle';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full px-4 py-2 flex items-center justify-between place-self-center max-w-screen">
      {/* Screen size indicators */}
      <div className="z-50 flex size-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white">
        <div className="block sm:hidden">xs</div>
        <div className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">
          sm
        </div>
        <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">md</div>
        <div className="hidden lg:block xl:hidden 2xl:hidden">lg</div>
        <div className="hidden xl:block 2xl:hidden">xl</div>
        <div className="hidden 2xl:block">2xl</div>
      </div>
      <ThemeToggle />
    </footer>
  );
}

export default Footer;
