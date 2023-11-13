import TransactionGrid from "./TransGrid";
import { TransactionForm } from "./TransForm";
const Transaction = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-b-2xl bg-white px-4">
      {/* <Form /> */}
      <h2 className="text-black flex w-full max-w-5xl py-5 text-3xl font-bold capitalize dark:text-white">
        Transaction Index
      </h2>
      <TransactionForm/>
      <div className="mt-2 w-full max-w-5xl overflow-hidden rounded-b-2xl border border-gray-300">
        <TransactionGrid />
      </div>
    </div>
  );
};
export default Transaction;
