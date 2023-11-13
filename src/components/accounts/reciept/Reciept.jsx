import RecieptGrid from "./RecieptGrid";
import { RecieptForm } from "./ReciptForm";
const Receipt = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-b-2xl bg-white px-4">
      {/* <Form /> */}
      <h2 className="text-black flex w-full max-w-5xl py-5 text-3xl font-bold capitalize dark:text-white">
        Receipt Voucher
      </h2>
      <RecieptForm />
      <div className="mt-2 w-full max-w-5xl overflow-hidden rounded-b-2xl border border-gray-300">
        <RecieptGrid />
        
      </div>
    </div>
  );
};
export default Receipt;
