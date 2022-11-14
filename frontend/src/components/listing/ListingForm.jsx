import React, { useState } from 'react'

import { format } from 'date-fns'

const ListingForm = () => {
    const todaysDate = format(new Date(), 'yyyy-MM-dd')
    const url = 'http://localhost:4000'

    const [dish, setDish] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [allergens, setAllergens] = useState([])
    const [category, setCategory] = useState('')
    const [portions, setPortions] = useState('')
    const [extrainfo, setExtrainfo] = useState('')
    const [link, setLink] = useState('')
    const [imglink, setImglink] = useState('')
    const [price, setPrice] = useState('')
    const [expirationdate, setExpirationdate] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const listing = {
            dish,
            ingredients,
            allergens,
            category,
            portions,
            extrainfo,
            link,
            imglink,
            price,
            expirationdate,
        }

        const response = await fetch(url + '/api/listings', {
            method: 'POST',
            body: JSON.stringify(listing),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }

        if (response.ok) {
            setDish('')
            setIngredients([])
            setAllergens([])
            setCategory('')
            setPortions('')
            setExtrainfo('')
            setLink('')
            setImglink('')
            setPrice('')
            setExpirationdate('')

            setError(null)

            console.log('New listing added', json)

            window.location.replace(`/success`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='dish'>Maträtt</label>
            <input
                type='text'
                id='dish'
                onChange={(e) => setDish(e.target.value)}
                value={dish}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            <label htmlFor='ingredients'>Ingredienser (en per rad)</label>
            <textarea
                id='ingredients'
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                className='border border-slate-400 rounded w-full p-2 px-1'
                cols='30'
                rows='6'
            ></textarea>
            <label htmlFor='allergens'>Allergener</label>
            <input
                type='text'
                id='allergens'
                onChange={(e) => setAllergens(e.target.value)}
                value={allergens}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            <label htmlFor='category'>Select an option</label>
            <select
                id='category'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
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
                onChange={(e) => setPortions(e.target.value)}
                value={portions}
                className='border border-slate-400 rounded w-full p-2 px-1'
            >
                <option defaultValue='Antal portioner'>Antal portioner</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
            </select>
            <label htmlFor='extrainfo'>Extra info</label>
            <textarea
                id='extrainfo'
                onChange={(e) => setExtrainfo(e.target.value)}
                value={extrainfo}
                className='border border-slate-400 rounded w-full p-2 px-1'
                cols='30'
                rows='6'
            ></textarea>
            <label htmlFor='link'>HelloFresh länk</label>
            <input
                type='text'
                id='link'
                onChange={(e) => setLink(e.target.value)}
                value={link}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            <label htmlFor='imglink'>Bildlänk</label>
            <input
                type='text'
                id='imglink'
                onChange={(e) => setImglink(e.target.value)}
                value={imglink}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            <label htmlFor='price'>Pris (kr)</label>
            <input
                type='text'
                id='price'
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            <label htmlFor='expirationdate'>Utgångsdatum</label>
            <input
                type='date'
                id='expirationdate'
                onChange={(e) => setExpirationdate(e.target.value)}
                // value={expirationdate}
                defaultValue={todaysDate}
                min={todaysDate}
                className='border border-slate-400 rounded w-full p-2 px-1'
            />
            {error && (
                <div className='error text-center text-red-600 text-lg'>
                    {error}
                </div>
            )}
            <button
                type='submit'
                className='w-full justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 mt-5 text-sm font-medium text-white'
            >
                Lägg till annons
            </button>
        </form>
    )
}

export default ListingForm
