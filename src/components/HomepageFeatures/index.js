import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Diagnostics',
    Svg: require('@site/static/img/diagnostic-svgrepo-com.svg').default,
    description: (
      <>
        SOVD provides an extensive suite of diagnostic tools for modern vehicles,
        ensuring accurate troubleshooting and maintenance.
      </>
    ),
  },
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/integration-svgrepo-com.svg').default,
    description: (
      <>
        Designed to work with various platforms and protocols, SoVD integrates
        effortlessly into your vehicle's ecosystem.
      </>
    ),
  },
  {
    title: 'Real-Time Monitoring',
    Svg: require('@site/static/img/monitoring-svgrepo-com.svg').default,
    description: (
      <>
        Monitor vehicle performance and diagnostics in real-time with
        intuitive interfaces and precise data streams.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Features Section */}
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        {/* Why Choose SOVD Section */}
        <div className={styles.newSection}>
          <h2 className="text--center">Why Choose SOVD?</h2>
          <p className={`${styles.newSectionDescription} text--center`}>
            SOVD is your trusted partner in modern vehicle diagnostics. With state-of-the-art tools, seamless integration, and reliable performance, we ensure your vehicle operates at its best.
          </p>
          <div className={`row ${styles.newSectionFeatures}`}>
            <div className="col col--6">
              <h3>Cutting-Edge Technology</h3>
              <p>
                Leverage the power of advanced diagnostics tools that make identifying and resolving issues fast and efficient.
              </p>
            </div>
            <div className="col col--6">
              <h3>Trusted by Professionals</h3>
              <p>
                SOVD is widely adopted by industry leaders, ensuring compatibility with the latest standards and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

