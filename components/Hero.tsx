import Image from "next/image";
import styles from "@/src/assets/styles/Hero.module.scss";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className={styles.content}>
        <h1>
          Accelerate <span className="text-dark-blue-gradient">Scientific</span> Discoveries
        </h1>
        <p>
          Solidify trust and integrity in data-driven preclinical and clinical
          studies through our AI-blockchain platform
        </p>
        <div className={styles.buttons}>
          <button className="btn btn-dark-blue-gradient">Request a Demo</button>
          <button className="btn btn-orange-gradient">Contact Us</button>
        </div>
      </div>

      <div className={styles.illustration}>
        
          <Image src='/imgs/banner.png' alt='banner' width={700} height={600}/>
    
      </div>
    </section>
  );
}
