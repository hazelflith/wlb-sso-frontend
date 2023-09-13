import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import MenuItem from '../menu-item/MenuItemComponent'
import {DirectoryMenuContainer, DirectoryMenuHeading} from './DirectoryStyles'

const Directory = ({sections}) => (
  <DirectoryMenuContainer>
    <DirectoryMenuHeading>
      <h2>HC Ecosystems</h2>
    </DirectoryMenuHeading>
    {sections.map(({id, ...otherSectionProps}) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
