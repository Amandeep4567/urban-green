export default function Home() {
  return (
    <section className="">
      <div className="bg-[url('/assets/Home.jpg')] h-[440px] bg-no-repeat bg-cover bg-center">
        <div className="to-bg-black-70 inset-0 h-full w-full bg-gradient-to-t from-black/80 via-purple/50 rounded-xl">
          <div className="flex flex-col items-center text-center mx-10 pt-28">
            <p className="text-[#ffffff] text-5xl font-semibold pb-10">
              Team up with Pentadots to stand out yourself from <br />{" "}
              competitors with innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
