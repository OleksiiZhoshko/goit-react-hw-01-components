import PropTypes from 'prop-types';
import css from './frendList.module.css';
import styled from 'styled-components';

const VariantColor = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => (props.variant ? 'green' : 'red')};
`;

// function IsOnline({ isOnline }) {
// if (isOnline === true) {
//   return `#${080}`;
// }
// }

function FriendItem({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <VariantColor variant={isOnline} />
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export const FriendList = ({ friends }) => (
  <section>
    <ul className={css.list}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  </section>
);

// IsOnline.propTypes = {
//   isOnline: PropTypes.bool.isRequired,
// }

FriendItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
