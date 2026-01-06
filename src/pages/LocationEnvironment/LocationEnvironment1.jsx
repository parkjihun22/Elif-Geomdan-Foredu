import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "검단신도시 핵심 주거 입지<br />미래가치를 품은 중심 생활권",
    contentText:
      "계획도시 검단신도시의 주거 중심 입지<br />체계적인 개발로 생활 인프라 확장 기대",
  },
  {
    img: section2Image2,
    titleText: "의료·생활 인프라 접근성<br />안심할 수 있는 생활 환경",
    contentText:
      "병원·의료시설 및 생활 편의시설 인접<br />일상과 응급 상황 모두 대응 가능한 환경",
  },
  {
    img: section2Image3,
    titleText: "확장되는 교통 여건<br />수도권으로 연결되는 중심",
    contentText:
      "광역 도로망과 인천·김포·서울 접근 용이<br />GTX-D 등 미래 교통망 확장 기대",
  },
  {
    img: section2Image4,
    titleText: "풍부한 생활 인프라<br />신도시 원스톱 라이프",
    contentText:
      "대형마트·상업시설·행정 인프라 인접<br />생활의 편리함을 높이는 완성형 주거환경",
  },
  {
    img: section2Image5,
    titleText: "쾌적한 단지 스케일<br />총 669세대 엘리프 검단 포레듀",
    contentText:
      "지하 3층~지상 15층, 11개동 구성<br />여유로운 동간 거리로 완성한 주거 가치",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />일상 속에서 누리는 여유",
    contentText:
      "단지 인접 공원과 수변 산책로 조성<br />자연과 함께하는 쾌적한 주거 라이프",
  },
];






const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>엘리프 검단 포레듀 - 입지환경</title>
        <meta
          name="description"
          content="검단신도시 핵심 입지, 엘리프 검단 포레듀의 입지환경을 확인하세요. 확장되는 광역 교통망과 생활 인프라, 단지 인접 공원·수변 산책로 등 쾌적한 자연 환경까지 한 번에 누립니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.ds-elifapt.com/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="엘리프 검단 포레듀" />
        <meta property="og:title" content="엘리프 검단 포레듀 - 입지환경" />
        <meta
          property="og:description"
          content="검단신도시 프리미엄 입지: 확장되는 교통망과 생활 인프라, 공원·수변 녹지 환경을 모두 갖춘 엘리프 검단 포레듀."
        />
        <meta property="og:url" content="https://www.ds-elifapt.com/LocationEnvironment/intro" />
        <meta property="og:image" content="https://www.ds-elifapt.com/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="엘리프 검단 포레듀 - 입지환경" />
        <meta
          name="twitter:description"
          content="확장되는 교통망, 생활 인프라, 공원·수변 녹지까지 함께 누리는 검단신도시 입지."
        />
        <meta name="twitter:image" content="https://www.ds-elifapt.com/img/og/location.jpg" />
        <meta name="twitter:url" content="https://www.ds-elifapt.com/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "엘리프 검단 포레듀 - 입지환경",
            "url": "https://www.ds-elifapt.com/LocationEnvironment/intro",
            "description":
              "검단신도시 핵심 입지, 확장되는 교통망과 생활 인프라, 단지 인접 공원·수변 산책로 등 쾌적한 자연 환경을 갖춘 엘리프 검단 포레듀의 입지환경.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.ds-elifapt.com/img/og/location.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.ds-elifapt.com/" },
                { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.ds-elifapt.com/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* SEO 최적화 */}
      <h1 className={styles.screenReaderOnly}>
        엘리프 검단 포레듀 - 입지안내
      </h1>
      <p className={styles.screenReaderOnly}>
        엘리프 검단 포레듀의 입지 정보를 확인하세요.
        확장되는 광역 교통망을 통한 수도권 접근성과
        생활 편의시설 이용이 편리한 인프라,
        단지 인접 공원과 수변 산책로가 더하는 쾌적한 자연 환경까지
        두루 갖춘 검단신도시 핵심 입지입니다.
      </p>

      <div className={styles.textBox}>
        <div>갈수록 완성되는 검단신도시</div>
        <div>살수록 높아지는 프리미엄 가치</div>
        <div>도시의 기준이 되는 주거, 엘리프 검단 포레듀</div>
      </div>




      <img
        src={page1}
        className={styles.image2}
        alt="엘리프검단포레듀입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 엘리프검단포레듀사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
