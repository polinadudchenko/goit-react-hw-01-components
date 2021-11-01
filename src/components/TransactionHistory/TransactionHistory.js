import PropTypes from 'prop-types'
import s from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
    return <table className={s['transaction-history']}>
                <thead className={s['transaction-title']}>
                    <tr className={s['transaction-title__line']}>
                    <th className={s['transaction-title__column']}>Type</th>
                    <th className={s['transaction-title__column']}>Amount</th>
                    <th className={s['transaction-title__column']}>Currency</th>
                    </tr>
                </thead>
                <tbody className={s['transaction-body']}>
            {items.map(({id, type ='Unknown Type', amount, currency}) => 
                        <tr key={id} className={s['transaction-body__line']}>
                            <td className={s['transaction-body__column']}>{type}</td>
                            <td className={s['transaction-body__column']}>{amount}</td>
                            <td className={s['transaction-body__column']}>{currency}</td>
                        </tr>
            )}
            </tbody>
    </table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }))
}