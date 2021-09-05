import React,{Component} from 'react';
import Button from './component/button'
import Header from '../Header'

class Pages extends Component{
    constructor(props) {
        super(props);
        document.title="Get Your Giphy"
    }
    
    render(){
        return (
            <div className="flex flex-col h-screen justify-center items-center">
                <Header
                    title = "WELCOME TO YOUR GIPHY"
                />
                <div className="text-center">
                    <div  className="mb-10"/>
                    <Button 
                        type='ironman'
                        title = 'Iron Man Giphy'
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.history.push({
                                pathname: '/giphy-list',
                                state: {
                                    cari: 'Iron Man' 
                                }
                            })
                        }}
                        />
                    <div className='mt-3'/>
                    <Button
                        type='search'
                        title='Search Your Giphy'
                        onClick={(e)=>{
                            e.preventDefault();
                            this.props.history.push({
                                pathname: '/giphy-list',
                                state: {
                                    cari: ''
                                }
                            })
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Pages;