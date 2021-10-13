import React from 'react';
import { useState } from 'react';

const Profile =(object)=>
{
   return (
<div class="profile">
  <div class="description">
    <img
      src={object.avatar}
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">{object.name}</p>
    <p class="tag">{'@'+object.tag}</p>
    <p class="location">{object.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers </span>
      <span class="quantity">{object.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views </span>
      <span class="quantity">{object.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes </span>
      <span class="quantity">{object.stats.likes}</span>
    </li>
  </ul>
</div>
		
	
  );
}
export default Profile;