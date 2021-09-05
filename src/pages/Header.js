import React,{Component} from 'react';
import Logo from './logo.png'
import {  Link } from "react-router-dom";

class Headers extends Component{
    render(){
        const {title}=this.props;
        return (
            <div className="text-center mt-10 ">
                <h3 className="text-2xl tracking-widest text-gray-900 text-center">{title}</h3>
                <Link to="/">
                    <img 
                        src = {Logo}
                        className = "w-60 my-3 mx-auto"
                        alt="Logo"
                        />
                </Link>
            </div>
        )
    }
}

export default Headers;