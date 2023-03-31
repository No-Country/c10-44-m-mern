import React from 'react';
import styles from '../styles/HomeFooter.module.css';

function HomeFooter() {
  return (
    <div className={styles.container}>
      <div>
      <nav>
        <ul>
          <li><h4>Company</h4></li>
          <li>About Us</li>
          <li>Why Choose Us</li>
          <li>Pricing</li>
          <li>Testimonial</li>
        </ul>
        <ul>
          <li><h4>Resources</h4></li>
          <li>Privacy Policy</li>
          <li>Term and Condition</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li><h4>Product</h4></li>
          <li>Project Management</li>
          <li>Time Tracker</li>
          <li>Time Schedule</li>
          <li>Lead Generate</li>
          <li>Remote Collaboration</li>
        </ul>   
        <section>
        <h1>Site Title</h1>
          <h4>Subscribe to our Newsletter</h4>
          <form>
            <input placeholder='Enter your email'></input>
            <button>Subscribe</button>
          </form>
      </section>      
      </nav>       
      <section className={styles.logo_verbify}>
      <hr className={styles.linea} />  
      <img src='https://i.ibb.co/TLQS9cS/Verbify-logo.png'/>
      <hr className={styles.linea} />  
      </section>
      </div>  
    </div>
  );
}

export default HomeFooter;
