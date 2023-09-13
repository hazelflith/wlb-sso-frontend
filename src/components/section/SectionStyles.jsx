import styled from 'styled-components'

export const SectionMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  display: block;
`
export const SubTitle = styled.p`
  font-size: 16px;
  font-weight: normal;
  display: block;
`
export const FeaturedJobContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 60px 0 60px;
`
export const FeaturedJob = styled.div`
  margin: 10px;
  border-style: solid;
  border-width: thin;
  border-radius: 5px;
  border-color: ${props => props.theme.borderColor};
  display: flex;
  flex-direction: column;
`
export const FeaturedJobDetail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const FeaturedJobDetailPosition = styled.p``

export const FeaturedJobDetailBadge = styled.div`
  background-color: tomato;
  border-radius: 10px;
  color: white;
  padding: 15px;
  margin-left: 10px;
`

export const FeaturedJobDetailLocation = styled.div`
  display: flex;
  flex-direction: row;
`
