import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetsContainer, Heading} from './styledComponents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <PlanetsContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsContainer>
  )
}

export default PlanetsSlider
