import { BankForm } from "./BankForm";
import BankGrid from "./BankGrid";
const Bank = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-b-2xl bg-white px-4">
      {/* <Form /> */}
      <h2 className="text-black flex w-full max-w-5xl py-5 text-3xl font-bold capitalize dark:text-white">
        Bank Index
      </h2>
      <BankForm />
      <div className="mt-2 w-full max-w-5xl overflow-hidden rounded-b-2xl border border-gray-300">
        <BankGrid />
      </div>
    </div>
  );
};
export default Bank;
