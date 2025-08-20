import Image from "next/image";
import styles from "@/src/assets/styles/OurSolutions.module.scss";

const solutions = [
  {
    icon:'/icons/svgs/microscope-blanc.svg',
    title: "DEEP-T",
    desc: "Comprehensive platform for preclinical research with tamper-proof record keeping.",
    color: "blue",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    icon:'/icons/svgs/patient-black.svg',
    title: "CLIN-T",
    desc: "End-to-end platform for clinical trials with enhanced transparency and data integrity.",
    color: "white",
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];

export default function OurSolutions() {
  return (
    <section className={styles.solutions}>
      <div/>
      
      <div className="container text-center" style={{position:'relative',zIndex:'2'}}>
        <h2>Our Solutions</h2>
        <p className={styles.subtitle}>
          BLOCK-T offers integrated platforms that combine blockchain and AI technologies
          to ensure data integrity throughout the research lifecycle.
        </p>

        <div className={styles.cards}>
          {solutions.map((sol, i) => (
            <div
              key={i}
              className={`${styles.card} ${sol.color === "blue" ? styles.blue : ""}`}
            >
              <div>
              <Image src={sol.icon} alt={`icon-${i}`} width={80} height={80} />
                </div> 
              <h3>{sol.title}</h3>
              <p>{sol.desc}</p>
              <ul>
                {sol.features.map((f, j) => (
                  <li key={j}>✔ {f}</li>
                ))}
              </ul>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
