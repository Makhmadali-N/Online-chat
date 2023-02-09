import React from 'react'


function HeaderComponent({selectedContact}) {

  return (
    <div className='header-wrapper'>
      <div><img className='header-avatar' src={selectedContact.img} alt="" /></div>
      <div className='header-name'>{selectedContact.name}</div>
      <div>{selectedContact.lastname}</div>
    </div>
  )
}

export default HeaderComponent