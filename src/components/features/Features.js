import styles from './Features.module.scss';
import React from 'react'

function Features(){
return(
   
    <div className={`${styles.features} ${styles.container}`}>
        {
            gymItem.map((hello, index) => {
                return(
                    <React.Fragment key={index}>
                    {hello.map(({heading, para, abtn }, index) => {
                        return <Feature key={index} heading={heading} description={para} linkLabel={abtn} />
                    })}
                    </ React.Fragment>
                )
            })
        }

            
     </div>
    
)
}
export default Features;

function Feature({heading, description, linkLabel}) {
    return (
    <div className="features01">
        <div className="gym-icon">
                    <img src="/features-first-icon.png"></img>
        </div>
        <div className="gym-des">
            <h2>{heading}</h2>
            <p>{description}</p>
            <a href="">{linkLabel}</a>
        </div>
        </div> 
    )
}

const gymItem = [
    [
    {
        heading:"Basic Fitness",
        para:"Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
        abtn:"DISCOVER MORE",
    },
    {
        heading:"New Gym Training",
        para:"If you wish to support TemplateMo website via PayPal, please feel free to contact us. We appreciate it a lot.",
        abtn:"DISCOVER MORE",
    }
],[
    {
        heading:"Advanced Muscle Course",
        para:"Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
        abtn:"DISCOVER MORE",
    },
    {
        heading:"Yoga Training",
        para:"Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
        abtn:"DISCOVER MORE",
    }
],[
    {
        heading:"Advanced Muscle Course",
        para:"Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
        abtn:"DISCOVER MORE",
    },
    {
        heading:"Yoga Training",
        para:"Please do not re-distribute this template ZIP file on any template collection website. This is not allowed.",
        abtn:"DISCOVER MORE",
    }
]
];
