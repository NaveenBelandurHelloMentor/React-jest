import React from 'react'


const DataTest = [
    {
        id:1,
        title:'Text'
    },
       {
        id:2,
        title:'Text_Test'
    },
       {
        id:3,
        title:'Text_Test_Jest'
    }
]


const DynamicTest = () =>{
    return (
        <div>
            <ul>
                {DataTest.map((data)=>{
                    return (
                        <div  key={data.id}>
                        <li>{data.title}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}





export default DynamicTest