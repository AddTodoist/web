import Link from "next/link";

const Header = () => {
  return (
    <Link
      href="/"
      className="flex-col md:flex-row flex mt-8 mb-6 md:mb-8 md:items-end border-b-2 border-gray-800 pb-6"
    >
      <img
        className="max-md:w-full max-md:h-40 md:h-32 md:mr-8 object-contain hover:scale-110 transition duration-500 ease-in-out"
        src="https://github.com/AddTodoist/AddTodoist/blob/main/assets/square-big.png?raw=true"
        alt="robot"
      />
      <div className="md:-mt-4">
        <h1 className="max-md:text-center text-4xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8 hover:text-red-600 transition duration-200">
          AddTodoist
        </h1>
        <h2 className="text-left text-lg mt-5 hover:text-red-800">
          🤖 A Twitter bot that will help you save tweets and threads to your
          Todoist account
        </h2>
      </div>
    </Link>
  );
};

export default Header;
