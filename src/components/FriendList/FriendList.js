import s from './FriendList.module.css'
import FriendListItem from '../FriendListItem'

export default function FriendList({ friends }) {
    return (<ul className={s["friend-list"]}>
        {friends.map(({ avatar, name, isOnline, id }) =>
            <FriendListItem key={ id } avatar={avatar} name={name} isOnline={isOnline}/>)}
    </ul>)
}

