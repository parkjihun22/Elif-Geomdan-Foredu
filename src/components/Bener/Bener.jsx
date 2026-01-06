import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="두산위브더제니스 청주 센트럴파크-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '두산위브' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '엘리프검단포레듀'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          숲세권의 여유와 신도시의 편리함을 동시에, 엘리프 검단 포레듀.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          단지 인접 공원·수변 산책로와 함께, 검단신도시 핵심 생활권을 가깝게 누립니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          계룡건설의 주거 브랜드 ‘ELIF’가 제안하는 감각적인 프리미엄 라이프.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          검단신도시의 미래가치 위에, 완성형 주거가 시작됩니다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지하 3층~지상 15층, 11개동 총 669세대로 구성된 쾌적한 스케일.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          64·84·98·110㎡P까지 다양한 타입과 특화 설계로 라이프스타일의 선택을 넓히다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          엘리프 검단 포레듀
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·생활·자연을 한 번에, 검단신도시 프리미엄 입지의 완성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          대형마트·의료·학군·공원 인프라를 가깝게, 일상에 여유를 더하는 올인원 주거환경.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          자연을 품은 단지 설계와 세련된 외관 디자인으로 품격을 더하다.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          피트니스·골프·도서관·키즈·게스트하우스 등 커뮤니티로 일상을 풍성하게.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          엘리프 검단 포레듀, 검단신도시의 새로운 기준으로 자리합니다.
        </div>
      </>
    );
  }
};


  
