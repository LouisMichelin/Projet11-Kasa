import "./Collapse.scss";
import ArrowBack from "../../assets/arrowBack.png";

function Collapse({ id, title }) {
   // const [isShown, setIsShown] = useState(false);

   // function handleClick() {
   //    setIsShown(!isShown);
   //    alert("slt")
   // }

   return (
      <>
         <button key={id} className="MenuButton">
            <div className="MenuTagName">{title}</div>
            <img
               className="MenuTagArrow"
               alt="Flèche vers le haut"
               src={ArrowBack}
            />
         </button>
      </>
   );
}

export default Collapse;
