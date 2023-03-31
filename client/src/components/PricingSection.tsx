import React from 'react';
import styles from '../styles/PricingSection.module.css';

function PricingSection() {
  return (
    <div className={styles.container__pricing}>
     <h2>Pricing Plan</h2>
     <div className={styles.container__sections}>
     <section>
      <p>Free Plan</p>
      <h1>FREE</h1>
      <ul>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
      </ul>
      <p><a href='#'>Learn More</a></p>
      <button>Select Plan</button>
     </section>
     <hr className={styles.lineSections} /> 
     <section>
      <p>Basic Plan</p>
      <h1>$25</h1>
      <ul>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
      </ul>
      <p><a href='#'>Learn More</a></p>
      <button>Select Plan</button>
     </section>
     <hr className={styles.lineSections} /> 
     <section>
      <p>Business Plan</p>
      <h1>$50</h1>
      <ul>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
        <li><span>✔</span> Featured Features 01 </li>
      </ul>
      <p><a href='#'>Learn More</a></p>
      <button>Select Plan</button>
     </section>
     </div>
    </div>
  );
}

export default PricingSection;
