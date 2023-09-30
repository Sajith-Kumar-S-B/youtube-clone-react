import React from 'react'
import { useNavigate } from "react-router-dom";


function SuggestionKeyword() {
    const navigate = useNavigate();
    const collection = ['Civil Service Exam', 'News', 'G20', 'India', 'USA', 'Chandrayaan-3', 'Music', 'Cricket', 'Football', 'Animal', 'React','Youtube','Development'];
    const searchQueryHandler =(e) => {
        console.log(e);     
        navigate(`/searchResult/${e}`); 
    };


    return (
        <div className='overflow-hidden h-10 my-2 pt-3 hidden md:flex'>
            {collection.map((e, index) => {
                return <span key={index} className='px-3 ml-4 text-center bg-white/[0.2] hover:bg-white text-white hover:text-black hover:font-semibold rounded-lg h-20px' onClick={() => { searchQueryHandler(e) }}>{e}</span>
            })}
        </div>
    )
}

export default SuggestionKeyword;