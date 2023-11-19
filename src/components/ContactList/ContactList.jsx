import { ContactListItem } from './ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.length ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItem
            id={id}
            key={id}
            name={name}
            number={number}
            onDeleteContact={deleteContact}
          />
        ))
      ) : (
        <p>Contact list is empty</p>
      )}
    </ul>
  );
};
