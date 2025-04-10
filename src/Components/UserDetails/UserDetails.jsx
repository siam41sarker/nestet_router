import { useLoaderData, useNavigate, useParams } from "react-router-dom";
const UserDetails = () => {
  const navigateData = useNavigate();
  const {userId} = useParams();
  console.log("My Route: ",userId);
  const handleNavigation = ()=>
    {
        navigateData(-1);
    }
  const user = useLoaderData();
  const { id, name, website,username,email,address } = user;
  const {street,city} = address;
  return (
    <div className="mt-10 w-2/3 bg-gray-500  border border-solid border-slate-400 rounded-xl shadow-2xl py-5 mx-auto">
      <div className="w-11/12 md:w-2/3 flex flex-col gap-5 p-10 mx-auto border border-solid border-blue-200 bg-purple-700 text-white rounded-xl shadow-xl">
        <h1> Details of User: {id} </h1>
        <p>Name: {name}</p>
        <p>Website:{website}</p>
        <p>Username: {username}</p>
        <p>Email: {email} </p>
        <p>Street: {street}</p>
        <p>City: {city}</p>
        <button onClick={handleNavigation} className="bg-green-500 hover:bg-green-900 hover:font-bold py-3 rounded-xl">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
