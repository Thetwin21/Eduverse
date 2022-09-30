import React from 'react'

const CardProfile = () => {
  return (
    <div className='card_profile'>
        <div className='card'>
        <div className="img">
        <img src="../Asset/profileImg1.png" alt="" />
        </div>
        <div className="name_details">
            <p className="name">Olivia Phyna</p>
            <p className="username">olivia@untitledui.com</p>
        </div>
        </div>
        <div className="profession">
            <p>Mechanical engineer | AI & Robotics </p>
        </div>
    </div>
  )
}

export default CardProfile