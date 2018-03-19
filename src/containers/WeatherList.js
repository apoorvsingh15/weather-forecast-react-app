import React , { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherList extends Component {

    renderWeather = ( cityData ) => {
        let name = cityData.city.name;
        return(
            <tr key={ name }>
                <td>{ name }</td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( { weather } ){
    // const weather = state.weather
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);