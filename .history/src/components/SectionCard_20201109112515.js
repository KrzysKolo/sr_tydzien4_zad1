import React, { Component } from 'react';
import FormCard from './FormCard';
import ParagraphCard from './ParagraphCard';

class SectionCard extends Component {
    state = {
        bill: {
            amount: "",
            tip: 0,
        },
        results: 0,
        show: true,
    }
     handleChange = e => {
        let  newBill = {
         ...this.state.bill,
         [e.target.name]: e.target.value,
         }

         this.setState({
             bill: newBill
         })
     }
     onSubmit = e => {
        e.preventDefault();
     }
     handleConvert = (e) => {
        const price = parseFloat(this.state.bill.amount)*1.08;
        const tip = parseFloat(this.state.bill.tip);
        const suma = (price+(price*tip)).toFixed(2);
         this.setState({
            results: suma,
            bill: {
                amount: "",
                tip: 0,
            },
            show: false,
         })
     }

     render() {

        return  this.state.show ?
        <FormCard bill={this.state.bill} result={this.state.result} show={this.state.show} handleChange={this.handleChange} handleConvert={this.handleConvert}/>
        : <ParagraphCard result={this.state.results} />
         {/* <section className="billCard__section billCard__section--background"><p>Twój rachunek: {this.state.results} zł</p></section> */} ;
    }
}

export default SectionCard;