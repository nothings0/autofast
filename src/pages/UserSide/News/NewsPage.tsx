import React from 'react'
import './main.css';
import './style.css'


const NewsPage = ( props: any) => {
  console.log(props);
  
  const news = props.news
  console.log(news);
  const slideStyle1 ={
    background: "DodgerBlue",
    color: "white"
  }
    const slideStyle ={
   
    color: "DodgerBlue"
  }
  return (
    <div>
        <h1 style={{textAlign: "center", marginTop: "20px", marginBottom: "25px", color: "DodgerBlue"}}>Tin Tức</h1>
      <div className="row px-lg-5 g-4 mb-5">

                    <div className="col-12">
                        <h2 className=" mb text-start"><a href="kinh-nghiem-cham-soc-xe.aspx">Chuyên Mục Chăm Sóc Xe</a></h2>

                    </div>
                        <div className="col-lg-8 col-12" data-sal-duration="1600">
                            {news.map((item:any)=>{

                            
                           return <div key={item.id} className="blog-item">
                                <a href={`/news/${item.id}`} title="Tại vì sao động cơ xe ô tô của bạn lại quá nóng?" className="img img-cover img-effect zoom-in-1 auto-scale">
                                    <img className=" lazyloaded" src={item.image} alt="Tại vì sao động cơ xe ô tô của bạn lại quá nóng?" />
                                </a>
                                <time style={slideStyle1} className="d-inline-flex align-items-center "><i className="me-1 fa-solid "></i> 11/11/2023</time>
                                <h4 className="title fw-700 " ><a  style={slideStyle} href={`/news/${item.id}`} >{item.title}</a>
                                </h4>
                                <p className="description">{item.content}<a href="noi-dung-tai-vi-sao-dong-co-xe-o-to-cua-ban-lai-qua-nong-3143.aspx" title="Tại vì sao động cơ xe ô tô của bạn lại quá nóng?" className="read-more"><i className="fa-solid fa-angles-right"></i></a></p>
                            </div>
                            })}
                        </div>
                    
                    <div className="col-lg-4 col-12">
                    {news.map((item:any)=>{
                                                                          
                               return <div className="blog-item-horizontal d-flex mb-3" data-sal-duration="1600" data-sal-delay="0">
                                    <a href={`/news/${item.id}`} title="Ưu điểm và nhược điểm các loại chất liệu bọc ghế xe hơi" className="img img-cover img-effect zoom-in-1 auto-scale">
                                        <img className=" lazyloaded" src={item.image} alt="Ưu điểm và nhược điểm các loại chất liệu bọc ghế xe hơi" />
                                    </a>
                                    <div className="info">
                                        <h4  className="title fw-700 mb-2"><a style={slideStyle}  href="noi-dung-uu-diem-va-nhuoc-diem-cac-loai-chat-lieu-boc-ghe-xe-hoi-2120.aspx" title="Ưu điểm và nhược điểm các loại chất liệu bọc ghế xe hơi">{item.title}</a>
                                        </h4>
                                      
                                    </div>

                                </div>
                                                            
                                                        })}
                                                            
                                
                                                            
                                
                                                                                                    </div>
                </div>
    </div>
    
  )
}

export default NewsPage