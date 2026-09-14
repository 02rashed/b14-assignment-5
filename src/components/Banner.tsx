import Ban from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-4 container mx-auto px-25">
      <div className="container mx-auto">
        <div className="text-6xl font-bold">
          <p className="text-[#0f172a]">Build Your Ideal</p>
          <p className="bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Developement Stack</p>
        </div>
          <p className="text-[#475569] mt-4 mb-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
            </p>
        <div className="flex gap-4">
            <button className="btn btn-primary bg-linear-to-r from-red-500 to-blue-500 border-none">Explore Technologies</button>
            <button className="btn btn-outline">Learn More</button>   
        </div>
      </div>
      <img src={Ban} alt="Banner" className="w-150 h-150" />
    </div>
  );
};

export default Banner;
