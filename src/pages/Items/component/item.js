import React,{Component} from 'react';

class Item extends Component{
    render(){
        const {gif}=this.props
        return (
            <section id="photos">
                <img className="w-full object-none h-64 cursor-pointer hover:bg-gray-700 hover:opacity-75" src={gif} alt="gif content"/>
            </section>
        )
    }
}

export default Item;