import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Светильники & Лампы",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Кабель & Провод",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Кабеленесующие системы",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Изделия для монтажа & инструмент",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Прочее оборудование",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Шкафы & Щиты",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Розетки & Выключатели & Коробки",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "IT оборудование",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
