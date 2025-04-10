import { useLoaderData } from "react-router-dom";
import User from "../User/User";
const Dashboard = () => {
  const usersData = useLoaderData();
  return (
    <div>
      <h1 className="text-5xl font-bold bg-green-400 p-3 mt-5 text-center text-white">
        This is my Dashboard page
      </h1>
      <div className="mt-10 w-2/3 bg-gray-500  border border-solid border-slate-400 rounded-xl shadow-2xl py-5 mx-auto">
          <h1 className="text-2xl text-center text-red-600 font-semibold">Number of users: {usersData.length}</h1>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                {usersData.map(user=><User key={user.id} user={user}></User>)}
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
