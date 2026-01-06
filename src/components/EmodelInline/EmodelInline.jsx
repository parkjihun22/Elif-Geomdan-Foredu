import React, { useState } from "react";
import styles from "./EmodelInline.module.scss";

// Emodel.jsx 에 정의된 탭과 URL을 그대로 복사합니다.
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

export default function EmodelInline() {
  const [selectedType, setSelectedType] = useState("84A");

  return (
    <div className={styles.inlineWrapper}>
      {/* ─── 타입 탭 메뉴 ─── */}
      <div className={styles.tabMenu}>
        {menuContents.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${
              selectedType === tab.key ? styles.activeTab : ""
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* ─── VR 뷰어 ─── */}
      <div className={styles.vrSection}>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>
    </div>
  );
}
