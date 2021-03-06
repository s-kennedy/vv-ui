import React from 'react';
import JsBarcode from 'jsbarcode'
import { Table } from 'reactstrap';
import { labels } from "../../helpers/localization";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import DefaultLayout from '../layouts/Default';
import API from '../../helpers/API';

export default class ShowBike extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bike: {
        data: {
          BellHorn: null,
          BikeLabel: null,
          Brand: null,
          Class: null,
          Colour: null,
          Description: null,
          GearCount: null,
          ID_Bike: 1234,
          ID_Status: null,
          Lights: null,
          Reflectors: null,
          SerialNumber: 123,
          TireMaxPSI: null,
          TireSize: null,
          history: null,
          photos: null

        }
      }
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    // fetch bike record from api using id
    console.log('id', id)
    API.get(`bikes/${id}`).then(data => {
      this.setState({ bike: data})
      // console.log(this.state.bike.data.SerialNumber)
    })
    JsBarcode("#bike-barcode", `${id}OK`, { height: 50, width: 3, text: id })
  }

  getStatus() {
    if(this.state.bike.data.Status = "undefined") {
      console.log("State is undefined")
      // return <FormGroup check>
      //       <Label check>
      //         <Input
      //           type="checkbox"
      //           id="Reflectors"
      //           name="Reflectors"
      //           checked={this.state.bike.data.Reflectors}
      //         />{" "}
      //         {/* {labels.reflectors()} */}
      //       </Label>
      //     </FormGroup>
    }
    else {
    }
  }

  render() {
    return (
      <DefaultLayout>
        <div className="row justify-content-end">
          <img id="bike-barcode" alt="barcode"></img>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <a href="#" className="thumbnail">
              <img src="..." alt="..."></img>
            </a>
          </div>
        </div>

        <div>
          <Table>
            <tbody>
              <tr>
                <td>Serial Number</td>
                {/* <td>{`${this.state.bike.serialNumber}`}</td> */}
                <td>{`${this.state.bike.data.SerialNumber}`}</td>
              </tr>
              <tr>
                <td>Brand</td>
                <td>{`${this.state.bike.data.Brand}`}</td>
              </tr>
              <tr>
                <td>Colour</td>
                <td>{`${this.state.bike.data.Color}`}</td>
              </tr>
              <tr>
                <td>Frame Class</td>
                <td>{`${this.state.bike.data.Class}`}</td>
              </tr>
              <tr>
                <td>Tire Size</td>
                <td>{`${this.state.bike.data.TireSize}`}</td>
              </tr>
              <tr>
                <td>Tire Pressure</td>
                <td>{`${this.state.bike.data.TireMaxPSI}`}</td>
              </tr>
              <tr>
                <td>Number of Gears</td>
                <td>{`${this.state.bike.data.GearCount}`}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{`${this.state.bike.data.Status}`}</td>
              </tr>

              {this.getStatus()}

            </tbody>
          </Table>
        </div>

      </DefaultLayout>
    );
  }
}