import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "84A", key: "84A" },
    { title: "98A", key: "98A" },
    // { title: "84A", key: "84A" },
    // { title: "114", key: "114" },
  ];

  const vrUrls = {
    "84A": "https://xn--c79an5jqrb8zf6rcfy4a5qw65b.com/evr/tour1.html",
    "98A": "https://xn--c79an5jqrb8zf6rcfy4a5qw65b.com/evr/tour2.html",
    // "84A": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr/tour3.html",
    // "114": "https://xn--9i1bjk9yu0i1yj45dd2aj6f5vocwcq6c89qkimfzhbjb.com/vr2/114/index.html",
  };





  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 핵심 SEO 페이지: E-모델하우스 */}
        <title>엘리프 검단 포레듀 - E-모델하우스</title>
        <meta
          name="description"
          content="엘리프 검단 포레듀 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 64·84·98·110㎡P 세대별 평면도, 인테리어를 실감 나게 확인하실 수 있습니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.ds-elifapt.com/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="엘리프 검단 포레듀" />
        <meta property="og:title" content="엘리프 검단 포레듀 - E-모델하우스" />
        <meta
          property="og:description"
          content="엘리프 검단 포레듀 E-모델하우스: VR 투어와 세대별 평면도·인테리어를 통해 실제 같은 공간을 체험하세요."
        />
        <meta property="og:url" content="https://www.ds-elifapt.com/FloorPlan/Emodel" />
        <meta property="og:image" content="https://www.ds-elifapt.com/img/og/emodel.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="엘리프 검단 포레듀 - E-모델하우스" />
        <meta
          name="twitter:description"
          content="엘리프 검단 포레듀 E-모델하우스를 온라인으로 체험하세요. VR 투어와 전용 64·84·98·110㎡P 평면도, 인테리어를 한눈에."
        />
        <meta name="twitter:image" content="https://www.ds-elifapt.com/img/og/emodel.jpg" />
        <meta name="twitter:url" content="https://www.ds-elifapt.com/FloorPlan/Emodel" />

        {/* JSON-LD (구조화데이터) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "엘리프 검단 포레듀 - E-모델하우스",
            "url": "https://www.ds-elifapt.com/FloorPlan/Emodel",
            "description":
              "엘리프 검단 포레듀 E-모델하우스를 온라인에서 편리하게 둘러보세요. VR 가상 투어와 전용 64·84·98·110㎡P 세대별 평면도를 확인할 수 있습니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.ds-elifapt.com/img/og/emodel.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.ds-elifapt.com/" },
                { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "https://www.ds-elifapt.com/FloorPlan/Emodel" }
              ]
            }
          })}
        </script>
      </Helmet>



      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>엘리프검단포레듀- E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
