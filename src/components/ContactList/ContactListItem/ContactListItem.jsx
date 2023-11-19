import css from 'components/ContactList/ContactListItem/ContactList.module.css';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li id={id} className={css.li}>
      {name}: {number}
      <button className={css.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
