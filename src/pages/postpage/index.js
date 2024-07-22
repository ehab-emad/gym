import React from 'react'


import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { ADD_TO_CART } from '../../store/cartslic1'



export default function Posts() {
    // const carts = useSelector((state) => state.carts)
    const posts = useSelector((state) => state.posts.postItems)
    console.log(posts)

    const dispatch = useDispatch()


    return (

        <div style={{minHeight:"580px"}}>
        
      
        <div className='posts container '>



            {posts.map((post) => {
                return(<>   <div className='post container'>
                <div className='imges'>
                    <img className='one' src={post.images} alt='.....' />
                    <div className='photos'>
                       


                    </div>
                </div>


                <div className='decription'>

                    <div className='title'><h2>{post.title}</h2> </div>
                    <div className='spacific'>
                    
                        <div className='details'>
                           
                            <div className='category'><span className='dietails-color'></span>{post.category}</div>
                        </div>
                    </div>
                    <div className='prices'>
                        <div><span className='real-price'>{(post.price+100).toFixed(1)}EG</span></div>
                        <div className='mt-2'> <span className='discounted-price'>
                            {post.price}EG

                        </span></div>
                    </div>
                    <div className='buy'>
                        <div className='quantaty'></div>
                        <div className='butns d-flex gap-3 mt-4'>


                            <button class="CartBtn" onClick={() => {
                                dispatch( ADD_TO_CART(post))
                            }}><Link style={{textDecoration:"none"}} to={"/cart"} >
                            <span class="IconContainer">
                                <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000"}} className='cart' />
                            </span>
                            <p class="text">Add to Cart</p></Link>
                            </button>


                        </div>
                    </div>


                </div>

            </div></>)
            }
        )}
             
           


        </div>
{/* : <div className="container empty-cart d-flex flex-culom">
<div className="img"><img src={dryy} /></div>

<div><Link to={'/'} type="button" class="btn btn-success">Go To Shopping</Link></div>
</div> */}

        </div>
    )
}
