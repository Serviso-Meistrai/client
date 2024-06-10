import { createLike, updateLike } from '@/services/likes/likesServices'
import React, { useEffect, useState } from 'react'

const Rating = ({service}) => {
    const [rated, setRated] = useState(0)
    const [ratedA, setRatedA] = useState(0)
    const token = JSON.parse(localStorage.getItem("userData"))?.token
    const userId = JSON.parse(localStorage.getItem("userData"))?._id
    const adId = service._id
    const [likeId, setLikeId] = useState("")

    useEffect(()=>{
        let sum = 0 
        let count = 0 
        service?.likes.forEach(like => {
            if(userId===like.user){
                setRated(like.value)
                setLikeId(like._id)
            }
            count = count + 1
            sum = sum + like.value
            sum = sum / count
            
            setRatedA(sum)
            console.log(sum);
        })
    },[])
    const handleClick =(e)=>{
        if(rated==0){
            setRated(e.target.value)
            createLike({value: e.target.value, adId: adId},token)
        }else{
            setRated(e.target.value)
            updateLike({value: e.target.value, adId: adId},token,likeId)
        }
            
    }


  return (
    <div className='rating'>
        {token?
            <ul className='stars'>
                <h6>My rating: </h6>
                <li title='1 Star' value={1} className={rated>=1?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='2 Stars' value={2} className={rated>=2?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='3 Stars' value={3} className={rated>=3?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='4 Stars' value={4} className={rated>=4?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
                <li title='5 Stars' value={5} className={rated>=5?"star_true":"star_false"} onClick={handleClick}>&#9733;</li>
            </ul>:null}
        <ul className='stars_avarage'>
            <h6>Avarage: </h6>
            <li title='1 Star' className={ratedA>=1?"star_true":"star_false"}>&#9733;</li>
            <li title='2 Stars' className={ratedA>=2?"star_true":"star_false"}>&#9733;</li>
            <li title='3 Stars' className={ratedA>=3?"star_true":"star_false"}>&#9733;</li>
            <li title='4 Stars' className={ratedA>=4?"star_true":"star_false"}>&#9733;</li>
            <li title='5 Stars' className={ratedA>=5?"star_true":"star_false"}>&#9733;</li>
        </ul>
    </div>
  )
}

export default Rating