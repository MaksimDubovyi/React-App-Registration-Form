class Gender extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value, valid: false };
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
       if(val=="Myжcкoй"||val=="Жeнcкий")
        return true;
        else
        return false;
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
                <label>Пол:</label><br />
                <input id="woman" type="radio" name="pol" value="Жeнcкий" onChange={this.onChange}/>
                <label className="check" for="woman">Жeнcкий</label>

                <input style={{marginLeft:'10px'}} id="man" type="radio" name="pol" value="Myжcкoй" onChange={this.onChange}/>
                <label className="check" for="man">Myжcкoй</label> 
                <div className="error" style={{ display: bolck }}>выберите Пол</div>
            </p>
        );
    }
}