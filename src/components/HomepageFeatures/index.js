import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modern Diagnostics API',
    // Svg: require('@site/static/img/undraw_server_cluster.svg').default,
    description: (
      <>
        The SOVD API leverages modern web technologies like REST, JSON, and HTTP2,
        ensuring robust and scalable diagnostics for traditional ECUs and HPCs.
      </>
    ),
  },
  {
    title: 'Unified Interface',
    // Svg: require('@site/static/img/undraw_sync.svg').default,
    description: (
      <>
        SOVD integrates seamlessly with UDS-based systems and provides a consistent
        interface for diagnostic access across proximity, in-vehicle, and remote scenarios.
      </>
    ),
  },
  {
    title: 'Dynamic & Self-Descriptive',
    // Svg: require('@site/static/img/undraw_self_driving.svg').default,
    description: (
      <>
        SOVD is designed for dynamic systems with self-descriptive capabilities, eliminating
        the need for static diagnostic descriptions like ODX files.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && <Svg className={styles.featureSvg} role="img" />}
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
