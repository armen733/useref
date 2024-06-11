import React from 'react'
import { forwardRef } from 'react'
import "./About.css"
const About = forwardRef((_, ref) => {
    return (
        <div ref={ref} className='aboutdiv'>
            <h1>Մեր մասին <br />
                Ընկերության գործունեության մասին</h1>
            <div className="part2">
                <div className="left">
                    SmartCode ծրագրավորման ուսուցման ընկերությունը արդեն 8 տարի է կազմակերպում և իրականացնում է ծրագրավորման դասընթացներ, նպատակ ունենալով աշխատաշուկային հանձնել որակյալ մասնագետներ: <br />
                    Հետևելով համաշխարհային IT թրենդներին՝ թարմացվում և կատարելագործվում են դասավանդման ծրագրերը: Հատուկ մշակված ծրագրի արդյունքում մեր ուսանողները գրանցում են մեծ հաջողություններ: Հմուտ մասնագետների աշխատանքի արդյունքում մենք վայելում ենք մեր ուսանողների սերն ու վստահությունը: <br />
                    Դու էլ միացի՛ր մեզ, դարձի՛ր մրցունակ ծրագրավորման ոլորտում SmartCode-ի օգնությամբ: <br />
                </div>

                <div className="right">
                    <img className="rightpic" src="https://smartcode.am/public/image/per3.svg" alt="" />
                </div>
            </div>
        </div>
    )
}) 

export default About