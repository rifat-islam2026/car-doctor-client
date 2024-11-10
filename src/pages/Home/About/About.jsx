import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

function About() {
  return (
    <div className="py-7">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg" />
            <img src={parts} className="w-1/2 absolute rounded-lg right-10 top-1/2 border-8" />
          </div>
                  <div className='space-y-5 lg:w-1/2'>
                      <h3 className='text-xl font-bold text-orange-500'>About us</h3>
                      <h1>We are qualified & of experience <br /> in this field</h1>
                      <p className="text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                      <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                      <button className='btn btn-warning font-semibold'>Get more info</button>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default About;
