import { useNavigate, useRouteError } from "react-router-dom"
const ShowError = () => {
    const errorMessage = useRouteError();
    console.log("Error Here: ",errorMessage);
    const navigateBackToHome = useNavigate();
    const handleNavigateBackToHome = ()=>
        {
            navigateBackToHome('/')
        }
    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <h1  className="text-7xl text-red-800 mt-20">Oops!!</h1>
            <p className="text-2xl text-blue-400 ">{errorMessage.statusText || errorMessage.message}</p>
            <p className="text-2xl  text-blue-400 ">{errorMessage.data}</p>
            {
                (errorMessage.status === 404 && <div>
                        <h1 className="text-4xl text-center text-purple-600">Data is not found  according to {errorMessage.status}</h1>
                </div>)
            }
            <button onClick={handleNavigateBackToHome} className="bg-green-500 hover:bg-green-900 hover:font-bold py-3 rounded-xl w-[150px] text-white">Go Home</button>
        </div>
    );
};
export default ShowError;