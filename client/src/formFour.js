import React,{ Component } from 'react';
import FormField from './utils/formFields';
import { validate } from './utils/validate';
import axios from 'axios';




class FormFour extends Component {
    state = { 
        isTanmoy: false,
        isAnupam: false,
        isSourav: false,
        isDev: false,
        isAakash: false,
        maxAge: 100,
        loading: false,
        formData:{
            name:{
                element:'input',
                value:'',
                config:{
                    name:'name_input',
                    type:'text',
                    placeholder:'Enter your name'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value:'',
                config:{
                    name:'lastname_input',
                    type:'text',
                    placeholder:'Enter your lastname'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            },
            age:{
                element:'select',
                value:'',
                config:{
                    name:'age_input'
                },
                validation:{
                    required:true,
                    minNum: 20
                },
                valid:false,
                touched: false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value:'',
                config:{
                    name:'message_input',
                    rows:3,
                    placeholder:'Enter your message....'
                },
                validation:{
                    required:true
                },
                valid:false,
                touched: false,
                validationMessage:''
            }    
            
        }
    }

    onChangeTanmoy = () => {
      this.setState(initialState => ({
        isTanmoy: !initialState.isAakash,
      }));
    }
    onChangeAnupam = () => {
      this.setState(initialState => ({
        isAnupam: !initialState.isAnupam,
      }));
    }
    onChangeSourav = () => {
      this.setState(initialState => ({
        isSourav: !initialState.isSourav,
      }));
    }
    onChangeDev = () => {
      this.setState(initialState => ({
        isDev: !initialState.isDev,
      }));
    }
    onChangeAakash = () => {
      this.setState(initialState => ({
        isAakash: !initialState.isAakash,
      }));
    }
    

    generateOptions = () => {
        const ageArray = [];
        for(let i =1 ; i < this.state.maxAge;i++){
            ageArray.push(i)
        }

        return ageArray.map((value,i)=>(
            <option key={i} value={value}>{value}</option>
        ))
    }

    updateForm = (element) => {
        const newFormData = { ...this.state.formData }
        const newElement = { ...newFormData[element.id] }

        newElement.value = element.event.target.value;

        /// validation
        let validateData = validate(newElement);
        newElement.valid = validateData[0];
        newElement.validationMessage = validateData[1];

        /// blur
        if(element.blur){
            newElement.touched = element.blur
        }

        newFormData[element.id] = newElement;
        this.setState({
            formData: newFormData
        })
    }
    //Submit
    onSubmit = (event) => {
      event.preventDefault();
    }
  
      

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formData){
            formIsValid = this.state.formData[key].valid && formIsValid;
        }
        if(formIsValid){
            this.setState({loading:true});
            for(let key in this.state.formData){
                dataToSubmit[key] =  this.state.formData[key].value
            }
             console.log('SUBMIT FORM WITH',dataToSubmit);
            setTimeout(() => {
                this.setState({loading:false});
                this.onSuccess();
            }, 2000);


        } else {
            alert('sorry the form is not valid')
        }
    }
    

    onSuccess = () => {
        let forDataCopy = {
            ...this.state.formData
        }

        for(let key in this.state.formData){
            forDataCopy[key].value = '';
            forDataCopy[key].valid = false;
            forDataCopy[key].touched = false;
            forDataCopy[key].validationMessage = '';
        }
        this.setState({formData: forDataCopy});
        alert('THANK YOU WE WILL CONTACT YOU LATER...OR NOT')
    }


    render(){
      // console.log(this.state.formData.name)

       return(
           <>
               <div className="container">
                   <form>
                       <div className="form-group">
                           <label>Name</label>
                           <FormField
                               formData={this.state.formData.name}
                               change={ (element) => this.updateForm(element) }
                               id="name"
                           />
                       </div>
                       <div className="form-group">
                           <label>Lastname</label>
                           <FormField
                               formData={this.state.formData.lastname}
                               change={ (element) => this.updateForm(element) }
                               id="lastname"
                           />
                       </div>
                       <div className="form-group">
                           <label>Age</label>
                           <FormField
                               formData={this.state.formData.age}
                               change={ (element) => this.updateForm(element) }
                               id="age"
                           >   
                               <option value="">Select age</option>
                               {this.generateOptions()}
                           </FormField>
                       </div>
                       <div className="form-group">
                           <label>Message</label>
                           <FormField
                               formData={this.state.formData.message}
                               change={ (element) => this.updateForm(element) }
                               id="message"
                           />  
                       </div>
                       <div className="FormFour">
        <h2>Store Multiple Checkboxes Names in React</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isTanmoy}
                onChange={this.onChangeTanmoy}
                className="form-check-input"
              />
              Tanmoy
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isAakash}
                onChange={this.onChangeAakash}
                className="form-check-input"
              />
              Aakash
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isSourav}
                onChange={this.onChangeSourav}
                className="form-check-input"
              />
              Sourav
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDev}
                onChange={this.onChangeDev}
                className="form-check-input"
              />
              Dev
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isAnupam}
                onChange={this.onChangeAnupam}
                className="form-check-input"
              />
              Anupam
            </label>
          </div>

          <div className="form-group">
            <button className="btn btn-success">
              Save
            </button>
          </div>
        </form>
      </div>

                       <button
                           type="submit"
                           className="btn btn-primary"
                           onClick={ (event)=> this.submitForm(event) }
                           disabled={this.state.loading}
                       >
                           Submit
                       </button>


                   </form>
               </div>
           </>
       )
   }
}

export default FormFour;
