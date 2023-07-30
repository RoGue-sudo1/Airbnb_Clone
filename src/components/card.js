import React from "react"
export default function Card(props){
    let badgeText 
if(props.item.openSpots===0){
    badgeText="SOLD OUT"
}
else if (props.item.online===1){
    badgeText="ONLINE";
}
else if (props.item.online==0){
    badgeText="OFFLINE";
}

    return(
        <div className="card">
            { badgeText && <div className="badge">{badgeText}</div>}
            
            <img src={require(`../images/${props.item.coverImg}` )} className="card--image" />
            <div className="cards--stats">
                <img src={require("../images/star.png")} className="card--star"/>
                <span className="gray1">{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount})•</span>
                <span className="gray">{props.item.location}</span>
                </div>
                <p className="card--title">{props.item.title}</p>
                <p className="card--price"><span className="bold"><b>From ${props.item.price}</b> </span>/ person</p>
                
                

    
        </div>
    )
}