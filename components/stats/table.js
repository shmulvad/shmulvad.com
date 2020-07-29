import TableRow from "./table-row";

const Table = ({ data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          key={pair.label}
          label={pair.label}
          value={pair.value}
          link={pair.link}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
