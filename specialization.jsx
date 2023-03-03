class Specialization extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value1:"",value2:"",value3:"",valid: false, valid1: false,valid2: false,valid3: false, };
        this.onChange = this.onChange.bind(this);
        let y= this.validate();
        this.setState({valid: y });
    }
    validate() {
       if(this.state.valid1==true||this.state.valid2==true||this.state.valid3==true)
        return true;
        else
            return false;
    }
    onChange(e) {
        let val2=e.target.name;
        if( e.target.name=="Дизайн")
        {
            if(this.state.valid1==true)
            this.setState({ value1:"", valid1: false }); 
            else
                this.setState({ value1:val2, valid1: true });   
        }
        else if ( e.target.name=="Администрирование")
        {
            if(this.state.valid2==true)
            this.setState({ value2:"", valid2: false }); 
            else{this.setState({ value2:val2, valid2: true });}
        }
        else if ( e.target.name=="Программирование")
        {
            if(this.state.valid3==true)
            this.setState({ value3:"", valid3: false }); 
            else{this.setState({ value3:val2, valid3: true });}
        }
        let y= this.validate();
        this.setState({valid: y }); 
    }
    render() {

        let bolck = this.state.valid1 === true|| this.state.valid2 === true|| this.state.valid3 === true === true ? "none" : "block";
        return (
            <p style={{textAlign:'left', marginLeft:'100px'}}>
                <p style={{ marginLeft:'10px'}}>Специализация</p>
                <input  id="Дизайн" name="Дизайн" type="checkbox" onChange={this.onChange}/>
                <label className="check" for="Дизайн">Дизайн</label><br/>

                <input id="Администрирование" name="Администрирование" type="checkbox" onChange={this.onChange}/>
                <label className="check" for="Администрирование">Администрирование</label><br/>

                <input  id="Программирование" name="Программирование" type="checkbox" onChange={this.onChange}/>
                <label className="check" for="Программирование">Программирование</label><br/>
                <div className="error" style={{ display: bolck }}>выберите cпециализацию</div>
            </p>
        );
    }
}