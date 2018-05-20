import { connect } from 'react-redux';
import { fetchRestaurants } from '../../reducers/restaurants/actions';
import { getData, isFetching, isFail, selectedCategory } from '../../reducers/restaurants/selectors';
import { setMarker, closeMarker } from '../../reducers/marker/actions';
import { getMarker } from '../../reducers/marker/selectors';

import Restaurants from './Restaurants';

const mapStateToProps = state => {
	return {
    data: getData(state),
    isFetching: isFetching(state),
    isFail: isFail(state),
    marker: getMarker(state),
    selectedCategory: selectedCategory(state)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		fetchRestaurants: category => dispatch(fetchRestaurants(category)),
		setMarker: item => dispatch(setMarker(item)),
		closeMarker: item => dispatch(closeMarker())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
