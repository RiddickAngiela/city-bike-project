import React,{useState,useEffect} from "react";

function Home() {
  const[bike, setBike] = useState([])
  const[like, setLike] = useState(0)
  const[disLike, setDisLike] = useState(0)
  const[submit, setSubmit] = useState("")
  
  
  const handleLike=()=>{
    setLike(like+ 1)
  }


  const handleDislike = () => {
    setDisLike(disLike + 1);
  };


  const handleSubmit = (e) => {
    setSubmit(e.target.value)
  }


  useEffect(()=>{
    fetch("http://localhost:3000/data")
    .then(res => res.json())
    .then(bike => setBike(bike))
  },[]);


  const listBike= bike.map((bik)=>{
    return (
      <div key={bik.id}>
        <img src={bik.image} />
        <h2>
          <span>Name: </span>
          {bik.name}
        </h2>
        <p>
          <span>Company: </span>
          {bik.company}
        </p>
        <p>
          <span>City: </span>
          {bik.city}
        </p>
        <p>
          <span>Likes: </span>
          {like}
        </p>
        <p>
          <span>DisLikes: </span>
          {disLike}
        </p>
        <button onClick={handleLike}>💙 </button>
        <button onClick={handleDislike}>👎</button>
        <div>
          <form onSubmit={handleSubmit}>
            <textarea placeholder="Comment..." />
            <input type="Submit" />
          </form>
        </div>
      </div>
    );
  })
  return (
    <div>
      {listBike}
    </div>
  );
}

export default Home;
