import { Component } from "react";
import CommentList from "./CommentList"
import AddComment from "./AddComment"
import Loading from "./Loading";
import Error from "./Error";


class CommentArea extends Component{
    state ={
        comments:  [],
        isLoading :true ,
        isError :false,
    }

  componentDidMount = async()=>{
    try {
        let response  = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
            headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2MzY2NjY3MjIsImV4cCI6MTYzNzg3NjMyMn0.w-TT8koXj_eiNn_f6L0UwGnPuQYr5x2D71p1-CS3FeM"
            }
            })
          if(response.ok){
             let comments = await  response.json ()
             this.setState({comments:comments, isLoading:false ,isError :false})
            }else{
                console.log("error")
                this.setState({ isLoading:false,isError :true})
            }
    } catch (error) {
        console.log("error")
        this.setState({ isLoading:false , isError :true})
    }

  }

    //rendering 
    render (){
        return <div>
             {this.state.isLoading && <Loading/>}
             {this.state.isError && <Error/>}
            <AddComment asin={this.props.asin}/>
           
            <CommentList commentsTodisplay={this.state.comments}/>
            </div>

        
    }
}
export default CommentArea;