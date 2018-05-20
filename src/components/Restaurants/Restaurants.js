import React, { Component } from 'react';
import Map from '../Map';
import Loader from '../Loader';
import Modal from '../Modal';
import Categories from '../Categories';

import './Restaurants.css';

class Restaurants extends Component {

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  setMarker = item => {
    const { marker } = this.props;
    if(marker && (item.restaurantId === marker.restaurantId)){
      this.props.closeMarker();
    }else{
      this.props.setMarker(item);
    }
  }

  render(){

    const { data, isFetching, isFail, marker, closeMarker, selectedCategory } = this.props;

    if(isFetching ) return(<Loader />);
    if(isFail) return(<div>No data!</div>);

    return(
      <div className="restaurants-wrapper">
        {marker && <Modal onClose={closeMarker} marker={marker} />}
        <Map 
          data={data}
          onClick={this.setMarker}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ minHeight: `100%` }}></div>}
          containerElement={<div style={{ minHeight: `calc(100vh - 134px)`, width: '80%' }}></div>}
          mapElement={<div style={{ height: `100%` }}></div>} 
        />
        <Categories 
          selectedCategory={selectedCategory} 
          setCategory={category => this.props.fetchRestaurants(category)}
        />
      </div>
    );
  }
}

export default Restaurants;
