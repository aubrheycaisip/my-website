import styled from 'styled-components'
import PropTypes from 'prop-types'

const Track = styled.div`
    background-color: whitesmoke;
    width: 300px;
    height: 15px;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
    border: solid 0.5px;

`;
const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #2bae66ff;
    border-radius: 8px;
    text-align: center;
`;
const Label = styled.p`
    font-size: small;
    margin: 0;
`

const ProgressBar = props => {
    return(
        <Track>
            <Thumb percentage={props.percentage}>
                <Label>{props.label}</Label>
            </Thumb>
        </Track>
    )
}
ProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string
}
export default ProgressBar