/**
 * Created by huyhuynh on 8/25/17.
 */
import React, {Component} from 'react'

class EditableInput extends Component {
    constructor(props) {
        super(props);
        this.state = { showEdit: false };
    }

    toggleEdit() {
        this.setState({showEdit: !this.state.showEdit});
    }

    a() {
        this.setState({showEdit: true});
        // this.setState({showEdit: !this.state.showEdit});
    }

    b() {
        this.setState({showEdit: false});
        // this.setState({showEdit: !this.state.showEdit});
        alert(this.state.showEdit);
    }


    render() {
        return <li className="edit-field">
            <label>{ this.props.label }</label>
            <br/>
            { !this.state.showEdit && <span>{ this.props.value }</span> }
            { this.state.showEdit && <div className="form-group">
                    <input type="text" className="form-control" value={this.props.value} />
                </div>
            }
            <span className="action-info" onClick={() => this.a()}>
                { this.state.showEdit && <button className="button-blue button-small">Lưu</button> }
                { this.state.showEdit && <button className="button-blue button-blue-outline button-small" onClick={()=>this.b()}>Hủy</button> }
                { !this.state.showEdit && <a href="#"><i className="fa fa-pencil" aria-hidden="true" /></a> }
            </span>
        </li>;
    }
}

export default EditableInput;