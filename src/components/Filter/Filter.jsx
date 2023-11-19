import css from 'components/Filter/Filter.module.css';

export const Filter = ({ filter, onSetFilter }) => {
  return (
    <div className={css.div}>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        className={css.input}
        name="filter"
        type="text"
        value={filter}
        onChange={onSetFilter}
      />
    </div>
  );
};
