import { ReconcileForm } from "./ReconcileForm";
import ReconcileGrid from "./ReconcileGrid";
const Reconcile = () => {
  return (
    <div className="flex w-full flex-col items-center rounded-b-2xl bg-white px-4">
      {/* <Form /> */}
      <h2 className="text-black flex w-full max-w-5xl py-5 text-3xl font-bold capitalize dark:text-white">
        Bank Reconcilation
      </h2>
      <ReconcileForm />
      <div className="mt-2 w-full max-w-5xl overflow-hidden rounded-b-2xl border border-gray-300">
        <ReconcileGrid />
      </div>
      
    </div>
  );
};
export default Reconcile;
