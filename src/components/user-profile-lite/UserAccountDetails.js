import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button,
} from "shards-react";

const UserAccountDetails = ({ title }) => (
  // <Card small className="mb-4">
    // <ListGroup flush>
      // <ListGroupItem className="">
      <table className="table">
          <tbody className="text-center" >
          <small>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Edit Profile</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Change Password</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Manage User</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Set favourites</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Set Hospital Codes</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Set Hospital Service Charges/Tax</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Notification</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">SMS/EMAIL</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Print Logo</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Doctor Signature</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Report By Email</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Audit Report</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Clinical Decision Report</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Forms</a>
              </td>
            </tr>
            <tr className="card mt-1">
              <td>
                <a className="text-success" href="">Reset All String</a>
              </td>
            </tr>
            </small>
          </tbody>
      </table>

      // </ListGroupItem>
    // </ListGroup>
  // </Card>
);

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
