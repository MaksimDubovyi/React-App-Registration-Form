class Job_title extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: props.value, valid: false};
        this.onChange = this.onChange.bind(this);
    }
    validate(val) {
        if(val=="Должность")
        return false;
        else
            return true;
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
                <label>Должность:</label><br />
                <select style={{textAlign:'center',height:'30px'}} className="txt" onChange={this.onChange} >
                <option value="Должность" selected disabled>Должность</option>;
                <option value="Директор">Директор</option>;
                <option value="Заместитель директора">Заместитель директора</option>;
                <option value="Начальник отдела">Начальник отдела</option>;
                <option value="Программист">Программист</option>;
                <option value="Дизайнер">Дизайнер</option>;
                <option value="Консультант">Консультант</option>;
          </select>
          <div className="error" style={{ display: bolck }}>выберите должность</div>
            </p>
        );
    }
}