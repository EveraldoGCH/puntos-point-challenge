import type { NextPage } from 'next';
// import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header/Header';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const router = useRouter()
  
  return (
    <>
    </>
  );
};

export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/dashboard",
      permanent: false
    }
  }

}

export default Home;
