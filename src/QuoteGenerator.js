import React from "react";
// import Button from "./Button";

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteArray: [],
            text: "",
            author: ""
        }
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    quoteArray: data,
                })
                // let origArray = this.state.quoteArray
                // let firstRandomNum = Math.floor(Math.random(0, origArray.length) * origArray.length);
                // console.log(firstRandomNum);
                // console.log(origArray[firstRandomNum])
                // let firstQuote = origArray[firstRandomNum].text;
                // let firstAuthor = origArray[firstRandomNum].author;
                // console.log(`${firstAuthor} once said, "${firstQuote}"`);
            })
    }

    render() {
        console.log(this.state.firstAuthor)
        return(
            <React.Fragment>
                <h3>Quote Generator</h3>
                <div className="container" id="quote-box">
                    <h2 id="text">{this.state.firstQuote}</h2>
                    <p id="author">{this.state.firstAuthor}</p>
                    <div>
                        {/* <Button text="Twitter" />
                        <Button text="Tumbler" /> */}
                        <a href="#" id="tweet-quote">Tweet</a>
                        <Button text="New Quote" />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            secondaryArray: []
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    secondaryArray: data
                })
                let newArray = this.state.secondaryArray
                let randomNum = Math.floor(Math.random(0, newArray.length) * newArray.length);
                console.log(randomNum);
                console.log(newArray[randomNum])
                let newQuote = newArray[randomNum].text;
                let newAuthor = newArray[randomNum].author;
                console.log(`${newAuthor} once said, "${newQuote}"`);
            })
    }


    render() {
        // console.log()
        return(
            <button id="new-quote" onClick={this.handleClick}>{this.props.text}</button>
        )
    }
}

export default QuoteGenerator;