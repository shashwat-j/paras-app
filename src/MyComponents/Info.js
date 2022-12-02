import React from 'react'

export const Info = (props) => {

  return (
    <>
    <div className='pt-3 pb-2 info d-grid gap-2' >

        <h6 className="mt-3"><b>Deals In:</b> VENEER, FLUSH DOOR, SALWOOD, PLYWOOD, HDHMR BOARD, BLOCKBOARD, CHARCOAL SHEET, LAMINATES, WPC BOARD, PVC BOARD, CEMENT FIBRE BOARD, SUNMICA, MOULDINGS, FEVICOL</h6>
        {/* <h5>WE ARE AUTHORISED DEALERS OF <strong className="text-danger">SUPA</strong> PLYWOODS, BOARDS & FLUSH DOORS</h5> */}
        
        <a href="tel: +919927261789" className='info-a' >
        <button type="button" className="btn info-btn">
            <i className="fa-solid fa-phone fa-lg mx-3" style={{color:'green'}}></i>  
            +91 9927261789
        </button>
        </a>
        
        <a href="https://wa.me/919927261789?text=Hi" className='info-a' id="ScrollToHereForProducts">
        <button type="button" className="btn info-btn">
            <i className="fa-brands fa-whatsapp mx-3 fa-lg" style={{color:'green'}}  ></i>
            Message On WhatsApp
        </button>
        </a>

        <a href={props.location} className='info-a' >
        <button type="button" className="btn info-btn" >
            <i className="fa-solid fa-location-dot mx-3 fa-lg" style={{color:'#CC0000'}}  ></i>
            Timber Market, Main Noida Road, Dallupura, Delhi-110096 
        </button>
        </a>

    </div>
    </>
  )
}
