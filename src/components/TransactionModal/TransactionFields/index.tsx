import { ITransactionFieldsProps } from './@types';

const TransactionFields = ({
  transactionType,
  transactionData,
  handleChange,
}: ITransactionFieldsProps) => {
  switch (transactionType) {
    case 'expense':
      return (
        <>
          <input
            name="description"
            value={transactionData.description}
            onChange={handleChange}
            placeholder="Descrição"
          />

          <input
            name="amount"
            value={transactionData.amount}
            onChange={handleChange}
            placeholder="Valor"
            type="number"
          />

          <input
            name="date"
            value={transactionData.date}
            onChange={handleChange}
            placeholder="Data"
            type="date"
          />

          <input
            name="category"
            value={transactionData.category}
            onChange={handleChange}
            placeholder="Categoria"
          />
        </>
      );
    case 'income':
      return (
        <>
          <input
            name="description"
            value={transactionData.description}
            onChange={handleChange}
            placeholder="Descrição"
          />

          <input
            name="amount"
            value={transactionData.amount}
            onChange={handleChange}
            placeholder="Valor"
            type="number"
          />

          <input
            name="date"
            value={transactionData.date}
            onChange={handleChange}
            placeholder="Data"
            type="date"
          />
        </>
      );
    case 'investment':
      return (
        <>
          <input
            name="description"
            value={transactionData.description}
            onChange={handleChange}
            placeholder="Descrição"
          />

          <input
            name="type"
            value={transactionData.type}
            onChange={handleChange}
            placeholder="Tipo"
          />

          <input
            name="bank"
            value={transactionData.bank}
            onChange={handleChange}
            placeholder="Banco"
          />

          <input
            name="amount"
            value={transactionData.amount}
            onChange={handleChange}
            placeholder="Valor"
            type="number"
          />

          <input
            name="date"
            value={transactionData.date}
            onChange={handleChange}
            placeholder="Data"
            type="date"
          />

          <input
            name="maturity"
            value={transactionData.maturity}
            onChange={handleChange}
            placeholder="Vencimento"
          />
        </>
      );
    default:
      return null;
  }
};

export default TransactionFields;
