import React, { useState } from 'react'
import axios from 'axios'

const PostForm = (props) => {
    console.log(props, 'this is props');
    const [data, setData] = useState([]);

    const [state, setState] = useState(
        props.isEditing ? {
            no_ofWorkers: props.currele.no_ofWorkers,
            salary: props.currele.salary,
            title: props.currele.business_title,
            desc: props.currele.desc,
            location: props.currele.business_location,
            phone_no: props.currele.business_phone_no
        } :
            {
                no_ofWorkers: '',
                salary: '',
                title: '',
                desc: '',
                location: '',
                phone_no: ''

            }
    )
    // const [state, setState] = useState({
    //      no_ofWorkers: '',
    //      salary:'',
    //      title:'',
    //      desc:'',
    //      location:'',
    //      phone_no:''
    //  }
    // )
    const DataOfCurrPost = (ele) => {
        axios.get("http://localhost:9000/EditPost?sno=" + ele.SNO, {
            params: {
                id: ele.id,
            }
        }
        ).then((res) => {
            console.log(res.data[0]);
            setData(res.data)
            console.log(data, "dsjkbfbs");
        }).catch((err) => {
            console.log(err);
        })
    }
    const user_type = localStorage.getItem("user_type")
    const selectField = ["--Select--", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'More then 10']

    const [userId, setUserId] = useState()

    let email = localStorage.getItem("user");
const UpdatePost=()=>{
    console.log(state,props.currele);
    if (state.title && state.salary && state.location && state.no_ofWorkers && state.desc && state.phone_no) {
        axios.post("http://localhost:9000/UpdatePost", {
            sno:props.currele.SNO,
            state: state,
            businessman_id: props.currele.businessman_id 
        }).then((data) => {
            console.log(data,"responce of update post");
            if (data.data === "Post Updated Successfully.") {
                // navigate("/home")
                window.location.reload(false);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    else {
        alert("Fill all fields!")
    }

}

    const postjob = () => {
        console.log(state);
        if (state.title && state.salary && state.location && state.no_ofWorkers && state.desc && state.phone_no) {
            axios.post("http://localhost:9000/post_job", {
                state: state,
                email: email,
                businessman_id: userId
            }).then((data) => {
                console.log(data);
                alert(data.data);
                if (data.data === "Job Post Successfully.") {
                    // navigate("/home")
                    window.location.reload(false);
                }
            }).catch((err) => {
                console.log(err);
            })
        }

        else {
            alert("Fill all fields!")
        }
    };
    const handelChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        })
    };
    React.useEffect(() => {
        get_data()
        DataOfCurrPost(props.currele)

    }, []);
    const get_data = () => {
        axios.get('http://localhost:9000/getProfiles?email=' + email).then((data) => {
            setUserId(data.data[0].id);
        })
    }
    return (
        <div className="modal fade" id={"postjob"+(props.currele.SNO ? props.currele.SNO :"")} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.isEditing ? 'Edit Post' : 'Post Job'}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Title:<input type="text" className="form-control" name="title" value={state.title} onChange={handelChange} />
                        Location:<input type="text" className="form-control" name="location" value={state.location} onChange={handelChange} />
                        Workers:
                        <select className='form-control' name="no_ofWorkers" id="" value={state.no_ofWorkers} onChange={handelChange}>
                            {selectField.map((currele) => {
                                return (
                                    <option value={currele}>{currele}</option>
                                )
                            })}
                        </select>
                        Salary in Rupees:<input type="text" className="form-control" name="salary" value={state.salary} onChange={handelChange} />
                        Business Contact Number:<input type="tel" className="form-control" name="phone_no" maxLength={10} value={state.phone_no} onChange={handelChange} />
                        Description:<textarea className='form-control' name="desc" id="desc" rows="3" value={state.desc} onChange={handelChange}></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={props.isEditing ? UpdatePost:postjob}>{props.isEditing ?'Update':'Post'}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostForm