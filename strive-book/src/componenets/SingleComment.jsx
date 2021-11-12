import { ListGroup,Button } from "react-bootstrap"



// fucntion for deleting comment 
const deletecomment =async(asin)=>{
try {
    let response =  await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
     method: "DELETE",
     headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOWFhZmFhY2FhMjAwMTU1MmExZjIiLCJpYXQiOjE2MzY2NjY3MjIsImV4cCI6MTYzNzg3NjMyMn0.w-TT8koXj_eiNn_f6L0UwGnPuQYr5x2D71p1-CS3FeM"
        }
        })
        if (response.ok) {
          
            alert("Comment Deleted");
          } else {
            console.log("error");
            alert("something went wrong it cant be delete");
          }
} catch (error) {
    alert("something went wrong it cant be delete");
}
}

const SingleComment =({comment}) =>(
    <ListGroup.Item key={comment._id}>
      {comment.comment}
      <Button variant ="danger" className="ml-2" onClick={()=>deletecomment(comment._id)}> D</Button>
  </ListGroup.Item>
)
export default SingleComment ;