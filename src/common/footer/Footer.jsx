  import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Ресурс Кабель</h1>
            <p>"Ресурс Кабель" — ваш надежный партнер в мире качественных и долговечных кабелей. Мы обеспечиваем стабильное подключение и высочайший уровень безопасности для вашего оборудования.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>О нас</h2>
            <ul>
              <li>Карьеры</li>
              <li>Наши магазины</li>
              <li>Наши заботы</li>
              <li>Условия и положения</li>
              <li>Политика конфиденциальности</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Забота о клиентах</h2>
            <ul>
              <li>Справочный центр </li>
              <li>Как купить </li>
              <li>Отслеживать ваш заказ </li>
              <li>Корпоративные и массовые закупки </li>
              <li>Возвраты и возмещения </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Связаться с нами</h2>
            <ul>
              <li>ул. Туркебаева 96, Алматы, Казахстан</li>
              <li>Email:  rkabkz@mail.ru</li>
              <li>Phone: +7 707 682 49 45</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
