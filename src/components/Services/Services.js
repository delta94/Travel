import React, { Component } from 'react'
import Title from '../Title/Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import styles from './Service.scss'

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Rree cocktails",
                info: 'Dịch vụ đồ uống miễn phí'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: 'Dịch vụ leo núi '
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: 'Dịch vụ đưa đón miễn phí'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info: 'Bia hơi cực đã'
            }
            
        ]
    }
    render() {
        return (
            <section className={styles.services}>
                <Title title="Hotel services"  className={styles.servicesTitle}/>
                <div className={styles.services_center}>
                    {this.state.services.map((item, index) => {
                        return <article key={index} className={styles.service}>
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section>
        )
    }
}
