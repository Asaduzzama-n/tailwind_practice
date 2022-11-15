import React from 'react';

const Link = (props) => {
    const {name,link} = props.route;
    return (
        <div >
            {
               <a href={link}>{name}</a>
                
            }
        </div>
    );
};

export default Link;