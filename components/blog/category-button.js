const CategoryButton = ({ handleClick, active, label }) => (
  <button
    className={`skillbutton ${active ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </button>
);

export default CategoryButton;
