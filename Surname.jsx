class Surname extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        return val.length >=5;
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
                <label>Фамилия:</label><br />
                <input id="surname" className="txt" type="text" value={this.state.value} onChange={this.onChange} />
                <div className="error" style={{ display: bolck }}>минимум 5 символов</div>
            </p>
        );
    }
}