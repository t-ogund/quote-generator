import React from "react";
// import Button from "./Button";

class QuoteGenerator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quoteArray: [],
            text: "",
            author: ""
            // firstRandomNum: ""
        }
    }

    componentDidMount() {
        fetch("https://type.fit/api/quotes")
            .then(response => response.json())
            .then(data => {
                let firstRandomNum = Math.floor(Math.random(0, data.length) * data.length);
                let initialQuote = data[firstRandomNum].text
                let initialAuthor = data[firstRandomNum].author
                this.setState({
                    quoteArray: data,
                    text: initialQuote,
                    author: initialAuthor
                })
                console.log(this.state.quoteArray[0])
                console.log(this.state.firstRandomNum)
                console.log(this.state.text);
                console.log(firstRandomNum)
                console.log(initialQuote)
                console.log(initialAuthor)
                console.log(`${initialAuthor} once said, "${initialQuote}"`)
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
        return(
            <React.Fragment>
                <h3>Quote Generator</h3>
                <div className="container" id="quote-box">
                    <h2 id="text">{this.state.text}</h2>
                    <p id="author">{this.state.author}</p>
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