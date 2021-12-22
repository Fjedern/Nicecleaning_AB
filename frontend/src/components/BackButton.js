import {useNavigate} from 'react-router';

const BackButton = ()=>{
const navigate = useNavigate();

    return(
        <button className="mt-10 bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate(-1)}>Tillbaka</button>
    );
 }

 export default BackButton;