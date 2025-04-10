import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header/Header";
import Footer from "../Footer/Footer";
import { Audio } from 'react-loader-spinner'
const Home = () => {
  const navigation = useNavigation();
  const loc = useLocation();
  console.log(loc);
  return (
    <div>
      <Header></Header>
      <div className="bg-purple-400 text-white font-bold text-center p-5 text-3xl">
        <h1>This is Home Page</h1>
      </div>
      {navigation.state === "loading" ? (
        <div className=" my-16 mx-auto w-20 p-2 text-2xl">
          <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Home;
