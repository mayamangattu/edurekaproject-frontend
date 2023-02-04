import "./QuickSearches.css";
import pic from "../images/breakfast.jpg"
import pic1 from "../images/lunch.jpg"
import pic2 from "../images/dinner.jpg"
import pic3 from "../images/snacks.jpg"
import pic4 from "../images/drinks.jpg"
import pic5 from "../images/nightlife.jpg"

const QuickSearches = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="heading">Quick Searches</h2>
                    <h4 className="subheading">Discover restaurants by type of meal</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">


                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                                <img src={pic} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Breakfast</h5>
                                    <p className="card-text">Start your day with exclusive breakfast options</p>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-5 fill">
                            <img src={pic1} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title heading">Lunch</h5>
                                    <p className="card-text">Start your day with exclusive lunch options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-5 fill">
                            <img src={pic2} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title heading">Dinner</h5>
                                    <p className="card-text">Start your day with exclusive dinner options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div className="row">
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-5 fill">
                            <img src={pic3} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title heading">Snacks</h5>
                                    <p className="card-text">Start your day with exclusive snacks options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-5 fill">
                            <img src={pic4} />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                                    <h5 className="card-title heading">Drinks</h5>
                                    <p className="card-text">Start your day with exclusive drinks options</p>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-md-4">



                    <div className="card mb-3" style={{maxWidth:'540px'}}>
                        <div className="row g-0">
                            <div className="col-md-4 fill">
                            <img src={pic5} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title heading">Nightlife</h5>
                                    <p className="card-text">Start your day with exclusive night life options</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickSearches;