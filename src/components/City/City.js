import React, { Component } from 'react'
import Title from '../Title/Title'
import styles from './City.scss'
import img1 from '../../images/city1.jpg'
import img2 from '../../images/city2.jpg'
import img3 from '../../images/city3.jpg'
import img4 from '../../images/city4.jpg'
export default class City extends Component {
    state = {
        cities: [
            {
                img: img1,
                title: "Rree cocktails",
                info: 'Dịch vụ đồ uống miễn phí'
            },
            {
                img: img2,
                title: "Endless Hiking",
                info: 'Dịch vụ leo núi '
            },
            {
                img: img3,
                title: "Free Shuttle",
                info: 'Dịch vụ đưa đón miễn phí'
            },
            {
                img: img4,
                title: "Strongest Beer",
                info: 'Bia hơi cực đã'
            },

            
        ]
    }
    render() {
        return (
            <section className={styles.cities}>
                <Title title="Explore Destinations"  className={styles.cityTitle}/>
                <div className={styles.cities_center}>
                    {this.state.cities.map((item, index) => {
                        return <article key={index} className={styles.city}>
                                    <img src={item.img}/>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section>
        )
    }
}
