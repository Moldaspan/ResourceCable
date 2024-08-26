import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +7 707 981 20 81</label>
            <i className='fa fa-envelope'></i>
            <label>rkabkz@mail.ru</label>
          </div>
          <div className='right row RText'>
            <label>FAQ</label>
            <label>Помощь</label>
            <label>🡃 RU</label>
            <label>🡃 ₸</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
