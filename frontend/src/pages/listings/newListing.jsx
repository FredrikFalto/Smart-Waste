import React from 'react'

import { format } from 'date-fns'

import Navbar from '../../components/navbar/navbar'

const newListing = () => {
    const todaysDate = format(new Date(), 'yyyy-MM-dd')

    return (
        <div>
            <Navbar />

            <div className='container mx-auto px-4 pb-20'>
                <form action=''>
                    <label htmlFor='dish'>Maträtt</label>
                    <input
                        type='text'
                        id='dish'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <label htmlFor='ingredients'>
                        Ingredienser (en per rad)
                    </label>
                    <textarea
                        id='ingredients'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                        cols='30'
                        rows='6'
                    ></textarea>
                    <label htmlFor='allergens'>Allergener</label>
                    <input
                        type='text'
                        id='allergens'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <label htmlFor='category'>Select an option</label>
                    <select
                        id='category'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    >
                        <option defaultValue='Välj en kategori'>
                            Välj en kategori
                        </option>
                        <option value='Kött'>Kött</option>
                        <option value='Vegetariskt'>Vegetariskt</option>
                        <option value='Fisk'>Fisk</option>
                        <option value='Kyckling'>Kyckling</option>
                    </select>
                    <label htmlFor='portions'>Select an option</label>
                    <select
                        id='portions'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    >
                        <option defaultValue='Antal portioner'>
                            Antal portioner
                        </option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                    <label htmlFor='extrainfo'>Extra info</label>
                    <textarea
                        id='extrainfo'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                        cols='30'
                        rows='6'
                    ></textarea>
                    <label htmlFor='link'>HelloFresh länk</label>
                    <input
                        type='text'
                        id='link'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <label htmlFor='imglink'>Bildlänk</label>
                    <input
                        type='text'
                        id='imglink'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <label htmlFor='price'>Pris (kr)</label>
                    <input
                        type='text'
                        id='price'
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <label htmlFor='expirationdate'>Utgångsdatum</label>
                    <input
                        type='date'
                        id='expirationdate'
                        defaultValue={todaysDate}
                        className='border border-slate-400 rounded w-full p-2 px-1'
                    />
                    <button
                        type='submit'
                        className='w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 mt-5 text-sm font-medium text-white'
                    >
                        Lägg till annons
                    </button>
                </form>
            </div>
        </div>
    )
}

export default newListing
