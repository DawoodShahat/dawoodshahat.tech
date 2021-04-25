import styles from "./Hero.module.scss";

import Button from "./Button";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <p>Hi, I’m Dawood Shahat 👋 </p>
        <p>
          Software Engineer working with Javascript, React, Node and NestJS as
          tools 🛠️ 🔩 to build Software Solutions that works.
        </p>
        <img
          className={styles.heroImg}
          src="/profile.png"
          alt="yours truly"
          height="250"
          width="250"
        />
      </div>
      <Button href="/contact">Say Hi</Button>
    </section>
  );
}
