import React, { Component } from "react";

class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nocheck: "inline",
      checkbox: false,
      id1: -1
    };
    this.state.id1 = this.props.val;
    if (this.props.val == 0) {
      console.log(this.props.val);
      this.state.dis = {
        visibility: "hidden",
        background: "gray"
      };
    }
    this.state.changeIT = this.changeIT.bind(this);
    console.log(this.props.noback);
  }

  changeIT = e => {
    //console.log("a:" + e.target.id);
    this.props.action(e.target.id, e.target.checked);
  };

  state = {};
  componentDidMount() {
    if (this.props.val == 0) {
      this.state.dis = {
        visibility: "hidden",
        background: "gray"
      };
    }
  }

  render() {
    var dis = {
      visibility: "visible"
    };
    var nodis = {
      visibility: "hidden"
    };

    return (
      <div className={`card col-md-4`} style={this.props.styless}>
        <input
          style={this.props.d == 1 ? dis : nodis}
          type="checkbox"
          onChange={this.changeIT}
          className={this.state.nocheck}
          name={this.props.val}
          id={this.props.val}
          checked={this.props.chk}
        />

        <div className="card-body">
          <h4 className="card-title">John Doe</h4>
          <p className="card-text">
            Some example text some example text. John Doe is an architect and
            engineer
          </p>
          <table>
            <tr>
              <td>
                <select style={this.props.due}>
                  <option>1</option>
                </select>
              </td>
              <td>
                <select style={this.props.due}>
                  <option>1</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Room;
