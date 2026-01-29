import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ComplexGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";


import page1 from "../../assets/ComplexGuide/ComplexGuide3/page1.jpg";



const ComplexGuide3 = () => {
  const menuContents = [
    { title: "단지 배치도", url: "/ComplexGuide/intro" },
    { title: "호수 배치도", url: "/ComplexGuide/detailintro" },
    { title: "커뮤니티", url: "/ComplexGuide/community" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false); // 이미지 로딩 상태 추가
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  // 이미지가 로드되면 호출되는 함수
  const handleImageLoad = () => {
    setIsImage2Loaded(true); // 이미지가 로드되면 상태 업데이트
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

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
  <title>엘리프 검단 포레듀 - 커뮤니티</title>
  <meta
    name="description"
    content="엘리프 검단 포레듀의 커뮤니티 시설을 소개합니다. 피트니스센터, 실내 골프연습장, 작은도서관(북카페), 주민 라운지 등 입주민의 일상을 더 풍성하게 만드는 다양한 편의시설을 만나보세요."
  />
  <link rel="canonical" href="https://www.ds-elifapt.com/ComplexGuide/community" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 검단 포레듀" />
  <meta property="og:title" content="엘리프 검단 포레듀 - 커뮤니티" />
  <meta
    property="og:description"
    content="피트니스·실내골프·작은도서관·라운지 등 다채로운 커뮤니티로 일상의 가치를 높이는 엘리프 검단 포레듀."
  />
  <meta property="og:url" content="https://www.ds-elifapt.com/ComplexGuide/community" />
  <meta property="og:image" content="https://www.ds-elifapt.com/img/og/complex.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="커뮤니티" />
<MenuBar contents={menuContents} />

{/* SEO 최적화 H1 */}
<h1 className={styles.screenReaderOnly}>
  엘리프 검단 포레듀 - 커뮤니티
</h1>
<p className={styles.screenReaderOnly}>
  엘리프 검단 포레듀의 커뮤니티 페이지에서는 단지 내 다양한 시설을 소개합니다.
  피트니스센터, 실내 골프연습장, 작은도서관(북카페), 주민 라운지 등 편의시설을 통해
  입주민의 삶의 질을 높이고 더 나은 공동체 생활을 돕습니다.
</p>

<div className={styles.textBox}>
  <div>일상을 더 풍성하게 만드는 커뮤니티</div>
  <div>엘리프 검단 포레듀의 커뮤니티를 만나보세요.</div>
</div>



      {/* 이미지에 애니메이션 효과 추가 */}
      <img
				className={`${styles.image2} ${isImage2Loaded ? styles.showImage2 : ''}`}
				src={page1}
				alt="엘리프검단포레듀커뮤니티 안내 -image1"
				onLoad={handleImageLoad}  // 이미지 로드 후 애니메이션 실행
			/>

      <div className={styles.commonBox}>
              <div className={styles.notice}>
                ※ 커뮤니티 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다
              </div>
              <div className={styles.notice}>
                ※ 커뮤니티내 조경 및 세부계획, 시설물의 위치는 실제 시공시 현장 상황에 따라 변경될 수 있습니다
              </div>
            </div>

      <Footer />
    </div>
  );
};

export default ComplexGuide3;
