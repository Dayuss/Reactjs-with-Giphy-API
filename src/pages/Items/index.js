import React,{Component} from 'react';
import Header from '../Header'
import Item from './component/item'
import Searchbox from './component/Searchbox'
import { connect } from 'react-redux';
import { FetchGiphy } from '../../action/giphy.action';
import Skeleton from 'react-loading-skeleton';


class Pages extends Component{
    constructor(props) {
        super(props);
        this.state={
            search:'',
            datum:[]
        }
    }

    componentDidMount(){
        this.props.FetchGiphy(this.props.location.state.cari)
        this.setState({search:this.props.location.state.cari})
        document.title = this.props.location.state.cari===""?"Iron Man Giphy":"Search Your Giphy"

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.beforeDatum !== nextProps.datum){
            return {
                beforeDatum: nextProps.datum,
                datum: nextProps.datum
            };
        }else return null;
    }


    handleChange(value){
        this.setState({
            search: value
        })
    }

    getSkeleton=()=>{
        const results=[];
        for(let i=0;i<10;i++){
            results.push(<Skeleton height={250} />)
        }
        return results;
    }

    render(){
        const {datum}=this.state;
        return (
            <div className="main">
                <div className="px-4 sm:px-8 lg:px-16 xl:px-20 mx-auto">
                    <div className="hero">
                        <Header
                            title = {(this.state.search!=='Iron Man'?"Search Your":"Iron Man")+" Giphy"}
                        />
                        {
                            this.state.search!=='Iron Man'?(
                                <Searchbox
                                    search={this.state.search}
                                    onChange={(value)=>this.handleChange(value)}
                                    onEnter={()=>this.props.FetchGiphy(this.state.search)}
                                />
                            ): ""
                        }
                        <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                            {
                                this.props.isLoading ? 
                                    this.getSkeleton()
                                :
                                    datum.length>0?
                                        datum.map(item=>
                                            <Item gif={item.images.downsized_medium.url}/>
                                        )
                                    :""
                            }
                        </div>
                        {
                            datum.length===0?(
                                <div className='text-center'>No Result Found.</div>
                            ):""
                        }
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.giphyReducer.isLoading,
        datum: state.giphyReducer.datum,
    }
}

export default connect(mapStateToProps, { FetchGiphy })(Pages);
