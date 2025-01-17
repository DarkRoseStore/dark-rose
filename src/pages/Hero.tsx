import Background from '../assets/images/background_hero.jpg';

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center w-full h-[80vh] relative"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="absolute top-10 left-5 text-white">
        <p className="text-lg">+55 12 3456-7890</p>
        <h1 className="text-4xl font-bold uppercase mt-2">Dark Rose</h1>
        <div className="h-0.5 bg-white mt-2 w-full"></div>
      </div>
    </div>
  );
};

export default Hero;
