import React from 'react'
const ReduceCode = () => {
  return (
    <div>
         {
        arr.map((content)=>{
            console.log(content);
           return <Comp Value={content}/>
        })}
    </div>
  )
}


export default ReduceCode

const arr=[{head:'h1',content:'c1'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
{head:'h2',content:'c2'},{head:'h2',content:'c2'},
];

const Comp=({Value})=>{
    return(
        <div className='card'>
            <h1 className='card-title'>
                {Value.head}
            </h1>
            <p>
                {Value.content}
            </p>
        </div>
    )
}