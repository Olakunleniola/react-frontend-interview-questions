// Question:

// What wrong with this code
// What are 2 things wrong in this code

// class Question4 extends React.Component {
// 	constructor(props) {
//     super(props)

//     this.state = {
//       message: 'Welcome to React world'
//     }
//   }
//   changeState(str) {
//   	this.setState({
//     	message: str
//     });
//     //Check message has changed to www
//     if (this.state.message == 'www') {
//     	alert('This is done correctly');
//     }
//   }
//   render() {
//     return <div>Hello {this.props.name}
//     <button onClick={() => this.changeState('www')}></button>
//     </div>;
//   }
// }

import React from "react";

class Question5 extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
        message: 'Welcome to React world'
        }
    }

    changeState(str) {
        this.setState({
            message: str
        });
    }

    componentDidUpdate() {
    //Check message has changed to www
        if (this.state.message === 'www') {
            alert('This is done correctly');
        }
    
    }

    render() {
        return (
            <div className="p-10">
                <h2 className="font-black my-10">Question 5</h2>
                <p>
                    What wrong with this code<br/>
                    What are 2 things wrong in this code

                    {/* class Question4 extends React.Component \{
                        constructor(props) \{
                        super(props)

                        this.state = {
                        message: 'Welcome to React world'
                        }
                    }
                    changeState(str) {
                        this.setState({
                            message: str
                        });
                        //Check message has changed to www
                        if (this.state.message == 'www') {
                            alert('This is done correctly');
                        }
                    }
                    render() {
                        return <div>Hello {this.props.name}
                        <button onClick={() => this.changeState('www')}></button>
                        </div>;
                    }
                    } */}
                </p>
                <h3 className="my-6 font-bold">Solution</h3>
                <div className="text-lg">Hello {this.props.name}
                    <button className="block p-2 bg-green-400 text-white rounded" onClick={() => this.changeState('www')}>Click me</button>
                    <ul className="p-3 my-8 list-disc">
                        <li>The first is the problem is not using strict "===" equality sign</li>  
                        <li>The second problem is checking if the state have changed before state change is performed because in react the setState() is asynchronous.</li>
                    </ul>
                </div>

            </div>
        ) 
    }
}

export default Question5;