// The code in this file was copied from the 'Moments' walkthrough project.

import axios from "axios";

axios.defaults.baseURL = "https://walkthrough-drf-api-1c81384c884e.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;