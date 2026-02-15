function Hero() {
  return (
    <main className='text-lg my-20 text-center'>
      <div className='w-4/5 mx-auto'>
        <div className=''>
          <h1 className='text-6xl font-bold mb-8'>
            Shorten links. Share instantly
          </h1>
          <p className='text-xl mb-8'>
            Create short, reliable links with click tracking and zero clutter
          </p>
        </div>
        <div>
          <div className='bg-secondary-bg w-4/5 mx-auto h-20 border rounded-xl'>
            <form action='' className=" mx-auto">
              <input type='text' placeholder='Paste your long URL here... ' className="border"/>
              <button>Shorten</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
