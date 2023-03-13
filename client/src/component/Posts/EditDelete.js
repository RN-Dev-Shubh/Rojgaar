import React, { useState } from 'react'
import axios from 'axios';
import PostForm from './PostForm';
const EditDelete = (props) => {
    const [display, setDisplay] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    
    const delete_post = (id, SNO) => {
        console.log(id, SNO, "shubham")
        axios.delete("http://localhost:9000/delete_post?id=" + id, {
            params: {
                SNO: SNO,
            }
        }
        ).then((data) => {
            console.log(data);
            props.setRefresh(!props.refresh)
            // window.location.reload(false)
        }).catch((err) => {
            console.log(err);
        })
    };

    return (
        <>
            <div className="ellipsis" onClick={() => setDisplay(!display)}>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <section className="post_dropdown" style={{ display: display ? 'none' : 'block' }}>
                <div className="edit_post">
                    <button className="btn" data-bs-toggle="modal" data-bs-target={"#postjob"+props.currele.SNO} 
                    // onClick={() => DataOfCurrPost(props.currele)}
                    onClick={()=>{setIsEditing(true)
                        setDisplay(!display)}}
                    >Edit</button>
                </div>
                <div className="delete_post">
                    <button className="btn"
                        onClick={() => delete_post(props.currele.id, props.currele.SNO)}
                    >Delete</button>
                </div>
            </section>
            <PostForm currele={props.currele} isEditing={true} />
        </>
    )
}

export default EditDelete