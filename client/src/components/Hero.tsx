import hero from './../assets/images/hero-img.png';

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        alt='food-app-hero'
        className='w-full max-h-[500px] object-cover'
      />
    </div>
  );
};

export default Hero;
