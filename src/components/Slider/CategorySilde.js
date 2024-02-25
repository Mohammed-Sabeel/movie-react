import React from 'react'
import { useEffect } from 'react'
import { movieData } from '../../Datas'
import Card from '../Card/Card'

const CategorySilde = () => {

    const getCategory = (data, property) => {
        let newVal = data.map((currItem) => currItem[property]);

        newVal = [... new Set(newVal)];

        return newVal;
    }



    const filterCategory = getCategory(movieData, "category")



    

    return (
        <div>

            {
                filterCategory ?
                    <>
                        {
                            filterCategory.map((currItem, index) => {
                                return (
                                    <>
                                        <div className='my-3'>
                                            <h5 className='text-capitalize'>{currItem}</h5>

                                        </div>

                                  <Card  data={movieData.filter((item)=>item.category==currItem)}/>

                                    </>
                                )
                            })

                        }

                    </> : <div className='text-white'>Loading....</div>
            }


        </div>
    )
}

export default CategorySilde