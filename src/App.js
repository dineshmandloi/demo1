import './App.css';
import Header from './components/Header/header';
import MainBanner from './components/section01/MainBanner';
import ChoosPro from './components/section02/ChoosPro';
import Features from './components/features/Features';
import Demo001 from './components/fedemo01/Demo001';

function App(props){
     let name="Rameshwar";


     return(
        <div>
     <p>hello {name}</p>  
         <Header></Header>
       
         <MainBanner/>
         <ChoosPro/>         
         <Features/>
         <Demo001/>



         </div> 
    );
}
export default App;