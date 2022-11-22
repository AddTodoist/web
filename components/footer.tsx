import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with ❤️ by{" "}
            <Link
              className="underline text-indigo-600 hover:text-indigo-400 hover:no-underline transition-all duration-200"
              href="https://dubis.dev"
            >
              @dubisdev
            </Link>
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link
              href="https://www.buymeacoffee.com/dubisdev"
              className="mx-3 bg-amber-500 hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              ☕ Support the project
            </Link>
            <Link
              href="https://github.com/addtodoist"
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
