import PropTypes from 'prop-types';

export const Contacts = ({ contacts, filter = '', delContact }) => {
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Contacts</h2>
      <ul>
        {filtredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <button type="button" onClick={() => delContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  delContact: PropTypes.func.isRequired,
};
