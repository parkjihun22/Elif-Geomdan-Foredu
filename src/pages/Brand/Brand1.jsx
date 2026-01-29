import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>엘리프 검단 포레듀 - 브랜드 소개</title>
  <meta
    name="description"
    content="계룡건설의 주거 브랜드 ELIF(엘리프)의 철학과 가치를 소개합니다. 감각적인 디자인과 실용적인 공간 설계, 신뢰의 품질 기준으로 완성되는 엘리프 검단 포레듀의 프리미엄 라이프를 만나보세요."
  />
  <link rel="canonical" href="https://www.ds-elifapt.com/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 검단 포레듀" />
  <meta property="og:title" content="엘리프 검단 포레듀 - 브랜드 소개" />
  <meta
    property="og:description"
    content="계룡건설 주거 브랜드 ELIF(엘리프) 소개. 일상에 완성도를 더하는 설계와 디테일, 쾌적한 단지 계획으로 엘리프 검단 포레듀의 새로운 주거 기준을 제시합니다."
  />
  <meta property="og:url" content="https://www.ds-elifapt.com/Brand/intro" />
  <meta property="og:image" content="https://www.ds-elifapt.com/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />

{/* SEO용 H1 */}
<h1 className={styles.screenReaderOnly}>
  엘리프 검단 포레듀 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 검단 포레듀는 계룡건설의 주거 브랜드 ELIF(엘리프)가 제안하는
  프리미엄 주거 단지입니다. 삶의 동선과 수납, 채광까지 세심하게 고려한
  공간 설계와 감각적인 디자인, 신뢰할 수 있는 품질 기준을 바탕으로
  검단신도시의 새로운 주거 기준을 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>일상에 완성도를 더하는 프리미엄 라이프</div>
  <div>ELIF, 검단신도시의 기준이 되다</div>
</div>



            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="엘리프검단포레듀brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
