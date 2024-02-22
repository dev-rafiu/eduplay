import Image from "next/image";

function Features() {
  return (
    <section className="px-8 py-10 bg-[hsl(240,33%,98%)]">
      <ul className="grid lg:grid-cols-3 bg-background gap-4 rounded container">
        <li className="space-y-2 py-6 text-center lg:text-left">
          <Image
            src="/images/features/engaging-games.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3 className="text-lg">Engaging Games</h3>
          <p className="leading-6 font-normal text-gray-400 max-w-md mx-auto">
            Kids play engaging, interactive games that are geared toward
            different subjects, making learning fun and efficient
          </p>
        </li>

        <li className="space-y-2 py-6 text-center lg:text-left">
          <Image
            src="/images/features/practice-sheets.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3 className="text-lg">Practice Sheets</h3>
          <p className="leading-6 font-normal text-gray-400 max-w-md mx-auto">
            Practice sheets are customized based on a child&apos;s learning
            progress, focusing on specific skills and concepts that may require
            additional reinforcement.
          </p>
        </li>

        <li className="space-y-2 py-6 text-center lg:text-left">
          <Image
            src="/images/features/bedtime-stories.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3 className="text-lg">Bedtime Stories </h3>
          <p className="leading-6 font-normal text-gray-400 max-w-md mx-auto">
            Children actively participate in the storytelling process, making
            bedtime an engaging and collaborative experience for both parents
            and kids.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Features;
