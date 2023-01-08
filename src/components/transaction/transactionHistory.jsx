import PropTypes from 'prop-types';
import css from './transaction.module.css';

const Transaction = ({ type, amount, currency }) => (
  <tr className={css.table_rov}>
    <td className={css.table_value}>{type}</td>
    <td className={css.table_value}>{amount}</td>
    <td className={css.table_value}>{currency}</td>
  </tr>
);

export const TransactionHistory = ({ items }) => (
    <table className={css.transaction_history}>
    <thead className={css.table_head}>
      <tr className={css.table_rov}>
        <td className={css.table_value}>TYPE</td>
        <td className={css.table_value}>AMOUNT</td>
        <td className={css.table_value}>CURRENCY</td>
      </tr>
    </thead>
        <tbody className={css.table_body}>
      {items.map(item => (
        <Transaction
          key={item.id}
          amount={item.amount}
          currency={item.currency}
          type={item.type}
          transaction={item}
        />
      ))}
    </tbody>
  </table>
);

Transaction.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
