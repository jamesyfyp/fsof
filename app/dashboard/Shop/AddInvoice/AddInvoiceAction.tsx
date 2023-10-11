'use server'
export default async function AddInvoice(prevState: any, formData: FormData) { 
  const config = {
    region: "us-east-2",
  };
  const file = formData.get('pdf') as File;
  console.log(file)
  return{message:"hirro", status:true}
}