import React from "react";
import { labels } from "../../helpers/localization";
import { STATUSES_COLORS } from "../../helpers/constants";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Badge
} from "reactstrap";


const BikeCard = props => {
  const { bike } = props;
  console.log(bike)
  const photoSrc = (bike.photos && !!bike.photos.length) ? bike.photos[0].url : "https://placekitten.com/318/180";
  return (
    <div className="col-12 col-sm-6 col-md-4 my-2">
      <Card>
        <CardImg
          top
          width="100%"
          src={photoSrc}
          alt={bike.Description}
        />
        <CardBody>
          <CardTitle>{bike.BikeLabel}</CardTitle>
          <Badge color={STATUSES_COLORS[bike.ID_Status]} pill>{ labels.statusLabel(bike.ID_Status) }</Badge>
          <CardText>
            {labels.bikeClassLabels[bike.Class]}
          </CardText>
          <Button className="mr-1" color="primary" href={`/bikes/${bike.ID_Bike}`}>Return this bike</Button>
          <Button className="mr-1" color="primary" outline href={`/bikes/${bike.ID_Bike}`}>View</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BikeCard;