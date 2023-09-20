import styled from "styled-components";
import imageFilter from "../../imageFilter";


const Card = styled.div`
    box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 2px 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    font-size: 12px;
`;

const Info =styled.div`
    display: flex;
    flex-direction: column;
    .type{
        font-weight: bold;
    }
`;

export default ({cargo}) => {
    const {id, type, value, from, date} = cargo
    return <Card  >
        {imageFilter(type)}
        <Info>
            <span className="type">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Info>
        <span>{date}</span>
    </Card>
}