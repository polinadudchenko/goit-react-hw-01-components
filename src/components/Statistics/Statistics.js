import PropTypes from 'prop-types'
import s from './Statistics.module.css'

export default function Statistics({ title, stats }) {
    return <section className={s.statistics}>
        {title && (<h2 className={s.title}>{title}</h2>)}

        <ul className={s['stat-list']}>
            {stats.map(({ id, label, percentage }) => 
                <li key={id} className={s['stat-list__item']} style={{backgroundColor: getBgColor()}}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}%</span>
                </li>)
            }
        </ul>
        </section>
}


Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired ,
    }))
}

function getBgColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
}