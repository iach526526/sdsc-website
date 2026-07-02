import clsx from 'clsx';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const siteTitle = '中興大學興大二村';
const siteDescription =
  '國立中興大學興大二村住宿生入口，整理國光路329號宿舍生活圈、宿舍網路指南、住宿規章與 AI skill 法規查詢資源。';
const siteUrl = 'https://nchusdsc.org';
const socialImage = `${siteUrl}/img/build-future.webp`;

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
  const imageUrl = useBaseUrl(src || '/img/build-future.webp');

  return (
    <figure className={styles.featureImage}>
      {src && <img src={imageUrl} alt={alt} loading="lazy" />}
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
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteTitle,
    alternateName: ['興大二村', 'NCHU Second Village Dormitory', 'SDSC'],
    description: siteDescription,
    url: siteUrl,
    image: socialImage,
    inLanguage: 'zh-Hant-TW',
    about: [
      '國立中興大學學生宿舍',
      '興大二村宿舍網路指南',
      '興大二村公約及違規處理要點',
      '中興大學宿舍法規 AI skill',
    ],
    audience: {
      '@type': 'Audience',
      audienceType: '國立中興大學興大二村住宿生',
    },
  };

  return (
    <Layout
      title={siteTitle}
      description={siteDescription}>
      <Head>
        <meta
          name="keywords"
          content="中興大學興大二村,興大二村,國立中興大學宿舍,興大宿舍,NCHU Second Village,宿舍網路,宿舍規章,國光路329號"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="打造未來的中興" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
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
