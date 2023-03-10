import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
const SkeletonFoodCard = () => {
  return (
    <div className='skeleton-wrapper'>
        <div className="skeleton-article">
            <SkeletonElement type="thumbnail"/>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
        <Shimmer/>
    </div>
  )
}

export default SkeletonFoodCard