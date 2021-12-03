import { Contribution } from "../models/Contribution";
import Viewset from "../utils/Viewset";

let contributionViewSet = new Viewset(Contribution);

module.exports = contributionViewSet.router;
