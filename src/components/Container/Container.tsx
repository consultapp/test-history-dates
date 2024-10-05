import BottomContainer from "../BottomContainer/BottomContainer";
import CoordNet from "../CoordNet/CoordNet";
import TopContainer from "../TopContainer/TopContainer";
import styles from "./style.module.scss";

export default function Container() {
  return (
    <div className={styles.root}>
      <CoordNet />
      <TopContainer />
      <div className={styles.line}></div>
      <div className={styles.bottom}>
        <BottomContainer />
      </div>
    </div>
  );
}
