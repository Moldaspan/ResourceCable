import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Бытовая техника",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Инструменты",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Канцелярские товары",
    },
    {
      cateImg: "./images/category/cat-2.png",
      cateName: "Одежда и аксессуары",
    },
    {
      cateImg: "./images/category/cat-1.png",
      cateName: "Товары для пикника и сада",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Магазин подарков </h1>
          <h1>Магазин</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Просмотреть все подарки</button>
        </div>
      </div>
    </>
  )
}

export default Catg
