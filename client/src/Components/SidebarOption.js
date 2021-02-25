import React from 'react'

function SidebarOption({Icon,num,text,selected}) {
    return (
        <div className={`sidebar__option ${selected&& "sidebar__option--active"}`}>
            <Icon/>
            <h3>{text}</h3>
            <h3>{num}</h3>
        </div>
    )
}

export default SidebarOption
