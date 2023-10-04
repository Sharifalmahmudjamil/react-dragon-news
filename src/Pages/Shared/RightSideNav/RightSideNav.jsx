import { FaGoogle , FaGithub,FaFacebookSquare,FaTwitter,FaInstagram} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
    return (
        <div>
           <div className="p-4 space-y-4 mb-6"> 
           <h2 className="text-xl font-semibold text-center" >Login With</h2>
           <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
             Google
            </button>
           <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
             Github
            </button>

           </div>
           <div className="p-4  mb-6"> 
           <h2 className="text-xl font-semibold text-center mb-4">Find us on</h2>
           <a className="p-4 flex text-lg items-center border rounded-t-lg" href="">
            <FaFacebookSquare className="mr-3"></FaFacebookSquare>
              Facebook
           </a>
           <a className="p-4 flex text-lg items-center border-x" href="">
            <FaTwitter className="mr-3"></FaTwitter>
              Twitter
           </a>
           <a className="p-4 flex text-lg items-center border rounded-b-lg mb-6 " href="">
            <FaInstagram className="mr-3"></FaInstagram>
              Instagram
           </a>

           {/* Q-Zone */}

           <div className="p-4 space-y-4 mb-6 bg-slate-200 rounded-md"> 
           <h2 className="text-xl font-semibold text-center" >Q-Zone</h2>
           <img src={qZone1} alt="" />
           <img src={qZone2} alt="" />
           <img src={qZone3} alt="" />
          

           </div>
          

           </div>
        
           
         
        </div>
    );
};

export default RightSideNav;