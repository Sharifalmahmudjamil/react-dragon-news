import logo from "../../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-lg font-normal text-gray-500">Journalism Without Fear or Favour</p>
            <p className="text-xl font-medium text-gray-500">{moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;