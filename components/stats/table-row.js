const TableRow = ({ label, link='', value }) => (
  <tr>
    <td width="70%">{label}</td>
    <td>{link.length ? (<a href={link}>{value}</a>) : value}</td>
  </tr>
);

export default TableRow;
