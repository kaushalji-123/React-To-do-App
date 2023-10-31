import { useState } from "react";
import useEmailValidation from "./hooks/UseEmailValidation";

function Form()
{
    const [name,setName] = useState("");
    const [email,error,setEmail] = useEmailValidation({email: "", error: false});

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log("Email",email);
        console.log("Error",error);
    }

    return(
        <div className="max-w-md w-full bg-white shadow-lg rounded-md p-4">
            <h1 className="text-lg text-center">Email Form</h1>
            <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setName(e.target.value)} placeholder="John Doe" required/>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="johndoe@example.com" required/>
                    <p className="text-sm text-red-500">
                        {
                            error && "Invalid Email"
                        }
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <button type="submit" className="text-emerald-500 border border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;