import { Person } from "../models/Person";
import Viewset from "../utils/Viewset";

let personViewSet = new Viewset(Person);

module.exports = personViewSet.router;
