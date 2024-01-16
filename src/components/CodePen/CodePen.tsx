"use client";
import Iframe from "react-iframe";
import styles from "./CodePen.module.scss";

interface PenProps {
  author: string;
  slug: string;
}

const CodePen = ({ author, slug }: PenProps) => {
  return (
    <>
      <div className="preloaded">
        <Iframe
          url={`https://codepen.io/${author}/embed/${slug}?default-tab=result&editable=true&theme-id=dark`}
          width="100%"
          height="450px"
          loading="lazy"
          id="myId"
          className={styles.pen}
          display="initial"
          position="relative"
          allowFullScreen={true}
        />
      </div>
    </>
  );
};

export default CodePen;
