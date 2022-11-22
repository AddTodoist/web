import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="mb-8 md:mb-6 border-b-2 border-gray-800 pb-6"
    >
      <h3 className="max-md:text-center text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 mb-4">
        About the project
      </h3>
      <p>
        🚀 This bot is deployed in{" "}
        <Link
          className="text-red-500 font-bold hover:text-red-400"
          href="https://qoddi.com"
        >
          Qoddi
        </Link>{" "}
        and uses a MongoDB database stored in{" "}
        <Link
          className="text-red-500 font-bold hover:text-red-400"
          href="https://www.mongodb.com/es/atlas/database"
        >
          MongoDB Atlas
        </Link>{" "}
      </p>
      <p>
        🔏 All the user's data is encrypted before being saved to the DB using
        hashing algorithms and is never shared with third parts.
      </p>
      {/* a div with two images one next to each other */}
      <div className="flex flex-col md:flex-row w-full gap-10 justify-center mt-6">
        <img
          className="max-md:w-full w-1/2 object-contain shadow-sm shadow-slate-300 rounded-sm hover:scale-105 transition duration-300 ease-in-out"
          src="https://user-images.githubusercontent.com/77246331/186970413-006dcf54-66fc-4e77-aa05-3773707dbacb.png"
          alt="robot"
        />
        <img
          className="max-md:w-full w-1/2 object-contain shadow-sm shadow-slate-300 rounded-sm hover:scale-105 transition duration-300 ease-in-out"
          src="https://user-images.githubusercontent.com/77246331/186971152-9a312391-a751-4d72-b306-0e54d32c0bcb.png"
          alt="robot"
        />
      </div>
    </section>
  );
};

export default About;
