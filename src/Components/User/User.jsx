import { Link,useNavigate } from "react-router-dom";
const User = ({ user }) => {
  const { id, username, name, phone, email, address } = user;
  const { city } = address;
  const navigateToUserDetails = useNavigate();
  const handleNavigateToUserDetails = ()=>
    {
        navigateToUserDetails(`/users/${id}`);
    }
  return (
    <div className="w-[300px] flex flex-col p-5 mx-auto border border-solid border-blue-200 bg-purple-700 text-white rounded-xl shadow-xl">
      <div className="flex-grow">
        <h1>User Name: {username}</h1>
        <p>Name: {name}</p>
        <p>Phone Number: {phone}</p>
        <p>Email: {email}</p>
        <p>City: {city}</p>
      </div>
      <div>
        <Link to={`/users/${id}`}>
          <button className="bg-gray-500 hover:bg-gray-900 hover:font-bold p-2 rounded-xl mt-2">
            Show Details
          </button>
        </Link>
        <button onClick={handleNavigateToUserDetails} className="bg-green-500 hover:bg-green-900 hover:font-bold p-2 rounded-xl ml-4">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default User;
