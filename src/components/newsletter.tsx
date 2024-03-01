function Newsletter() {
  return (
    <section className=" bg-violet py-10">
      <div className="container grid lg:grid-cols-2 gap-8 lg:items-center">
        <div className="space-y-2 text-background">
          <h3>Newsletter</h3>
          <p className="max-w-xl leading-6">
            Spark joy in learning 🌟 Join our newsletter to get the latest
            games, practice sheets, and bedtime stories. 🚀
          </p>
        </div>

        <form className="grid lg:grid-cols-[1fr,_auto] gap-4 lg:gap-0 font-[600]">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border bg-background/70 lg:border-r-0 rounded lg:rounded-r-none placeholder:text-foreground/60"
          />
          <button
            className="p-3 bg-background rounded lg:rounded-l-none"
            type="button"
          >
            🚀 Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
