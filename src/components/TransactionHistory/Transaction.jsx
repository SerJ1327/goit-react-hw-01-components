import data from '../../transactions.json';
import {
  STransHeadTr,
  STransTable,
  STransTd,
} from './TransactionHistory.styled';

let rowIndex = 0;

export const Transactions = () => {
  return (
    <STransTable>
      <thead>
        <STransHeadTr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </STransHeadTr>
      </thead>
      <tbody>
        <Transaction />
      </tbody>
    </STransTable>
  );
};

const Transaction = () => {
  return data.map(({ id, type, amount, currency }) => {
    rowIndex += 1;
    let bColor = 'white';
    if (rowIndex % 2 === 0) {
      bColor = '#c0c0c0';
    }
    return (
      <tr key={id} style={{ backgroundColor: bColor }}>
        <STransTd>{type}</STransTd>
        <STransTd>{amount}</STransTd>
        <STransTd>{currency}</STransTd>
      </tr>
    );
  });
};
