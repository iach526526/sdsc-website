import clsx from 'clsx';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    kicker: 'LOCATION 01',
    title: ['校園級地段', '坐擁學府核心'],
    description: '鄰近中興大學，1 分鐘進入校園',
    imageSrc: '/img/scsc-outside.jpg',
    imageAlt: '興大二村國光路建築外觀',
    tone: 'green',
  },
  {
    kicker: 'LOCATION 02',
    title: ['興大核心', '國光首席'],
    description: '鄰近中興大學，1 分鐘進入校園',
    imageSrc: '/img/scsc-outside.jpg',
    imageAlt: '興大二村校園周邊建築外觀',
    tone: 'gold',
  },
  {
    kicker: 'PARKING 04',
    title: ['二輪座駕','地下典藏'],
    description: '附贈機車或腳踏車車位擇一，視情況開放第二車證',
    imageSrc: '',
    imageAlt: '興大二村地下室的照片',
    tone: 'slate',
    reverse: true,
  },
  {
    kicker: 'LIFE 05',
    title: ['15 分鐘','興大生活圈'],
    description: '鄰近女生宿舍、忠孝夜市，生活機能便利',
    imageSrc: '',
    imageAlt: '一張二村周邊的地圖',
    tone: 'green',
  },
  {
    kicker: 'ROOM 06',
    title: ['9.3坪','大器格局'],
    imageSrc: '/img/4-people-room.jpg',
    imageAlt: '興大二村四人房室內空間',
    tone: 'gold',
    reverse: true,
  },
];

function TitleText({children}) {
  const lines = Array.isArray(children) ? children : String(children).split('\n');

  return lines.map((line, index) => (
    <div key={`${line}-${index}`} className={styles.titleLine}>
      {line}
      {index < lines.length - 1 && <br />}
    </div>
  ));
}

function FeatureImage({src, alt}) {
  return (
    <figure className={styles.featureImage}>
      <img src={src} alt={alt} loading="lazy" />
      <div className={clsx(styles.corner, styles.topLeft)} />
      <div className={clsx(styles.corner, styles.topRight)} />
      <div className={clsx(styles.corner, styles.bottomLeft)} />
      <div className={clsx(styles.corner, styles.bottomRight)} />
    </figure>
  );
}

function FeatureCard({feature}) {
  return (
    <section
      className={clsx(
        styles.feature,
        styles[`feature${feature.tone[0].toUpperCase()}${feature.tone.slice(1)}`],
        feature.reverse && styles.reverse,
      )}>
      <div className={styles.featureCopy}>
        <Heading as="h2">
          <TitleText>{feature.title}</TitleText>
        </Heading>
        {feature.description && <p>{feature.description}</p>}
      </div>
      <div className={styles.visualCard}>
        <FeatureImage src={feature.imageSrc} alt={feature.imageAlt} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="興大二村"
      description="中興大學興大二村，國光329興大核心生活圈字卡式主視覺。">
      <main className={styles.page}>
        <header className={styles.topHero}>
          <nav className={styles.heroNav} aria-label="首頁主視覺">
          </nav>

          <div className={styles.heroInner}>
            <Heading as="h1">
              國立中興大學
              <br />
              <span>興大二村</span>
            </Heading>
            <p className={styles.heroSub}>
              國光路 329 號，2 萬元夢想入席。<br />
            </p>
          </div>
          <div className={styles.scrollCue}>向下滑動&gt;&gt;&gt;</div>
        </header>

        {features.map((feature) => (
          <FeatureCard key={feature.kicker} feature={feature} />
        ))}

        <footer className={styles.closing}>
          <Heading as="h2">國光329，2 萬元夢想入席。</Heading>
        </footer>
      </main>
    </Layout>
  );
}
