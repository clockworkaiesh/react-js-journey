import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'
const SkeletonRestroDetailCard = () => {
  return (
    <div className='skeleton-wrapper  menu-skeleton-wrapper'>
        <div className="skeleton-article menu-skeleton">
          <div className="menu-detail-skeleton">
              <div className='left-col'>
              <SkeletonElement type="thumbnail"/>
              <SkeletonElement type="title"/>
              <SkeletonElement type="text"/>
              <SkeletonElement type="text"/>
              </div>

              <div className='right-col'>
                <SkeletonElement type="title"/>
                <div className="grid">
                  {Array(20).fill("").map((e, index) => (
                      <div className="menu-list-skeleton">
                        <SkeletonElement type="avatar"/>
                        <SkeletonElement type="text"/>
                      </div>
                      ))
                  }
                  </div>
              </div>
          </div>

        </div>
        <Shimmer/>
    </div>
  )
}

export default SkeletonRestroDetailCard