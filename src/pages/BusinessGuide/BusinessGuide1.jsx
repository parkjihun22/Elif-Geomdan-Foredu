import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";




const projectData = [
  { label: '사업명', value: '엘리프 검단 포레듀' },
  { label: '사업위치', value: '인천광역시 서구 마전동 검단신도시 AA32블록' },
  { label: '대지면적', value: '추후 공지' },
  { label: '건축면적', value: '추후 공지' },
  { label: '연면적', value: '추후 공지' },
  { label: '용적률', value: '추후 공지' },
  { label: '건축규모', value: '지하 3층 ~ 지상 15층, 총 11개동' },
  { label: '세대수', value: '총 669세대' },
];

  
  

const BusinessGuide1 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약안내문", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const { pathname } = useLocation(); // 현재 경로를 가져옴
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' }); // 모바일 여부 확인

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

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>엘리프 검단 포레듀 - 사업안내</title>
        <meta
          name="description"
          content="인천광역시 서구 검단신도시 AA32블록에 들어서는 엘리프 검단 포레듀의 사업 개요를 확인하세요. 총 669세대(지하 3층~지상 15층, 11개동), 전용 64·84·98·110㎡P 구성, 입지·규모·타입 정보 안내."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.ds-elifapt.com/BusinessGuide/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="엘리프 검단 포레듀" />
        <meta property="og:title" content="엘리프 검단 포레듀 - 사업안내" />
        <meta
          property="og:description"
          content="검단신도시의 쾌적한 주거환경과 미래가치, 총 669세대 프리미엄 단지. 위치·규모·타입 구성 정보를 한눈에 확인하세요."
        />
        <meta property="og:url" content="https://www.ds-elifapt.com/BusinessGuide/intro" />
        <meta property="og:image" content="https://www.ds-elifapt.com/img/og/business.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="엘리프 검단 포레듀 - 사업안내" />
        <meta
          name="twitter:description"
          content="엘리프 검단 포레듀 사업 개요: 총 669세대, 전용 64·84·98·110㎡P 구성, 검단신도시 입지와 규모·타입 정보 안내."
        />
        <meta name="twitter:image" content="https://www.ds-elifapt.com/img/og/business.jpg" />
        <meta name="twitter:url" content="https://www.ds-elifapt.com/BusinessGuide/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "엘리프 검단 포레듀 - 사업안내",
            "url": "https://www.ds-elifapt.com/BusinessGuide/intro",
            "description":
              "인천광역시 서구 검단신도시 AA32블록에 조성되는 엘리프 검단 포레듀의 사업 개요와 위치, 규모, 타입 구성 정보를 제공합니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.ds-elifapt.com/img/og/business.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.ds-elifapt.com/" },
                { "@type": "ListItem", "position": 2, "name": "사업안내", "item": "https://www.ds-elifapt.com/BusinessGuide/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="사업개요" />

<MenuBar contents={menuContents} />

{/* SEO 최적화 H1 */}
<h1 className={styles.screenReaderOnly}>
  엘리프 검단 포레듀 - 사업안내
</h1>

<p className={styles.screenReaderOnly}>
  엘리프 검단 포레듀는 검단신도시의 계획도시 인프라와 쾌적한 주거환경을 바탕으로
  완성되는 프리미엄 주거 단지입니다. 이 페이지에서는 위치와 규모, 전용
  64·84·98·110㎡P 타입 구성과 단지 특화, 생활 인프라 등
  사업의 핵심 정보를 안내합니다.
</p>

<div className={styles.textBox}>
  <div>검단신도시의 새로운 주거 기준</div>
  <div>엘리프 검단 포레듀, 일상에 완성도를 더합니다.</div>
</div>




			<img className={styles.img3} src={page1} alt="엘리프검단포레듀-image1"/>

			<div className={styles.tableContainer}>
				{!isMobile && <img className={styles.tableImg} src={tableImage} />}
				<table className={styles.projectTable}>
					<tbody>
						{projectData.map((item, index) => (
							<tr key={index}>
								<td className={styles.label}>{item.label}</td>
								<td className={styles.contents}>{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			 <div className={styles.commonBox}>
				<div className={styles.notice}>
					※ 본 홈페이지에 표기된 내용은 하기의 내용을 근거로 한 내용이며, 추후 계획의 변동 등은 당사와 무관합니다.
				</div>
				
			</div> 


			<Footer />
		</div>
	)
}

export default BusinessGuide1;
