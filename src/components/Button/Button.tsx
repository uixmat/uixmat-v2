import styles from "./Button.module.scss";

interface Props {
  href: string;
  children: React.ReactNode;
  resume?: boolean;
  external?: boolean;
}

export default function Button({ href, children, resume, external }: Props) {
  if (resume)
    return (
      <a href={href} className={styles.btn} download>
        {children}
      </a>
    );
  return (
    <a href={href} className={styles.btn} target={external ? "_blank" : "self"}>
      {children}
    </a>
  );
}
