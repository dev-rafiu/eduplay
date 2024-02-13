function Subscription() {
  return (
    <section className="grid lg:grid-cols-2 container bg-violet gap-8 lg:items-center py-8">
      <div className="space-y-2 text-background">
        <h3>Newsletter</h3>
        <p className="max-w-xl">
          Spark joy in learning 🌟 Join our newsletter to get the latest games,
          practice sheets, and bedtime stories. 🚀
        </p>
      </div>

      <form className="grid lg:grid-cols-[1fr,_auto] gap-4 lg:gap-0 font-[600]">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 border bg-background/70 lg:border-r-0 rounded lg:rounded-r-none placeholder:text-foreground/60"
        />
        <button
          className="bg-background p-3 rounded lg:rounded-l-none"
          type="button"
        >
          🚀 Subscribe
        </button>
      </form>
    </section>
  );
}

export default Subscription;
