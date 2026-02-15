import { User } from 'lucide-react';

function NavBar() {
  return (
    <>
      <nav className='px-20 py-6 text-lg border-solid border-b-2 border-secondary-bg'>
        <div className='flex justify-between items-center'>
          <div className='text-3xl font-bold'>ZetaTube</div>
          <div className='flex justify-between gap-7'>
            <div className='border-solid border-r-3 pr-7 border-secondary-bg'>
              <a href='#'>Login</a>
            </div>
            <div>
              <a href='#' className='flex gap-2 items-center'>
                <User size={18} />
                Sign up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
