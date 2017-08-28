/**
 * Created by huyhuynh on 8/25/17.
 */
import React, {Component} from 'react'

class EditableInput extends Component {
    constructor(props) {
        super(props);
        this.state = { showEdit: false, value: props.value };
        this.className = '';
    }

    toggleEdit() {
        if (!this.state.showEdit) this.className = 'edit-field';
        else this.className = '';
        this.setState({showEdit: !this.state.showEdit});

    }

    save() {
        this.toggleEdit();
        if (typeof this.props.saveHandler === 'function') {
            this.props.saveHandler(this.state.value);
        }
    }

    updateInput(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return <li className={this.className}>
            <label>{ this.props.label }</label>
            <br/>
            { !this.state.showEdit && <span>{ this.state.value }</span> }
            { this.state.showEdit && <div className="form-group">
                    <input type="text" className="form-control" value={this.state.value} onChange={(e) => this.updateInput(e)}/>
                </div>
            }
            <span className="action-info" onClick={() => this.toggleEdit()}>
                { this.state.showEdit && <button className="button-blue button-small" onClick={() => this.save()}>Lưu</button> }
                { this.state.showEdit && <button className="button-blue button-blue-outline button-small" onClick={() => this.toggleEdit()}>Hủy</button> }
                { !this.state.showEdit && <a href="#"><i className="fa fa-pencil" aria-hidden="true" /></a> }
            </span>
        </li>;
    }
}

export default EditableInput;