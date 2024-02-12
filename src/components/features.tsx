import Image from "next/image";

function Features() {
  return (
    <section className="bg-gray-100 p-8">
      <ul className="grid lg:grid-cols-3 bg-background gap-4 rounded container">
        <li className="space-y-4 py-4 text-center lg:text-left">
          <Image
            src="/images/features/engaging-games.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3>Engaging Games</h3>
          <p className="leading-6 font-light text-gray-400 max-w-sm">
            Kids play engaging, interactive games that are geared toward
            different subjects, making learning fun and efficient
          </p>
        </li>

        <li className="space-y-4 py-4 text-center lg:text-left">
          <Image
            src="/images/features/practice-sheets.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3>Practice Sheets</h3>
          <p className="leading-6 font-light text-gray-400 max-w-sm">
            Practice sheets are customized based on a child&apos;s learning
            progress, focusing on specific skills and concepts that may require
            additional reinforcement.
          </p>
        </li>

        <li className="space-y-4 py-4 text-center lg:text-left">
          <Image
            src="/images/features/bedtime-stories.png"
            alt=""
            width={50}
            height={50}
            className="mx-auto lg:mx-0"
          />
          <h3>Bedtime Stories </h3>
          <p className="leading-6 font-light text-gray-400 max-w-sm">
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
