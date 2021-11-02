import PropTypes from 'prop-types'
import s from './FriendListItem.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    const statusOnline = 'green';
    const statusOffline = 'red';
    return <li className={s.item}>
            <span className={s.status} style={{backgroundColor: isOnline ? statusOnline : statusOffline}}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
       <p className={s.name}>{ name }</p>
        </li>
}

FriendListItem.defaultProps = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}