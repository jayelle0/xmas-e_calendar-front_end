import React, {useState} from 'react'
import DayForm from './Dayform.js'
import Modal from 'react-modal'

class Day extends React.Component {
    state = {
        display: false,
        dayObj: this.props.day,
        surpriseModalIsOpen: false, 
        formModalIsOpen: false, 
    }

     customStyles =()=> {
        return {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            } 
        }
      }

    renderDayForm = () => {
        console.log("form was clicked")
        this.setState({display:!this.state.display, formModalIsOpen: true})
        
    }

    submitHandler = (newDayObj) => {
        this.setState({dayObj: newDayObj})
    }

    openSurpriseModal = () => {
        this.setState({surpriseModalIsOpen: true})
    }

    closeSurpriseModal = () => {
        this.setState({surpriseModalIsOpen:false})
    }

    // openFormModal = () => {
    //     this.setState({FormModalIsOpen: true})
    // }

    closeFormModal = () => {
        this.setState({formModalIsOpen:false})
    }
    render() {
        return (
            <div className="card">
                <div>
                    <h5>{this.props.day.date}</h5>
                <div className="card-buttons">
                    <button className="edit shadow-sm"onClick={this.renderDayForm}></button>
                    <button className="surprise" onClick={this.openSurpriseModal}></button>
                </div>
                <Modal isOpen= {this.state.surpriseModalIsOpen} style={this.customStyles()}>  
                    <img src={this.props.day.image_video}/>
                    <h3>{this.props.day.content}</h3>
                <button className="btn" onClick = {this.closeSurpriseModal}> Close </button>
                 </Modal>
                 <Modal isOpen= {this.state.formModalIsOpen} style={this.customStyles()}  >  
                    <DayForm createDayData ={this.props.createDayData} delete={this.props.delete} display = {this.state.display} day={this.props.day} calendarId = {this.props.calendarId} submitHandler={this.submitHandler}/>
                    <button className="btn" onClick = {this.closeFormModal}> Close </button>
                 </Modal>
                </div>
            </div>
        )
    }
}

export default Day 
