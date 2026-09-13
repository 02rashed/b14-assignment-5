import Ban from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-4 container mx-auto">
      <div>
        <div text-5xl font-bold mb-4>
          <p className="text-[#0f172a]">Build Your Ideal</p>
          <p className="text-6xl font-bold">Developement Stack</p>
        </div>
          <p>
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
            </p>
        <div>
            <button className="btn btn-primary bg-linear-to-r from-red-500 to-blue-500 border-none">Explore Technologies</button>
            <button className="btn btn-outline">Learn More</button>   
        </div>
      </div>
      <img src={Ban} alt="Banner" className="w-full h-auto" />
    </div>
  );
};

export default Banner;
