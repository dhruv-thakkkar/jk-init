import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";

function PackageDetails() {
  const [Data, setData] = useState([]);

  const { id } = useParams();
  const fetchData = () => {
    var url = "http://localhost:3000/api/v1/packages/get-package";
    axios
      .post(url, { category_id: id })
      .then((response) => {
        if (response.data) {
          setData((e) => response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className="pt80 pb80 cruise-grid-view">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 Filter-left">
              <form action="#" autoComplete="off" >
                <div className="mb-left">
                  <label htmlFor="form_dates" className="form-label">Dates</label>
                  <div className="form-group">
                    <input className="form-control" type="text" id="datepicker" autoComplete="off" placeholder="Choose your dates" />
                  </div>
                </div>
                <div className="mb-left">
                  <label htmlFor="form_guests" className="form-label">Guests</label>
                  <select className="custom-select select-big ">
                    <option value="">Guests </option>
                    <option value="guests_0">01 </option>
                    <option value="guests_1">02 </option>
                    <option value="guests_2">03 </option>
                    <option value="guests_3">04 </option>
                    <option value="guests_4">05 </option>
                  </select>
                </div>
                <div className="mb-left">
                  <label htmlFor="form_type" className="form-label">Home type</label>
                  <select className="custom-select select-big ">
                    <option value="type_0">Entire place </option>
                    <option value="type_1">Private room </option>
                    <option value="type_2">Shared room </option>
                  </select>
                </div>
                <div className="mb-left">
                  <label className="form-label">Price range</label>
                  <div className="range-slider">
                    <input type="range" defaultValue={150} min="0" max="500" range="true" />
                    <span className="range-value">150</span> </div>
                </div>
                <div className="mb-left">
                  <label className="form-label">Host and booking</label>
                  <ul className="list-inline mb-0 mt-1">
                    <li className="list-inline-item">
                      <div className="custom-control custom-switch">
                        <input id="instantBook" type="checkbox" className="custom-control-input" />
                        <label htmlFor="instantBook" className="custom-control-label"> <span className="text-sm">Instant book</span></label>
                      </div>
                    </li>
                    <li className="list-inline-item">
                      <div className="custom-control custom-switch">
                        <input id="superhost" type="checkbox" className="custom-control-input" />
                        <label htmlFor="superhost" className="custom-control-label"> <span className="text-sm">Superhost</span></label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="pb-left">
                  <div id="moreFilters" className="collapse show">
                    <div className="filter-block">
                      <h6 className="mb-3">Location</h6>
                      <div className="form-group">
                        <label htmlFor="form_neighbourhood" className="form-label">Neighbourhood</label>
                        <select className="custom-select select-big mb-3">
                          <option value="neighbourhood_0">Battery Park City </option>
                          <option value="neighbourhood_1">Bowery </option>
                          <option value="neighbourhood_2">Carnegie Hill </option>
                          <option value="neighbourhood_3">Central Park </option>
                          <option value="neighbourhood_4">Chelsea </option>
                          <option value="neighbourhood_5">Chinatown </option>
                          <option value="neighbourhood_6">Civic Center </option>
                          <option value="neighbourhood_7">East Harlem </option>
                          <option value="neighbourhood_8">Financial District </option>
                          <option value="neighbourhood_9">Flatiron </option>
                          <option value="neighbourhood_10">Garment District </option>
                          <option value="neighbourhood_11">Gramercy Park </option>
                          <option value="neighbourhood_12">Greenwich Village </option>
                          <option value="neighbourhood_13">East Village </option>
                          <option value="neighbourhood_14">West Village </option>
                          <option value="neighbourhood_15">Hamilton Heights </option>
                          <option value="neighbourhood_16">Harlem </option>
                          <option value="neighbourhood_17">Hell's Kitchen / Clinton </option>
                          <option value="neighbourhood_18">Inwood </option>
                          <option value="neighbourhood_19">Kips Bay </option>
                          <option value="neighbourhood_20">Lenox Hill </option>
                          <option value="neighbourhood_21">Little Italy </option>
                          <option value="neighbourhood_22">Lower Eastside </option>
                          <option value="neighbourhood_23">Madison Square </option>
                          <option value="neighbourhood_24">Manhattan Valley </option>
                          <option value="neighbourhood_25">Meatpacking District </option>
                          <option value="neighbourhood_26">Midtown </option>
                          <option value="neighbourhood_27">Morningside Heights </option>
                          <option value="neighbourhood_28">Murray Hill </option>
                          <option value="neighbourhood_29">NoHo </option>
                          <option value="neighbourhood_30">NoLita </option>
                          <option value="neighbourhood_31">Roosevelt Island </option>
                          <option value="neighbourhood_32">SoHo </option>
                          <option value="neighbourhood_33">Stuyvesant Town (Stuyvesant Square) </option>
                          <option value="neighbourhood_34">Sutton Place </option>
                          <option value="neighbourhood_35">Times Square </option>
                          <option value="neighbourhood_36">Tribeca </option>
                          <option value="neighbourhood_37">Turtle Bay </option>
                          <option value="neighbourhood_38">Upper Eastside </option>
                          <option value="neighbourhood_39">Upper Westside </option>
                          <option value="neighbourhood_40">Washington Heights </option>
                          <option value="neighbourhood_41">Yorkville </option>
                        </select>
                      </div>
                      <div className="form-group mb-0">
                        <label className="form-label">Neighbourhood Tag</label>
                        <ul className="list-inline mt-xl-1 mb-0">
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" id="type_0" name="type[]" className="custom-control-input" />
                              <label htmlFor="type_0" className="custom-control-label">Hipster </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" id="type_1" name="type[]" className="custom-control-input" />
                              <label htmlFor="type_1" className="custom-control-label">Business </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" id="type_2" name="type[]" className="custom-control-input" />
                              <label htmlFor="type_2" className="custom-control-label">Family </label>
                            </div>
                          </li>
                          <li className="list-inline-item">
                            <div className="custom-control custom-checkbox">
                              <input type="checkbox" id="type_3" name="type[]" className="custom-control-input" />
                              <label htmlFor="type_3" className="custom-control-label">Green </label>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Rooms and beds</h6>
                      <div className="form-group ">
                        <label className="form-label">Beds</label>
                        <div className="d-flex align-items-center"> <span className="input-number-decrement">–</span>
                          <input className="input-number" type="text" defaultValue={1} min="0" max="10" />
                          <span className="input-number-increment">+</span> </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Bedrooms</label>
                        <div className="d-flex align-items-center"> <span className="input-number-decrement">–</span>
                          <input className="input-number" type="text" defaultValue={1} min="0" max="10" />
                          <span className="input-number-increment">+</span> </div>
                      </div>
                      <div className="form-group mb-0">
                        <label className="form-label">Bathrooms</label>
                        <div className="d-flex align-items-center"> <span className="input-number-decrement">–</span>
                          <input className="input-number" type="text" defaultValue={1} min="0" max="10" />
                          <span className="input-number-increment">+</span> </div>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Trip type</h6>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-switch">
                          <input id="forfamilies" type="checkbox" name="forfamilies" aria-describedby="forfamiliesHelp" className="custom-control-input" />
                          <label htmlFor="forfamilies" className="custom-control-label"> <span className="text-sm">For Families</span></label>
                        </div>
                      </div>
                      <div className="form-group mb-0">
                        <div className="custom-control custom-switch">
                          <input id="forwork" type="checkbox" name="forwork" aria-describedby="forworkHelp" className="custom-control-input" />
                          <label htmlFor="forwork" className="custom-control-label"> <span className="text-sm">For work</span></label>
                        </div>
                      </div>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Amenities</h6>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_0" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_0" className="custom-control-label">Kitchen </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_1" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_1" className="custom-control-label">Shampoo </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_2" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_2" className="custom-control-label">Heating </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_3" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_3" className="custom-control-label">Air conditioning </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_4" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_4" className="custom-control-label">Washer </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_5" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_5" className="custom-control-label">Dryer </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_6" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_6" className="custom-control-label">Wifi </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_7" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_7" className="custom-control-label">Breakfast </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_8" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_8" className="custom-control-label">Indoor fireplace </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_9" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_9" className="custom-control-label">Buzzer/wireless intercom </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_10" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_10" className="custom-control-label">Doorman </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_11" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_11" className="custom-control-label">Hangers </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_12" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_12" className="custom-control-label">Iron </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_13" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_13" className="custom-control-label">Hair dryer </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="amenities_14" name="amenities[]" className="custom-control-input" />
                            <label htmlFor="amenities_14" className="custom-control-label">Laptop friendly workspace </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="filter-block">
                      <h6 className="mb-3">Facilities</h6>
                      <ul className="list-unstyled mb-0">
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="facilities_0" name="facilities[]" className="custom-control-input" />
                            <label htmlFor="facilities_0" className="custom-control-label">Free parking on premises </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="facilities_1" name="facilities[]" className="custom-control-input" />
                            <label htmlFor="facilities_1" className="custom-control-label">Gym </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="facilities_2" name="facilities[]" className="custom-control-input" />
                            <label htmlFor="facilities_2" className="custom-control-label">Hot tub </label>
                          </div>
                        </li>
                        <li>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" id="facilities_3" name="facilities[]" className="custom-control-input" />
                            <label htmlFor="facilities_3" className="custom-control-label">Pool </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-left">
                    <button type="submit" className="btn btn-primary btn-grad FilterBtn"> <i className="fas fa-filter mr-1"></i>Filter </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="row">

                {Data && Data.message
                  ? Data.message.map(function (arr, i) {
                    return (

                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="listing-item ">
                          <article className="TravelGo-category-listing fl-wrap">

                            <div className="TravelGo-category-img"> <Link to={"/package/"+arr._id}>
                            {arr && arr.images
                              ? arr.images.map(function (img, i) {
                                if (img.default == 1) {
                                  return (
                                    <img src={ "../assets/"+img.image_url} alt="" />
                                  )
                                }
                              })
                              : null}
                              </Link>
                              <div className="TravelGo-category-opt">
                                <div className="listing-rating card-popup-rainingvis" data-starrating2="5"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                <div className="rate-class-name">
                                  <div className="score"></div>
                                  <span>5.0</span> </div>
                              </div>
                            </div>
                            <div className="TravelGo-category-content fl-wrap title-sin_item">
                              <div className="TravelGo-category-content-title fl-wrap">
                                <div className="TravelGo-category-content-title-item">
                                  <h3 className="title-sin_map"><Link to={"/package/"+arr._id}>{arr.package_title}</Link></h3>
                                  <div className="TravelGo-category-location fl-wrap"><Link to={"/package/"+arr._id}><i className="fas fa-map-marker-alt"></i> {arr.country[0].country_name}</Link> <span>{arr.price}/-</span> </div>
                                </div>
                              </div>
                              <p>{arr.short_desc}</p>
                              <ul className="facilities-list fl-wrap">
                                <li><i className="fas fa-wifi"></i><span>Free WiFi</span></li>
                                <li><i className="fas fa-utensils"></i><span> Restaurant</span></li>
                                <li><i className="fas fa-bed"></i><span>Rooms</span></li>
                                <li><i className="fas fa-taxi"></i><span>Pickup-Drop</span></li>
                              </ul>
                              <div className="TravelGo-category-footer fl-wrap">
                                <div className="TravelGo-category-price btn-grad"><span>{arr.days_count} days {arr.nights_count} nights</span></div>
                                <div className="TravelGo-opt-list"> <a href="#" className="single-map-item"><i className="fas fa-map-marker-alt"></i><span className="TravelGo-opt-tooltip">On the map</span></a> <a href="#" className="TravelGo-js-favorite"><i className="fas fa-heart"></i><span className="TravelGo-opt-tooltip">Save</span></a> <a href="#" className="TravelGo-js-booking"><i className="fas fa-retweet"></i><span className="TravelGo-opt-tooltip">Find Directions</span></a> </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>

                    )
                    /* return <Link key={arr._id} to={"/package/" + arr._id}>{arr.package_title}</Link>; */
                  })
                  : null}




              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default PackageDetails;
