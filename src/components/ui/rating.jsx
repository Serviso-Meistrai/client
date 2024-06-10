import { createLike, updateLike } from '@/services/likes/likesServices'
import React, { useEffect, useState } from 'react'

const Rating = ({service}) => {
    const [rated, setRated] = useState(0)
    const [ratedA, setRatedA] = useState(0)
    const token = JSON.parse(localStorage.getItem("userData"))?.token
    const userId = JSON.parse(localStorage.getItem("userData"))?._id
    const adId = service._id

    useEffect(()=>{
        service.likes.forEach(like => {
            if(userId===like.user){
                setRated(like.value)
                console.log(like);
            }
        })
    },[])
    const handleClick =(e)=>{
        if(rated==0){
            setRated(e.target.value)
            createLike({value: rated, adId: adId},token)
        }else{
            setRated(e.target.value)
            updateLike({value: rated, adId: adId},token,likeId)
        }
            
    }


  return (
    <div className='rating'>
        {token?
            <ul className='stars'>
                <h6>My rating: </h6>
                <li title='1' value={1} className={rated>=1?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='2' value={2} className={rated>=2?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='3' value={3} className={rated>=3?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='4' value={4} className={rated>=4?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='5' value={5} className={rated>=5?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
            </ul>:null}
        <ul className='stars_avarage'>
            <h6>Avarage:</h6>
            <li title='1' className={ratedA>=1?"star_true":"star_false"}>&#9733;</li>
            <li title='2' className={ratedA>=2?"star_true":"star_false"}>&#9733;</li>
            <li title='3' className={ratedA>=3?"star_true":"star_false"}>&#9733;</li>
            <li title='4' className={ratedA>=4?"star_true":"star_false"}>&#9733;</li>
            <li title='5' className={ratedA>=5?"star_true":"star_false"}>&#9733;</li>
        </ul>
    </div>
  )
}

export default Rating