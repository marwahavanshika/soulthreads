const TeamCard = ({ title }) => {
    return (
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-green-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">{title}</span>
        </div>
      </div>
    )
  }
  
  const Team = () => {
    const team = [
      "Vanshika Marwaha", "Hiya Chatterjee", "Asha Jyoti Akula", "Samiksha Kumari", "Aditi Kumar", "Mittapally Varshitha"
    ]
    return (
      <section className="text-gray-600  bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-extrabold text-center  title-font text-[#3f7461] mb-4">Meet Our Team</h1>
            <p className="text-base leading-relaxed text-black xl:w-2/4 lg:w-3/4 mx-auto">Meet our team who have contributed their effort for the Soulthreads.<br />Together we have build this amazing Project.</p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {
              team.map((member) => (
                <TeamCard title={member} key={member} />
              ))
            }
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Team;