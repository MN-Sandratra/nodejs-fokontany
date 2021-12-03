import { FktCard } from "../models/FktCard";
import Viewset from "../utils/Viewset";

let fktCardViewset = new Viewset(FktCard);

module.exports = fktCardViewset.router;
