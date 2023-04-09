function clickHandler() {
    console.log("Hi I am Just.");
}

function Card(props) {
    // const title = "Card Title";
    const {image,title,descripiton,children} = props;
    return (
      <section className="card">
        <img onMouseOut={()=> console.log("I just Movered")} src={image} alt="card-image" />
        <h1 style={{ marginTop: "1rem" }}>{title}</h1>
        <p>{descripiton}</p>
        <p>{children}</p>
        {/* <button onClick={clickHandler}>Submit</button> */}
        <button onClick={()=> {
                console.log("Hi I am Just.");
            }
        }>Click Me</button>
        {/* <Description /> */}
      </section>
    )
  
    // function Description() {
    //   return <p style={{ marginTop: "0.5rem" }}>lorem kfjwljfskjdofwiejljioofiwje</p>
    // }
  }

  export default Card;