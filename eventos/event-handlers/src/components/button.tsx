interface Props {
    text: string;
    handleClick: () => void;
}

export default function Button (props: Props) {
    const handleClick = () => {
        alert("se le diste click woff 🐕")
    }
    return <button onClick={ props.handleClick }>{props.text}</button>
    
}