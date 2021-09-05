import React,{Component} from 'react';
import Ironman from './ironman.png';
import Search from './search.png';

class Button extends Component{
    render(){
        const {type,title,onClick}=this.props
        return (
          <button 
              type="button" 
              onClick={onClick}
              className={
                `${type==='search'?'px-11 md:px-20 bg-gray-900':'px-10 md:px-20 bg-red-600'} rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex`
              }
          >
              <img 
                src={type==='search'?Search:Ironman} 
                className={`w-20 h-25 ${type==='search'?'py-5':'py-2'}`}
                alt="Menu Icon"
                />
              <span 
                className={`ml-3 py-12 md:py-11 ${type==='search'?'text-2xl md:text-3xl':'text-3xl md:text-4xl'}`}>
                  {title}
              </span>
          </button>
        );
    }
}

export default Button;