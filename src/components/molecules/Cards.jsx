import Image from "../atoms/Image";
import Text from "../atoms/Text";
import './Cards.css'

function Cards(props) {
    return (
        <div id="cards_box">
            <Image image={props.image}></Image>
            <Text text={props.text}></Text>
        </div>
      );
}

export default Cards;