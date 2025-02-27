import React, {Component} from 'react'
import Card from './CardUI'
import './card-style.css'
import wonyoung from './images/wonyoung.jpeg'
import karina from './images/karina.jpeg'
import haerin from './images/haerin.jpeg'
import chaewon from './images/chaewon.jpeg'

export function Header() {
    return (
        <h1>My Favorite Kpop Idols</h1>
    )
}

class Cards extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card imgsrc={wonyoung} title='Wonyoung' text='Jang Wonyoung is a South Korean singer-songwriter, dancer, model, and MC under Starship Entertainment. She is best known as the visual of the girl group IVE.' link='https://kpopping.com/profiles/idol/Wonyoung' linktext='More about Wonyoung' />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={karina} title='Karina' text='Yoo Jimin, known under her stage name Karina, is a South Korean dancer, rapper, and singer-songwriter under SM Entertainment. She is best known as the oldest member, leader, main dancer, center, one of the visuals, and face of the girl group aespa.' link='https://kpopping.com/profiles/idol/Karina2' linktext='More about Karina' />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={haerin} title='Haerin' text='Kang Haerin is a South Korean singer-songwriter and dancer under ADOR and HYBE Labels. She is best known a member of the girl group NewJeans.' link='https://kpopping.com/profiles/idol/Haerin2' linktext='More about Haerin' />
                    </div>
                    <div className="col-md-3">
                        <Card imgsrc={chaewon} title='Chaewon' text='Kim Chaewon is a South Korean singer-songwriter, composer and dancer under Source Music. She is best known as the leader of the girl group LE SSERAFIM.' link='https://kpopping.com/profiles/idol/Chaewon2' linktext='More about Chaewon' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards