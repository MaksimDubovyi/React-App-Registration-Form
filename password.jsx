class Password extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);
        this.state = { value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
        this.repeat_password = React.createRef();
    }
    validate(val) {
        return val.length >= 3&&val.length <= 10;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({ value: val, valid: isValid});
        this.props.data(e);
    }
    render() {
        let bolck = this.state.valid === true ? "none" : "block";
        return (
        <p>
            <label>Пароль:</label><br />
            <input id="password" className="txt" type="password" value={this.state.value} onChange={this.onChange}/>
            <div className="error" style={{ display: bolck }}>минимум 3 максимум 10 символов</div>
        </p>
        );
    }
}