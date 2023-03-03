    class Repeat_password extends React.Component {
        constructor(props) {
            super(props);

            let isValid = this.validate(true);
            this.state = { value: props.value, valid: isValid};
            this.onChange = this.onChange.bind(this);
        }
        validate(val) {
            return this.props.data==val;
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
                <label>Повторите пароль:</label><br />
                <input id="repeat_password" className="txt" type="password" value={this.state.value} onChange={this.onChange}/>
                <div className="error" style={{ display: bolck }}>пароли должны совпадать</div>
            </p>
            );
        }
    }