import Layout from '../../components/Layout/layout';
import styles from './country.module.css';

const Country = ({ country }) => {
  console.log(country);
  return (
    <Layout title={country.name}>
      <div>
        <div className={styles.overview_panel}>
          <img src={country.flag} alt={country.name} />
          <h1 className={styles.overview_name}>{country.name}</h1>
          <div className={styles.overview_region}>{country.region}</div>

          <div className={styles.overview_numbers}>
            <div className={styles.overview_population}>
              <div className={styles.overview_value}>{country.population}</div>
              <div className={styles.overview_label}>Population</div>
            </div>
            <div className={styles.overview_area}>
              <div className={styles.overview_value}>{country.area}</div>
              <div className={styles.overview_label}>Area (km)</div>
            </div>
          </div>
        </div>

        <div className={styles.details_panel}>
          <h4 className={styles.details_heading}>Details</h4>

          <div className={styles.details_row}>
            <div className={styles.details_label}>Capital</div>
            <div className={styles.details_value}>{country.capital}</div>
          </div>
          <div className={styles.details_row}>
            <div className={styles.details_label}>Sub Region</div>
            <div className={styles.details_value}>{country.subregion}</div>
          </div>
          <div className={styles.details_row}>
            <div className={styles.details_label}>Languages</div>
            <div className={styles.details_value}>
              {country.languages.map(({ name }) => name).join(', ')}
            </div>
          </div>
          <div className={styles.details_row}>
            <div className={styles.details_label}>Currencies</div>
            <div className={styles.details_value}>
              {country.currencies.map(({ name }) => name).join(', ')}
            </div>
          </div>
          <div className={styles.details_row}>
            <div className={styles.details_label}>Native Name</div>
            <div className={styles.details_value}>{country.nativeName}</div>
          </div>
          <div className={styles.details_row}>
            <div className={styles.details_label}>Gini</div>
            <div className={styles.details_value}>{country.gini} %</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );
  const country = await res.json();

  return {
    props: {
      country,
    },
  };
};
