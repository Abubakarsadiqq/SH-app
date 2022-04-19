import React from 'react';
import styles from './Details.css';


const Details = () => {
  return (
    <div className='d-container'>
<h1 className='name'>Shuaib Abubakar Sadiq </h1>
<h2>Email: <a onClick={(e)=>console.log(e.target)}>abba24452@gmail.com</a> </h2>
<h2>Contact: 08079817821 </h2>
<h2>Address:  04, badmus street , lagos state </h2>
    </div>
  )
}



export default Details