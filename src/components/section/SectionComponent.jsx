import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
// import MenuItem from '../menu-item/MenuItemComponent'
import {
  SectionMenuContainer,
  Title,
  SubTitle,
  FeaturedJobContainer,
  FeaturedJob,
  FeaturedJobDetail,
  FeaturedJobDetailPosition,
  FeaturedJobDetailLocation,
  FeaturedJobDetailBadge,
} from './SectionStyles'

const Section = (props, {sections}) => {
  return (
    <SectionMenuContainer>
      <Title>{props.title}</Title>
      {props.subTitle && <SubTitle>{props.subTitle}</SubTitle>}
      {props.job && (
        <FeaturedJobContainer>
          {props.job.map((job, index) => (
            <FeaturedJob key={index}>
              <img src={job.thumbnail} alt={job + '-' + index} />
              <FeaturedJobDetail>
                <FeaturedJobDetailPosition>
                  {job.position}
                </FeaturedJobDetailPosition>
                <FeaturedJobDetailLocation>
                  <FeaturedJobDetailPosition>
                    {job.location}
                  </FeaturedJobDetailPosition>
                  <FeaturedJobDetailBadge>{job.type}</FeaturedJobDetailBadge>
                </FeaturedJobDetailLocation>

                <FeaturedJobDetailPosition>
                  Company Description AdRoll start-up that develops consectetuer
                  adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                  nibh nec urna. In nisi neque, aliquet
                </FeaturedJobDetailPosition>
              </FeaturedJobDetail>
            </FeaturedJob>
          ))}
        </FeaturedJobContainer>
      )}
    </SectionMenuContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Section)
