import React from 'react';
import friends from './friends.json';


const FriendListItem =(props)=>
{	
	let nameclass;
	if(props.friend.isOnline){
		nameclass='online';
	}else nameclass='ofline';
	
	
	return (
		<div className='item'>
			
			<div className={'indicator '+ nameclass}></div>	
			<img src={props.friend.avatar} alt="" />
			<div className='name'>{props.friend.name}</div>
		</div>

	);
}
export default FriendListItem;