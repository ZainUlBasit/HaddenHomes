function OurJourney() {
  return (
    <div>
      <div className="w-full md:h-screen py-12 md:flex ">
        <div className="  flex items-center justify-center  md:w-1/2  bg-[#717353] h-full">
          <h1 className="text-xl font-montserrat text-white md:w-1/2 px-6 py-4">
            We are a small, well-knit team that works hard and takes immense joy
            in providing superior products for our clients. On every one of our
            projects.
          </h1>
        </div>
        <div className="md:w-1/2 h-full">
          <img src="/ldeas.png" alt="not found" className="w-full h-full" />
        </div>
      </div>
      <div className="flex justify-center pb-4 text-[#444442]">
        <h1 className="text-3xl font-montserrat text-center w-1/2">
          We believe in the power of design and construction as inseparable
          partners – two elements that, when expertly intertwined, breathe life
          into your dreams to create remarkable spaces that exceed expectations.
        </h1>
      </div>
    </div>
  );
}

export default OurJourney;
