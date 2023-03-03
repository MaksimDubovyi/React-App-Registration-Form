class Name extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.data, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val.length >= 5;
    }
    vals() {
        this.setState({ value: "", valid: false });
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({ value: val, valid: isValid });
    }
    render() {
        let bolck = this.state.valid === true ? "none" : "block";
        return (
        <p>
            <label>Имя:</label><br />
            <input id="name" className="txt" type="text" value={this.state.value} onChange={this.onChange}/>
            <div className="error" style={{ display: bolck }}>минимум 5 символов</div>
        </p>
        );
    }
}