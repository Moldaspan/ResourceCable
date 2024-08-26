import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Гарантия Качества",
      decs: "Мы предлагаем только проверенные и сертифицированные товары, обеспечивая надежность и долгосрочное использование каждого продукта.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Оптимальная Цена",
      decs: "Наши цены соответствуют качеству и являются одними из самых конкурентоспособных на рынке, обеспечивая вам максимальную выгоду.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Всегда в наличии ",
      decs: "Мы поддерживаем постоянный запас товаров на складе, чтобы вы могли получить нужные продукты в любое время.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Индивидуальный Подход ",
      decs: "Мы уделяем внимание каждому клиенту, предлагая персонализированные решения, которые наилучшим образом удовлетворяют ваши потребности.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
