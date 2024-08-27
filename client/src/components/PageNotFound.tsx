import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
      <p className='text-xl text-gray-600 mb-8'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button
        onClick={handleGoHome}
        className='bg-blue-500 text-white px-4 py-2 rounded'
      >
        Go Home
      </Button>
    </div>
  );
};

export default PageNotFound;
