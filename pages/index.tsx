import type { NextPage } from 'next';
// import Image from 'next/image';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return <></>;
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false,
    },
  };
}

export default Home;
