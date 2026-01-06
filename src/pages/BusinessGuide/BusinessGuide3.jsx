import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from './BusinessGuide.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/BusinessGuide/documents/contract.jpg";

import Ready from "../../components/Ready/Ready";

const BusinessGuide2 = () => {
	const menuContents = [
		{ title: "사업안내", url: "/BusinessGuide/intro" },
		{ title: "분양일정", url: "/BusinessGuide/plan" },
		{ title: "계약안내문", url: "/BusinessGuide/documents" }
	];
	const [isScroll, setIsScroll] = useState(false);
	const [selectedOption, setSelectedOption] = useState(1); // 선택된 옵션 (1~6)
	const [isImageVisible, setIsImageVisible] = useState(false); // isImageVisible 상태 추가
	const { pathname } = useLocation(); // 현재 경로를 가져옴

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

	// 이미지 표시 여부를 변경하는 로직 추가 (예시)
	useEffect(() => {
		const handleImageVisibility = () => {
			if (window.scrollY > 200) { // 예시: 스크롤이 200px 이상 내려갔을 때
				setIsImageVisible(true);
			} else {
				setIsImageVisible(false);
			}
		};

		window.addEventListener('scroll', handleImageVisibility);

		return () => {
			window.removeEventListener('scroll', handleImageVisibility);
		};
	}, []);

	return (
		<div className={styles.container}>
<Helmet>
  {/* 필수 메타 */}
  <title>엘리프 검단 포레듀 - 계약서류안내</title>
  <meta
    name="description"
    content="엘리프 검단 포레듀 분양(청약) 계약을 위한 서류 안내. 신분증, 주민등록등본, 인감증명서 등 필수 제출서류와 준비 절차, 유의사항을 빠르게 확인하세요."
  />
  <meta name="robots" content="index,follow" />
  <link
    rel="canonical"
    href="https://www.ds-elifapt.com/BusinessGuide/documents"
  />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="엘리프 검단 포레듀" />
  <meta property="og:title" content="엘리프 검단 포레듀 - 계약서류안내" />
  <meta
    property="og:description"
    content="엘리프 검단 포레듀 계약서류 안내: 신분증·주민등록등본·인감증명서 등 필수 서류와 준비 절차, 유의사항을 확인하세요."
  />
  <meta property="og:url" content="https://www.ds-elifapt.com/BusinessGuide/documents" />
  <meta property="og:image" content="https://www.ds-elifapt.com/Main1.png" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />
<Bener title="계약서류안내" />
<MenuBar contents={menuContents} />

{/* SEO 최적화 H1 */}
<h1 className={styles.screenReaderOnly}>
  엘리프 검단 포레듀 - 계약서류안내
</h1>

<p className={styles.screenReaderOnly}>
  본 페이지는 엘리프 검단 포레듀 분양(청약) 당첨 후
  계약 체결을 위해 필요한 서류를 안내합니다.
  제출 서류 목록과 준비 방법, 제출 기한 및 유의사항을 확인하여
  원활하고 정확한 계약 진행에 도움을 드립니다.
</p>

<div className={styles.textBox}>
  <div>검단신도시의 기대 위에</div>
  <div>엘리프 검단 포레듀, 계약서류를 미리 준비하세요.</div>
</div>



			{/* 이미지에 isImageVisible 상태 적용 */}
			<img className={`${styles.image4} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="엘리프검단포레듀계약서류안내-image1" />



			<Footer /> 
		</div>
	);
};

export default BusinessGuide2;
