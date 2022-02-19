import { GiAllSeeingEye } from 'react-icons/gi';

const Footer = () => {
  const icon = <GiAllSeeingEye />;

  return (
    <footer className='h-14 w-full flex items-center justify-center bg-zinc-900 border-t-4 border-t-zinc-600 relative bottom-0'>
      <p className='text-white text-sm text-center'>
        This site was Designed and Produced by AJ Martin{' '}
        <GiAllSeeingEye className='inline-flex cursor-text' /> 2022
      </p>
    </footer>
  );
};

export default Footer;
