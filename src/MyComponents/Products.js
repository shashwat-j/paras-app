import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Products = ({products}) => {

  useEffect(() => {
    AOS.init();
  }, [])


  const isEven = (index)=>(index%2===0)

  const productClick = (name)=>{
    console.log(name)
    window.open(`https://wa.me/919927261789?text=Hi! I'd like to enquire about ${name}`, "_blank")
  }

  return (
    <div className="pt-3 pb-3 products" id="products">
      <h4 className="mb-3">Products</h4>
      <div className="container text-center">
        {products.length>0?<div className="row row-cols-2 row-cols-lg-3 row-cols-xl-3 g-4" >
          {products.map((item, index) => {
            return (
              <div className="col" data-aos={index%2===0?"fade-up-right":"fade-up-left"} key={item.name} >
              {/* <div className="col" key={item.name} > */}
                <div className="card" onClick={()=>{productClick(item.name)}} >
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>:<p className="notFound">No Products Found For The Search Term</p>}
      </div>
    </div>
  );
};
