import styles from "./Button.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
  resume?: boolean;
}

export default function Button({ href, children, resume }: Props) {
  if (resume)
    return (
      <a href={href} className={styles.btn} download>
        {children}
      </a>
    );
  return (
    <a href={href} className={styles.btn} target="_blank">
      {children}
    </a>
  );
}
