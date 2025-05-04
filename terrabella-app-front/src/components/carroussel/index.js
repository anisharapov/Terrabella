import React, { useState, useEffect } from 'react';

import carroussel1 from '../../assets/images/helmets2_converted.jpg'
import carroussel2 from '../../assets/images/Room_1.jpg'
import carroussel3 from '../../assets/images/gym_right.jpg'
import carroussel4 from '../../assets/images/veranda_1.jpg'
import carroussel5 from '../../assets/images/coffee_spoons_converted.jpg'
import carroussel6 from '../../assets/images/library_converted.jpg'
import carroussel7 from '../../assets/images/bureau_table.jpg'
import carroussel8 from '../../assets/images/conference_table_converted.jpg'
import carroussel9 from '../../assets/images/table_wine.jpg'



export const Carroussel = () => {
    const items = [
        { title: 'Welcome to Terrabella', img: carroussel1, alt: 'helmets' },
        { title: 'King size bedroom', img: carroussel2, alt: 'room' },
        { title: 'Smart gym', img: carroussel3, alt: 'gym' },
        { title: 'Veranda', img: carroussel4, alt: 'veranda' },
        { title: 'Coffee corner', img: carroussel5, alt: 'coffee corner' },
        { title: 'Library', img: carroussel6, alt: 'library' },
        { title: 'Confortable office', img: carroussel7, alt: 'office' },
        { title: 'Conference room for 12 persons', img: carroussel8, alt: 'office' },
        { title: 'Tasty dinner and breakfast', img: carroussel9, alt: 'office' },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        // Change slide every 5 seconds
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      }, [items.length]);
    return (
        <section className="section">
        <article className="carroussel">
        <div
          className="carroussel-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="carroussel-item" key={index}>
              <h3>{item.title}</h3>
              <img src={item.img} alt={item.alt} />
            </div>
          ))}
        </div>
        </article>
    </section>
    );
}