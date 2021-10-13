import React from 'react';
import friends from './friends.json';


const FriendListItem =(props, name)=>
{	
	let nameclass;
	if(props.dryg.isOnline){
		nameclass='online';
	}else nameclass='ofline';
	let namaewa=JSON.stringify(name);
	console.log(namaewa)
	
	return (
		<div className='item'>
			
			<div className={'indicator '+ nameclass}></div>	
			<img src={props.dryg.avatar} alt="" />
			<div className='name'>{props.name}</div>
		</div>

	);
}
export default FriendListItem;