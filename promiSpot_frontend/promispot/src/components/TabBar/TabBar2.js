import React from 'react'
import './TabBar2.scss'

export default function TabBar2() {
  return (
      <nav class="menu">

<input type="radio" name="nav-item" id="m-home" checked/><label for="m-home">Home</label>
<input type="radio" name="nav-item" id="m-search"/><label for="m-search">Search</label>
<input type="radio" name="nav-item" id="m-notification"/><label for="m-notification">Notification</label>
<input type="radio" name="nav-item" id="m-favorites"/><label for="m-favorites">Favorites</label>
<input type="radio" name="nav-item" id="m-profile"/><label for="m-profile">Profile</label>

<div class="selector"></div>
</nav>
  )
}
