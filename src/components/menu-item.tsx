import React from 'react'
type MenuItemProps = {
    nom:string
    href:string
}
export default function MenuItem({nom, href}: MenuItemProps) {
  return (
    <div>
      <a className='text-white text-nowrap hover:text-accent text-lg' href={href}>{nom}</a>
    </div>
  )
}
