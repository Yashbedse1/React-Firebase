import React from 'react'
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {MdLocationOn, MdEdit} from 'react-icons/md';
import {FaTrash} from 'react-icons/fa';

const ListingItem = ({listing, id, onEdit, onDelete }) => {
  return (
    <li className='bg-white relative flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition duration-150 ease-in-out m-[10px]'>
        <Link className='contents' to={`/category/${listing.type}/${id}`}>
            <img className='h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in' 
              src={listing.imgUrls[0]} 
              alt="" 
              loading='lazy'
            />
            <Moment className='absolute top-2 left-2 bg-[#3377cc] rounded-md px-2 py-1 shadow-lg text-white uppercase text-xs font-semibold'
             fromNow>
              {listing.timestamp?.toDate()}
            </Moment>
            <div className='w-full p-[10px] '>
              <div className='flex items-center space-x-1'>
                <MdLocationOn className='h-4 w-4 text-green-600'/>
                <p className='font-semibold text-sm mb-[2px] text-gray-600 truncate'>{listing.address}</p>
              </div>
              <p className='font-semibold m-0 truncate text-xl'>{listing.name}</p>
              <p className='text-[#457b9d] mt-2 font-semibold '>${listing.offer ? listing.discountedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                : listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                {listing.type === "rent" && " / month"}
              </p>
              <div className='flex items-center mt-[10px] space-x-3'>
                <div className='flex items-center space-x-1'>
                  <p className='font-bold text-xs'>{listing.bedrooms > 1 ? `${listing.bedrooms} Beds` : "1 Bed"}</p>
                  <p className='font-bold text-xs'>{listing.bathrooms > 1 ? `${listing.bathrooms} Baths` : "1 Bath"}</p>
                </div>
              </div>
            </div> 
        </Link>
        {onDelete && (
          <FaTrash 
            className='absolute bottom-2 right-2 h-[14px] cursor-pointer' 
            onClick={() => onDelete(listing.id)}
          />
        )}
        {onEdit && (
          <MdEdit 
            className='absolute bottom-2 right-7 h-[14px] cursor-pointer' 
            onClick={() => onEdit(listing.id)}
          />
        )}
    </li>
  )
}

export default ListingItem;
