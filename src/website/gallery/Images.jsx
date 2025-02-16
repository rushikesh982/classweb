import React from "react";
import "./gallery.css";

const data = [
  {
    img: "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-2062.jpg",
  },
  {
    "img":'https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1686.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1653.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1976.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1915.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1536.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1528.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1699.jpg'
  },
  {
    'img':'https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1755.jpg'
  },
];
export default function Images() {
  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="d-flex align-items-center justify-content-center gap-3">
            <button className="btn btn-danger">All</button>
            <button className="btn btn-light ml-3">jallosh 2022</button>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 imgouter">
        {data.map((item) => {
          return (
            <>
              <div className="imagebox mt-3 ml-3">
                <img src={item.img} alt="" />
                <div className="imageboxinner">
                  <i class="ri-search-2-line"></i>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
