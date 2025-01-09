import React from 'react'

const contact_form = () => {
    return (
    <div className='flex flex-col justify-center items-center p-10 w-full max-w-full'>
        <form action="@emailto:" method="post">
        <div className="flex flex-col">
            <label htmlFor="name" className="font-extrabold text-[var(--blackish-col)]">Name</label>
            <input type="text" id="name" name="name" placeholder='Name' className="p-2 rounded-md" />
            <label htmlFor="email" className=" font-extrabold text-[var(--blackish-col)]">Email</label>
            <input type="email" id="email" name="email" placeholder='Email' className="p-2 rounded-md" />
            <div className='flex p-5'>
            <input type="checkbox" name="checkbox" id="" className='text-wrap p-1 m-1'/>
            <label htmlFor="checkbox" className=' text-gray-700 text-sm font-medium"'>I agree to receive commercial information from [BOOKNAPCAT]</label>
            </div>
            <button type="submit" className="bg-[var(--main-fo-cl)] text-white font-bold py-3 mt-2 rounded-md">Contact Us NOW!</button>
            </div>
        </form>
    </div>
    )
}

export default contact_form