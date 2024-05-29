import SearchBar from "../../components/searchBar/searchBar"
 import "./homepage.scss"

function Homepage(){
    return(
      <div className="homepage">
        <div className="text">
        
            <div className="wrapper">
            <h1 className="title">Find Real Estate and get your dream place</h1>
            <p>
            Welcome to Ved Estate, your premier destination for finding your dream home or investment property. With a commitment to excellence and a passion for real estate, we offer a comprehensive suite of services to buyers, sellers, and investors.
            </p>
            <SearchBar/>
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of experiance</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Awards</h2>
              </div>
              <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
              </div>
            </div>
            </div>
       
        </div>
     <div className="image">
     <img src="/bg.png" alt="" />
        </div>
    
      </div>
    )
}
export default Homepage