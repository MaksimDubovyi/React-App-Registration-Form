class Form extends React.Component {
   
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate2 = this.validate2.bind(this);
        this.valonClickidate2 = this.onClick.bind(this);
        this.state = { value:"",name_:""};
        this.nameRef = React.createRef();
        this.surnameRef = React.createRef();
        this.gender = React.createRef();
        this.job_title = React.createRef();
        this.password = React.createRef();
        this.repeat_password = React.createRef();
        this.specialization = React.createRef();
    }
    

onClick(e)
{
    document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("password").value="";
    document.getElementById("repeat_password").value="";
}
    validate2(e) {this.setState({ value:e.target.value }); }
    handleSubmit(e) {
        e.preventDefault();

        let name = this.nameRef.current.state.value;
        let surname = this.surnameRef.current.state.value;
        let password = this.password.current.state.value;
        let job_title = this.job_title.current.state.value;
        let gender = this.gender.current.state.value;
        let specialization = this.specialization.current.state.value1+"\n"+this.specialization.current.state.value2+"\n"+this.specialization.current.state.value3;
        if (this.nameRef.current.state.valid &&
            this.surnameRef.current.state.valid &&
            this.password.current.state.valid &&
            this.repeat_password.current.state.valid&&
            this.job_title.current.state.valid&&this.specialization.current.state.valid&&this.gender.current.state.valid)
        {
            alert("Имя: " + name + "\n\nФамилия: " + surname + "\n\nВозраст: " + password + "\n\nДолжность: " + job_title+ "\n\nCпециализация:\n " + specialization+ "\n\nПол:\n " + gender  );
        }
        

    }

    render() {
        return (
           
            <form style={{margin:'100px'}} className="Myform" onSubmit={this.handleSubmit}>
                <p style={{fontSize:'40px', margin:'0px'}}>Регистрация</p>
                <Name className="txt" value="" ref={this.nameRef} data={this.state.name_}/>
                <Surname className="txt" value="" ref={this.surnameRef} />
                <Password value="" ref={this.password} data={this.validate2}/>
                <Repeat_password value=""  ref={this.repeat_password} data={this.state.value}/>
                <Job_title className="txt" value="" ref={this.job_title} />
                <Specialization value="" ref={this.specialization} />
                <Gender value="" ref={this.gender} />

                <input type="submit" class="btn btn-primary" value="Регистрация" name="Регистрация"/>
                <input class="btn btn-warning" style={{marginLeft:'30px'}} type="button" value="Сброс" name="Сброс" onClick={this.onClick}/>
            </form>
        );
    }
}