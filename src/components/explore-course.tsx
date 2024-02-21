import Image from "next/image";

function ExploreCourse() {
  return (
    <section className="explore-course py-6 border">
      <div className="container flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-8">
        {/* section info */}
        <div className="space-y-4 text-background">
          <h2 className="max-w-md">
            Explore exciting subjects, & play your way to brilliance
          </h2>
          <p className="max-w-lg leading-6">
            Why settle for ordinary when you can explore the extraordinary? Join
            us and discover why EduPlay is not just the best – it&apos;s the
            magical key to unlocking creativity for your kids.
          </p>
          <button className="bg-background text-foreground p-2 rounded font-semibold text-sm w-full lg:w-max">
            🎓 Explore our subjects
          </button>
        </div>

        {/* section image */}
        <div className="w-full max-w-[30rem] h-[25rem] relative">
          <Image
            src="/images/explore-course/explore-img.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default ExploreCourse;
