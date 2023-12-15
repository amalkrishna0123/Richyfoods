import React from 'react'

const Pagination = ({filterdish, itemsPerPage, setCurrentPage}) => {

    let itemPage = []
    // console.log('Filtered Dishes are',filterdish)
    for(let i=1;i<=Math.ceil(filterdish.length / itemsPerPage) ;i++){
        itemPage.push(i)
    }
    const showTheseDishes = (event) =>{
        let showNextPage = event.target.id
        setCurrentPage(showNextPage)

    }
  return (
    <>
        <div className=' flex items-center justify-items-center justify-center w-full h-full my-5'>
            <ul className=' flex items-center justify-items-center justify-center gap-1'>
                {itemPage.map((item)=>(
                    <li id={item} onClick={showTheseDishes} className=' py-1 px-2 rounded-sm borderpage font-bold text-slate-800 cursor-pointer'>{item}</li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Pagination
