import React from "react"
import StarRatings from "react-star-ratings"

const Stars = ({rating}) => {
    return (
        <>
            <StarRatings 
                rating={rating}
                starRatedColor="gold"
                numberOfStars={5}
                starDimension="20px"
            />
            <code>{rating}</code>
        </>
    )
}

export default React.memo(Stars)