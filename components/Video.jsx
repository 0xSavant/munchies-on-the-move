import React from "react";
import styles from "@/styles/Video.module.css";

const YoutubeEmbed = () => (
  <div className={styles.videoResponsive}>
    <iframe
      width="550"
      height="305"
      src={`https://www.youtube.com/embed/HGMTbmhrwd0`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Munchies on the Move"
    />
  </div>
);

export default YoutubeEmbed;
