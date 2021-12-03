import { SocialAid } from "../models/SocialAid";
import Viewset from "../utils/Viewset";

let socialAidViewSet = new Viewset(SocialAid);

module.exports = socialAidViewSet.router;
