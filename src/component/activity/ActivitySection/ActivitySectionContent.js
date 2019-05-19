import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const ActivitySectionContent = props => (
  <>
    <h2>{props.bigSlogan}</h2>
    <h3>{props.midSlogan}</h3>
    <h4>
      <LinkContainer
        to="#"
        className="mt-5"
        style={{
          cursor: 'pointer',
        }}
      >
        <div>
          <span className="pr-1">{props.smallSlogan}</span>
          <i className="far fa-play-circle " />
        </div>
      </LinkContainer>
    </h4>
  </>
)

export default ActivitySectionContent