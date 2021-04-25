import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({ children, ...rest }) {
  console.log(rest, children);
  return (
    <Link className={styles.button} {...rest}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
}
