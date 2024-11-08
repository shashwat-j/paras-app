import React from 'react'

export const Info = (props) => {

  return (
    <>
    <div className='pt-3 pb-2 info d-grid gap-2' >
      {/* <div class="w-lg-75 w-xl-75 ms-lg-auto me-lg-auto ms-xl-auto me-xl-auto"> */}

        <h6 className="mt-3"><b>Deals In:</b> VENEER, FLUSH DOOR, SALWOOD, PLYWOOD, HDHMR BOARD, BLOCKBOARD, CHARCOAL SHEET, LAMINATES, WPC BOARD, PVC BOARD, CEMENT FIBRE BOARD, SUNMICA, MOULDINGS, FEVICOL</h6>
        {/* <h5>WE ARE AUTHORISED DEALERS OF <strong className="text-danger">SUPA</strong> PLYWOODS, BOARDS & FLUSH DOORS</h5> */}
        
      <div itemscope itemtype="https://schema.org/Organization">
        <span className='d-none' itemprop="name">Shri Paras Plywood</span>
        <a href="tel:+919927261789" itemprop="telephone">
          <button type="button" className="btn info-btn">
            <i class="fa-solid fa-phone fa-lg mx-3" aria-hidden="true" style={{color: "green"}}></i>
            +91 9927261789
          </button>
        </a>
      </div>
        
        <a href="https://wa.me/919927261789?text=Hi" target="_blank" className='info-a' id="ScrollToHereForProducts">
        <button type="button" className="btn info-btn">
            <i className="fa-brands fa-whatsapp mx-3 fa-lg" style={{color:'green'}}  ></i>
            Message On WhatsApp
        </button>
        </a>

        <a href={props.location} target="_blank" className="info-a" rel="noopener noreferrer">
          <button type="button" className="btn info-btn" itemScope itemType="https://schema.org/Place">
            <i className="fa-solid fa-location-dot mx-3 fa-lg" style={{ color: '#CC0000' }}></i>
            <span itemProp="name">Timber Market, Main Noida Road, Dallupura, Delhi-110096</span>
            <meta itemProp="address" content="Timber Market, Main Noida Road, Dallupura, Delhi-110096" />
          </button>
      </a>

        </div>
    {/* </div> */}
    </>
  )
}
