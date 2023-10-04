import DragAndDrop from "@/app/components/DragAndDrop";


export default async function AddInvoice() {
 
  return (
    <div className="w-full min-h-[100vh] p-4">
        <h1 className="mb-4">New Invoice</h1>
        <DragAndDrop />
    </div>
  );
}