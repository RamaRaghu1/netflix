import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
const Browse=()=>{
const showGptSearch=useSelector(store=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
    return(
        <div>
            <Header/>

            {
              showGptSearch?  <GptSearch/>:
              <>
                <MainContainer/>
            <SecondaryContainer/>
            <Footer/>
              </>

            }
           
          
            {/* 
                MainContainer
                - videoBackground
                - VideoTitle
                SecondaryContainer
                 - MovieList*n
                   -cards*n
                   
            */}



        </div>
    )
}

export default Browse;