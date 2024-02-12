import { Card } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { CardBody, Heading, Image } from "@chakra-ui/react";

interface Props{
    game: Game;
}

const GameCard = (props: Props) => {
    return (
    <Card>
        <Image src={props.game.background_image}></Image>
        <CardBody>
            <Heading>{props.game.name}</Heading>
        </CardBody>
    </Card>
    )
}

export default GameCard