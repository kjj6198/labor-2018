import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withData from '../../HOCs/withData';
import ResponsiveSVG from '../../components/ResponsiveSVG';
import AffixComponent from '../../components/AffixComponent';
import NormalAxis from '../../components/axis/NormalAxis';
import Story from './components/Story';

const Wrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 60% 1fr;
`;

const InfoInnerWrapper = styled.div`
  position: ${props => (props.affix ? 'fixed' : 'static')};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
`;

const InfoContainer = styled.div`

`;

class LaborEvents extends Component {
  story = React.createRef();
  componentDidMount() {

  }

  render() {
    return (
      <AffixComponent offset={50} offsetBottom={this.story.current ? this.story.current.clientHeight : null}>
        {affix => (
          <Wrapper>
            <InfoContainer>
              <InfoInnerWrapper affix={affix} >
                adslfkjashdfkladshjfklajsdhfdklhj
              </InfoInnerWrapper>
            </InfoContainer>
            <div ref={this.story}>
              {this.props.data.eventData.map(event => (<Story
                key={event.Title}
                date={`${event.Year}/${event.Month}/${event.Date}`}
                title={event.Title}
                content={event.Description}
              />))}
            </div>
          </Wrapper>
        )}
      </AffixComponent>
    );
  }
}

LaborEvents.propTypes = {
  eventData: PropTypes.shape({}),
};

export default withData(LaborEvents);
