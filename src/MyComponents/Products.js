import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Products = ({products}) => {

  useEffect(() => {
    AOS.init();
  }, [])


  const isEven = (index)=>(index%2===0)

  return (
    <div className="pt-3 pb-3 products" id="products">
      <h4 className="mb-3">Products</h4>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-4 row-cols-xl-4 g-4" >
          {products.map((item, index) => {
            return (
              <div className="col" data-aos={index%2===0?"fade-up-right":"fade-up-left"} key={item.name} >
              {/* <div className="col" key={item.name} > */}
                <div className="card" >
                  <img src={item.img} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}

         
        </div>
      </div>
    </div>
  );
};
