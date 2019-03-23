import React from "react";
import { withRouter } from "react-router-dom";

const Back = ({ history }) => (
  <button type="submit" className="btn btn-primary" onClick={history.goBack}>Homepage</button>
);

export default withRouter(Back);