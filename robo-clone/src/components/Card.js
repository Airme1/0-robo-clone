import React from "react";
// import { robots } from "./robots";

const Card = ({name, email, id}) => {
        return(
            <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
                <img alt='robots' src={`https://robohash.org/${id}`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }

export default Card;