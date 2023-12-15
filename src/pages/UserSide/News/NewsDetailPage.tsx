import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { INews } from '../../../interface/news';

const NewsDetailPage = (props: any) => {
  const { id } = useParams()
  console.log(id);
  
  const [New, setNews] = useState<any>([]);
  console.log(New);
  
  useEffect(() => {
    setNews(props.news.find((New: { id: string | undefined; }) => New.id == id))
})
const containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
};

const headerStyle = {
  backgroundColor: "rgba(251, 251, 251, 0.15)"
};
const headerStyle2 = {
  padding: "10px",
  width: "800px",
  height: "500px",
  fontSize: '19px',

};
const headerStyle3 = {
 
  color: 'DodgerBlue',
  padding: '10px',
  fontSize: '30px',
  fontWeight: 'bold',
};



    return (
      <>
      <h1 style={{textAlign: "center", marginTop: "20px"}}>Chi tiết Tin Tức</h1>
      <div className="container " style={containerStyle}>
        
  <div className="row">
    <div className="col">
      <h2 style={headerStyle3}>{New?.title}</h2>
  
      <img style={headerStyle2} src={New?.image} alt="Hình ảnh tin tức" className="img-fluid" />
      <p style={headerStyle2}>{New?.des}</p>
    </div>
    
  </div>
</div>
</>
    );
  
}

export default NewsDetailPage


