import Link from "next/link";
import SetUpAccount from "./setupaccount";

const Installation = () => {
  return (
    <section
      id="usage"
      className="mb-8 md:mb-6 border-b-2 border-gray-800 pb-6"
    >
      <h3 className="max-md:text-center text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
        Usage Instructions
      </h3>
      <ol className="pl-8 mt-4 leading-8 text-lg">
        <li className="list-decimal">Sign up to your Twitter account</li>
        <li className="list-decimal">
          Search for{" "}
          <Link
            href="https://twitter.com/AddTodoist"
            className="text-red-500 font-bold hover:text-red-400"
          >
            @AddTodoist Twitter account
          </Link>
        </li>
        <li className="list-decimal">
          (Optional) Follow the account to get notified about the bot updates
          (is free and helps a lot 🚀)
        </li>
        <li className="list-decimal">
          <Link
            href="#setup"
            className="text-red-500 font-bold hover:text-red-400"
          >
            Set up
          </Link>{" "}
          your account (Just the first time)
        </li>
        <li className="list-decimal">
          Start saving tweets by sending them to the bot by DM
        </li>
      </ol>
      <SetUpAccount />
    </section>
  );
};

export default Installation;
