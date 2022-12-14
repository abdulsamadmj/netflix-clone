import React,{useEffect,useState} from 'react'
import "./RowPost.css"
import axios from '../../Axios'
import { API_KEY, imageUrl } from '../../Constants/Constants';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
  }, []);
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>{
          return(
            <img className={props.isSmall?'smallPoster':'poster'} src={props.isSmall?`${imageUrl+obj.poster_path}`:`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )
        })}
        </div>
    </div>
  )
}
export default RowPost