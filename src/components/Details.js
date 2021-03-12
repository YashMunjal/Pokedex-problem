import React,{useParams} from 'react'

function Details({id}) {
    console.log(id);
    return (
        <div>
            <h1>{id}</h1>
            <h1>The Details are as follows</h1>
        </div>
    )
}

export default Details
