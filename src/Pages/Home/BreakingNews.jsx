import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
               <Link className="mr-12 text-pink-500" to="/">Match Highlights: Argentina vs France — as it happened   ! Argentina won the WorldCup  Match Highlights: Argentina vs France as...</Link>
               <Link className="mr-12 text-pink-500" to="/">Match Highlights: Argentina vs France — as it happened   ! Argentina won the WorldCup  Match Highlights: Argentina vs France as...</Link>
               <Link className="mr-12 text-pink-500" to="/">Match Highlights: Argentina vs France — as it happened   ! Argentina won the WorldCup  Match Highlights: Argentina vs France as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;