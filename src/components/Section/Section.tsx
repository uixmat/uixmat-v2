import clsx from "clsx";
import styles from "./Section.module.scss";

interface SectionProps {
  children: React.ReactNode;
  border?: boolean;
}

export default function Section({ children, border }: SectionProps) {
  return (
    <section className={clsx(styles.section, !border && styles.noborder)}>
      {children}
    </section>
  );
}
