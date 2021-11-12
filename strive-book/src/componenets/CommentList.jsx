import { ListGroup } from "react-bootstrap"
import SingleComment from "./SingleComment"

const CommentList = ({commentsTodisplay}) =>(
    <ListGroup>
        {
            commentsTodisplay.map(comment =>(
             
                  <SingleComment comment ={comment}/>  
          
            ))
        }


</ListGroup>
)
export default CommentList ;