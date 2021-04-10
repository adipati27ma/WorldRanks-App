import Head from 'next/head';
import Layout from '../components/Layout/layout';
import styles from '../styles/Home.module.css';

export default function Home({ countries }) {
  console.log(countries);

  return <Layout>maine</Layout>;
}

export const getStaticprops = async () => {
  const res = await fetch(`https://restcountries.eu/rest/v2/all`);
  const countries = await res.json();

  return {
    props: {
      countries,
    },
  };
};
