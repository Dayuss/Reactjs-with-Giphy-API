import React,{Component} from 'react';

class Searchbox extends Component{

    render(){
        const {onChange,search,onEnter}=this.props;
        return (
            <div className="box pt-6">
                <div className="box-wrapper">
                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                        <button className="outline-none focus:outline-none"><svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                        <input 
                            type="search" 
                            value={search} 
                            onChange={(e)=>onChange(e.target.value)}
                            onKeyDown = {
                                (event) => {
                                    if (event.key === 'Enter') {
                                        onEnter();
                                    }
                                }
                            }
                            placeholder="Search Giphy" 
                            className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent" 
                            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Searchbox;