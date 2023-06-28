import axios from "axios";
import { useQuery } from "react-query";
 

const MusicCard = () => {

  const {data,isLoading,error} = useQuery('') 
    
  return (
    <div className='musicCard'>
        <div className="imgContainer">
            <img src="" alt="" />
        </div>

        <button>
            Download
        </button>
    </div>
  )
}

export default MusicCard