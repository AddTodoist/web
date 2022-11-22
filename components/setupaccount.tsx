const SetUpAccount = () => {
  return (
    <>
      <h4
        id="setup"
        className="my-4 max-md:text-center text-xl md:text-3xl font-semibold tracking-tighter leading-tight md:pr-8"
      >
        Set Up The Bot
      </h4>
      <p className="text-lg">
        Before using the bot you must provide access to your Todoist account so
        the tweets can be saved to it.
      </p>
      <p className="text-lg">
        You can do this by sending{" "}
        <code className="inline bg-red-200 rounded shadow-sm px-2">/init</code>{" "}
        by DM to the bot. Then it will answer you with instructions to complete
        this process.
      </p>
      <img
        className="block py-2 justify-center max-md:w-full object-contain h-96"
        src="https://user-images.githubusercontent.com/77246331/186975670-5f9bc272-2d01-4d75-997f-0a61ba1da96a.png"
      />
      <p className="text-lg">
        You'll be redirected to a todoist page where you must grant permissions.
        Then you are done 🚀
      </p>
      <img
        className="mt-2 block py-2 justify-center max-md:w-full object-contain h-24 border-2 border-red-400"
        src="https://user-images.githubusercontent.com/77246331/186975825-3f27146a-73f1-42b3-ae0d-aeca52506b1e.png"
      />
    </>
  );
};

export default SetUpAccount;
