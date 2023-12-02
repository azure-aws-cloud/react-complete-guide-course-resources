import reactImg from "../assets/react-core-concepts.png";
import {userData} from "../App";
const reactDescriptions =['Fundamentals','Crucial','Core'];
function getRandomInt(max){
    return Math.floor(Math.random()*(max+1));
}

export default function Header() {
    const description = reactDescriptions[getRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are
                going to build!
            </p>
            <h2>
                Welcome {userData.firstname}
            </h2>
            <p>
                {userData.title}
            </p>
        </header>
    );
}