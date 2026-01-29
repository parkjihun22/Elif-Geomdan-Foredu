import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


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
      <title>엘리프 검단 포레듀 - 프리미엄</title>
      <meta
        name="description"
        content="엘리프 검단 포레듀의 프리미엄을 확인하세요. 총 669세대 쾌적한 단지 구성, 검단신도시 핵심 입지, 확장되는 교통망과 생활 인프라, 자연과 어우러진 주거 환경으로 완성되는 가치."
      />
      <link rel="canonical" href="https://www.ds-elifapt.com/LocationEnvironment/primium" />
      <meta name="robots" content="index,follow" />
    </Helmet>

    <Header isChanged={isScroll} />
    <FixIcon />

    <Bener title="프리미엄" />

    <MenuBar contents={menuContents} />

    {/* SEO 최적화 */}
    <h1 className={styles.screenReaderOnly}>
      엘리프 검단 포레듀 - 프리미엄
    </h1>
    <p className={styles.screenReaderOnly}>
      엘리프 검단 포레듀만의 프리미엄을 만나보세요.
      삶의 동선과 일상을 고려한 단지 설계와 쾌적한 스케일,
      검단신도시의 핵심 입지와 확장되는 생활 인프라,
      자연이 더해진 주거 환경으로 일상의 품격을 한 단계 높입니다.
    </p>

    <div className={styles.textBox}>
      <div>검단신도시의 새로운 프리미엄 기준</div>
      <div>엘리프 검단 포레듀의 가치를 경험하세요.</div>
    </div>



      <img
        src={page1}
        className={styles.image3}
        alt="엘리프검단포레듀-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
