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
  <Card small className="mb-4">
    <ListGroup flush>
      <ListGroupItem className="p-3">
      <table class="table table mb-0 table-hover table-white">
          <tbody className="text-center text-primary " >
          <small>
            <tr>
              <td>
                <a>Edit Profile</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="">Change Password</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Manage User</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Set favourites</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Set Hospital Codes</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Set Hospital Service Charges/Tax</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Notification</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>SMS/EMAIL</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Print Logo</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Doctor Signature</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Report By Email</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Audit Report</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Clinical Decision Report</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Forms</a>
              </td>
            </tr>
            <tr>
              <td>
                <a>Reset All String</a>
              </td>
            </tr>
            </small>
          </tbody>
      </table>

      </ListGroupItem>
    </ListGroup>
  </Card>
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
