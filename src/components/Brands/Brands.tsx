"use client";
import styles from "./Brands.module.scss";
import Image from "next/image";

export default function Brands() {
  return (
    <div className={styles.brands}>
      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/redbull.svg" alt="RedBull" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/ted-baker.svg" alt="Ted Baker" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/asos.svg" alt="asos" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/nip.svg" alt="nip" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/skybox.svg" alt="Skybox" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/kolex.svg" alt="Kolex" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/hm.svg" alt="H&M" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/kyra.svg" alt="kyra" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/nike.svg" alt="Nike" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/laura-ashley.svg" alt="Laura Ashley" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/endpoint.svg" alt="Endpoint" fill />
        </div>
      </div>

      <div className={styles.brand}>
        <div className={styles.brandImage}>
          <Image src="/svg/flytro.svg" alt="Flytro" fill />
        </div>
      </div>
    </div>
  );
}
