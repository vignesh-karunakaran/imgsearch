import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0};
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan);
    }
    setSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height/10);
        this.setState({ spans: span});
    }
    render() {
        const { description, urls, id} = this.props.image;
    return (
        <div style={{gridRowEnd: `span ${this.state.spans}`}}>
            <img ref={this.imageRef} key={id} src={urls.regular} alt={description} />
        </div>
        );
    }
}

export default ImageCard;