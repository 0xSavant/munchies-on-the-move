import React from "react";
import styles from "@/styles/Video.module.css";

const YoutubeEmbed = () => (
  <div className={styles.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/HGMTbmhrwd0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
