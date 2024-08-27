import deliveryImg from './../assets/images/food-delivery.png';
import downloadImg from './../assets/images/download-app.png';
// import donwloadPlay from './../assets/images/download-play.png';

const HomePage = () => {
  return (
    <div className='flex flex-col gap-12'>
      <div className='md:px-32 bg-white rounded-lg shadow-md flex py-8 flex-col gap-5 text-center -mt-16'>
        <h1 className='text-5xl font-bold tracking-tight text-red-500'>
          Discover the best food & drinks now.
        </h1>

        <span className='text-xl'>Food is just a click away!</span>
      </div>

      <div className='grid md:grid-cols-2'>
        <img src={deliveryImg} alt='Food delivery' className='w-full h-full' />

        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='text-3xl font-bold '>
            Get your favorite takout in no time!
          </span>

          <span>
            Download the Food App for quick ordering and personalized mean
            suggestions
          </span>

          <img src={downloadImg} alt='Download app' className='h-24' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
