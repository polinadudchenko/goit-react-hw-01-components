import PropTypes from 'prop-types'

export default function User({ name, tag, location, avatar, stats }) {
    return <div className="profile">
            <div className="description">
                <img
                src={avatar}
                alt={name}
                className="avatar"
                />
                <p className="name">{name}</p>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className="stats">
                <li>
                <span className="label">Followers</span>
                <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
                </li>
                <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.quantity}</span>
                </li>
            </ul>
            </div>
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
    /* stats: PropTypes.shape({
    followers: PropTypes.string,
        views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired 
  })*/
}