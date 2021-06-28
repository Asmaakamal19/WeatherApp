import React from 'react';
const Weatherlist=(props) => {
    return (
      <div>
          <div className="info">
            {
                props.tempreature && 
                <p className="info_p">Tempreature : <span className="info_val">{props.tempreature}</span></p>   
            }
            {
                props.city && <p className="info_p">City : <span className="info_val">{props.city}</span></p>   
            }
            {
                props.country && <p className="info_p">Country : <span className="info_val">{props.country}</span></p>   
            }
            {
                props.humidity && <p className="info_p">Humidity : <span className="info_val">{props.humidity}</span></p>   
            }
            {
                props.description && <p className="info_p">Description :<span className="info_val"> {props.description}</span></p>   
            }
            {
                props.error && <p className="info_p">Error : <span className="info_val">{props.error}</span></p>   
            }
          </div>
      </div>
    );
}
export default Weatherlist;