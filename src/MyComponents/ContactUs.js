import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export const ContactUs = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='footer pb-3' id='reachUs'>
        <h4 className='pt-3' data-aos="zoom-out-down">About Us</h4>
        <hr className='line'></hr>
        <p className='mx-2 mt-n1' data-aos="zoom-out-up">
          With years of experience, we are a trusted supplier and established dealer of high-quality wood and panel products, specializing in Plywood, Flush Doors, HDHMR, WPC Boards, Sunmica, PVC Boards, Laminates, Mouldings, Pine Wood, Marandi Wood, and Timber. Serving Delhi, Noida, Ghaziabad, and Haryana, our commitment to excellence and reliability has made us a go-to provider for durable and stylish building materials. Whether for residential or commercial needs, we prioritize quality, value, and customer satisfaction in every product we offer.
        </p>

        <h4 className='mt-4' data-aos="zoom-out-down">Reach Us</h4>
        <hr className='line'></hr>
        {/* <p className='mb-0 mt-n1'>ADDRESS:</p> */}
        <p className='mt-n1' data-aos="zoom-out-up">Main Noida Road, Near Chiila Sport Complex, Dallupura, Mayur Vihar Phase 3, Delhi</p>
       
        <div className="mapouter m-2 border border-white rounded me-auto ms-auto"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=shri paras plywood dallupura&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://formatjson.org/">format json</a></div></div>
         <a id='contactno' href='tel: +919927261789'>CONTACT NO: +91 9927261789</a>
    </div>
  )
}
