import React from "react";


const Team = () => {
  return (<section id="team" className="team py-16 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="sec-title text-center mb-70">
      <h4 className="text-2xl font-semibold text-gray-800">Creator</h4>
    </div>

    <div className="team__wrap flex justify-center">
      <div className="team__item flex flex-col md:flex-row  shadow-lg rounded-lg overflow-hidden max-w-4xl">
        
        {/* Image */}
        <div className="avatar flex-shrink-0 w-full md:w-1/3">
          <img
            src="assets/img/team/img_02.png"
            alt="Creator"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="p-6 flex flex- justify-center w-full md:w-2/3">
          <p className="text-gray-700 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magnam dolorem nobis aliquam doloribus harum inventore. Sint rem vitae nesciunt!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Team;
