import React from "react";
import "./Feedback.css";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      email: "",
      mobile: "",
      how_did_you_hear_about_the_brand: "",
      how_often_do_you_buy_from_us: "",
      how_do_you_usually_buy_our_products_instore__delivery: "",
      for_what_occasion_do_you_buy_from_us: "",
      what_offer_from_us_jumps_to_your_mind: "",
      what_do_you_like_most_about_wondernut: "",
      what_new_doughnuts_would_you_like_to_see: "",
      do_you_follow_us_on_facebookinstagram: "",
      we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind:
        "",
        submitted: false, 
        error: false 
      };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    
    const isEmpty = Object.values(this.state).some(value => value === "");

    if (isEmpty) {
      
      this.setState({ error: true });
      return;
    }

   
    this.setState({ error: false, submitted: true });

    
    console.log("Form submitted:", this.state);

    alert("Feedback submitted successfully!");
  }


  render() {
    return (
      <section id="feedback" className="page-bg">
        <div className="bg-overlay-screen " style={{ fontSize: "40px" }}>
          We would love to hear from you!
          <div className="outer-box">
            <div className="form-container">
              <form
                onSubmit={this.handleSubmit}
                name="custom_form"
                id="js_form_builder_container"
                className="js_form_builder"
                method="post"
                encType="multipart/form-data"
                autoComplete="off"
              >
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="how_did_you_hear_about_the_brand"
                  >
                    How did you hear about the brand?
                  </label>
                  <textarea
                    id="how_did_you_hear_about_the_brand"
                    name="how_did_you_hear_about_the_brand"
                    className="form-control"
                    value={this.state.how_did_you_hear_about_the_brand}
                    onChange={(e) =>
                      this.setState({
                        how_did_you_hear_about_the_brand: e.target.value,
                      })
                    }
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="how_often_do_you_buy_from_us"
                  >
                    How often do you buy from us?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="how_often_do_you_buy_from_us"
                    name="how_often_do_you_buy_from_us"
                    value={this.state.how_often_do_you_buy_from_us}
                    onChange={(e) =>
                      this.setState({
                        how_often_do_you_buy_from_us: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="how_do_you_usually_buy_our_products_instore__delivery"
                  >
                    How do you usually buy our products: In-store / Delivery?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="how_do_you_usually_buy_our_products_instore__delivery"
                    name="how_do_you_usually_buy_our_products_instore__delivery"
                    value={
                      this.state
                        .how_do_you_usually_buy_our_products_instore__delivery
                    }
                    onChange={(e) =>
                      this.setState({
                        how_do_you_usually_buy_our_products_instore__delivery:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="for_what_occasion_do_you_buy_from_us"
                  >
                    For what occasion do you buy from us?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="for_what_occasion_do_you_buy_from_us"
                    name="for_what_occasion_do_you_buy_from_us"
                    value={this.state.for_what_occasion_do_you_buy_from_us}
                    onChange={(e) =>
                      this.setState({
                        for_what_occasion_do_you_buy_from_us: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="what_offer_from_us_jumps_to_your_mind"
                  >
                    What offer from us jumps to your mind?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="what_offer_from_us_jumps_to_your_mind"
                    name="what_offer_from_us_jumps_to_your_mind"
                    value={this.state.what_offer_from_us_jumps_to_your_mind}
                    onChange={(e) =>
                      this.setState({
                        what_offer_from_us_jumps_to_your_mind: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="what_do_you_like_most_about_wondernut"
                  >
                    What do you like most about Wondernut?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="what_do_you_like_most_about_wondernut"
                    name="what_do_you_like_most_about_wondernut"
                    value={this.state.what_do_you_like_most_about_wondernut}
                    onChange={(e) =>
                      this.setState({
                        what_do_you_like_most_about_wondernut: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="what_new_doughnuts_would_you_like_to_see"
                  >
                    What new doughnut/s would you like to see?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="what_new_doughnuts_would_you_like_to_see"
                    name="what_new_doughnuts_would_you_like_to_see"
                    value={this.state.what_new_doughnuts_would_you_like_to_see}
                    onChange={(e) =>
                      this.setState({
                        what_new_doughnuts_would_you_like_to_see:
                          e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="do_you_follow_us_on_facebookinstagram"
                  >
                    Do you follow us on: Facebook/Instagram?
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="do_you_follow_us_on_facebookinstagram"
                    name="do_you_follow_us_on_facebookinstagram"
                    value={this.state.do_you_follow_us_on_facebookinstagram}
                    onChange={(e) =>
                      this.setState({
                        do_you_follow_us_on_facebookinstagram: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label
                    className="form_field_title"
                    htmlFor="we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind"
                  >
                    We would like to make your experience wonderful. Do share
                    any other feedback/suggestion that comes to mind.
                  </label>
                  <textarea
                    id="we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind"
                    name="we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind"
                    className="form-control"
                    value={
                      this.state
                        .we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind
                    }
                    onChange={(e) =>
                      this.setState({
                        we_would_like_to_make_your_experience_wonderful_do_share_any_other_feedbacksuggestion_that_comes_to_mind:
                          e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <input type="submit" value="Submit" className="submit"/>
              </form>
              {this.state.error && <p className="error">Fill out all fields before submitting!</p>}
              {this.state.submitted && <p className="success">Feedback submitted successfully!</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feedback;
