import React from 'react'

const ContactPage = () => {



  return (
    <div>


    <div className="container-xxl" style={{padding: '5rem 0',}}>
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s" style={{textAlign: 'center',}}>
          <h6 className="text-primary text-uppercase">
             Contact Us 
          </h6>
          <h1 className="mb-5" style={{marginBottom: '5rem',}}>
            Gửi câu hỏi cho chúng tôi
          </h1>
        </div>
        <div className="row g-4" style={{rowGap: '1.5rem',}}>
          <div className="col-12">
            <div className="row gy-4">
              <div className="col-md-4" style={{flex: '1',padding: '1rem',}}>
                <div className="bg-light d-flex flex-column justify-content-center p-4" style={{backgroundColor: 'light',}}>
                  <h5 className="text-uppercase">
                     Email 
                  </h5>
                  <p className="m-0">
                  ✉ autofast@gara.com
                  </p>
                </div>
              </div>
              <div className="col-md-4" style={{flex: '1',padding: '1rem',}}>
                <div className="bg-light d-flex flex-column justify-content-center p-4" style={{backgroundColor: 'light',}}>
                  <h5 className="text-uppercase">
                     Số điện thoại 
                  </h5>
                  <p className="m-0">
                  ☎ +84 988 678 999



                  </p>
                </div>
              </div>
              <div className="col-md-4" style={{ flex: '1',
    padding: '1rem',}}>
                <div className="bg-light d-flex flex-column justify-content-center p-4" style={{backgroundColor: 'light',}}>
                  <h5 className="text-uppercase">
                     Fax 
                  </h5>
                  <p className="m-0">
                  ✉ +84 988 678 999

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
            <iframe
              className="position-relative rounded w-100 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.656684538188!2d105.75629878030117!3d20.96599743938878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313452d8fd37de2f%3A0xe379ee8761c8eb1!2zUXVhbmcgVHJ1bmcsIEjDoCDEkMO0bmcsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1695492499218!5m2!1svi!2s"
              frameBorder="0"
              style={{minHeight: '350px',
              border: '0',}}
              aria-hidden="false"
            ></iframe>
          </div>
          <div className="col-md-6" style={{marginBottom: '4rem',}}>
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <p className="mb-4">
                Nếu bạn có bất kỳ thắc mắc hoặc câu hỏi cho chúng tôi, vui lòng liên hệ với chúng tôi qua các thông tin như Email, Số điện thoại hoặc Fax cho chúng tôi, bạn cũng có thể 
                gửi thắc mắc và câu hỏi của bạn trực tuyến qua form dưới đây, Cảm ơn !
              </p>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Họ và tên" />
                      <label htmlFor="name">Họ và tên</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="phone" placeholder="Số điện thoại" />
                      <label htmlFor="email">Số điện thoại</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Câu hỏi" />
                      <label htmlFor="subject">Câu hỏi</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: '100px' }}
                      ></textarea>
                      <label htmlFor="message">Tin nhắn</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Gửi tin nhắn
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default ContactPage