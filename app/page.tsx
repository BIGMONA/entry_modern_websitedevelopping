import styles from "./page.module.css";
import Image from "next/Image";

export default function home() {
  return (
    <div>
      <section className={styles.top}>
        <h1 className={styles.title}>テクノロジーの力で世界を変える！</h1>
        <p className={styles.description}>
          私たちは市場をリードしているグローバルテックカンパニーです。
        </p>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
    </div>
  );
}
