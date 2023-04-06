import styles from "../styles/VideoBox.module.css";

interface VideoURL {
  videourl: string;
}

function VideoBox({ videourl }: VideoURL) {
  return (
    <div className={styles.videobox}>
      <iframe
        className={styles.video}
        src={videourl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBox;
