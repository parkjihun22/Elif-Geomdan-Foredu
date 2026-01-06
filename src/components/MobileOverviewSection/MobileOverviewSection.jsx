// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>엘리프 검단 포레듀</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>인천광역시 서구 마전동 검단신도시 AA32블록</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 3층 ~ 지상 15층, 총 11개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 64㎡ · 84㎡ · 98㎡ · 110㎡P</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 669세대</span>
        </li>
      </ul>
    ),
  },


  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
        <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
        <p className={styles.premiumSubtitle}>
          숲세권과 신도시 중심을 동시에 누리는<br />
          엘리프 검단 포레듀 프리미엄 라이프
        </p>
      </div>

        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "검단신도시 핵심 주거입지",
      desc:
        "검단신도시 내 계획된 주거 중심 입지<br/>체계적인 도시 설계로 쾌적한 주거환경 완성<br/>신도시 프리미엄을 누리는 핵심 생활권",
    },
    {
      img: slide2,
      title: "생활·의료 인프라 접근성",
      desc:
        "대형마트·병원·생활편의시설 이용 편리<br/>검단사거리·기존 생활권과 인접한 입지<br/>일상의 편리함을 높이는 안정적인 생활환경",
    },
    {
      img: slide3,
      title: "확장되는 광역 교통망",
      desc:
        "인천지하철 연장 및 GTX-D(예정) 기대<br/>계양·김포·서울로 이어지는 광역 교통망<br/>미래가치가 더해지는 교통 프리미엄",
    },
    {
      img: slide4,
      title: "교육·자연이 어우러진 환경",
      desc:
        "초·중·고 학군 형성과 교육환경 기대<br/>단지 인접 공원과 수변 산책로 조성<br/>아이부터 어른까지 만족하는 주거 환경",
    },
    {
      img: slide5,
      title: "총 669세대 쾌적한 단지 규모",
      desc:
        "지하 3층~지상 15층, 총 11개동 구성<br/>64·84·98·110㎡P 다양한 주거 타입",
    },
    {
      img: slide6,
      title: "계룡건설 프리미엄 브랜드",
      desc:
        "엘리프만의 감각적인 외관과 특화 설계<br/>다채로운 커뮤니티와 공원형 단지 구성<br/>검단신도시를 대표하는 새로운 주거 기준",
    },
  ];

  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
