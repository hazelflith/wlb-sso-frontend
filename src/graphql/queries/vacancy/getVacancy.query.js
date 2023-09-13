import gql from 'graphql-tag'

export const GET_VACANCY = gql`
  subscription getVacancy {
    recruitment_vacancies(
      limit: 10
      offset: 0
      order_by: {date_added: desc}
    ) # where: {
    #   _and: {
    #     recruitment_faculty: {faculty: {_in: [1, 2]}}
    #     education_degree: {_contained_in: ["S1", "S2"]}
    #     recruitment_r_category: {category: {_in: [1, 2]}}
    #     legal: {_in: ["CONTRACT"]}
    #     experience_level: {_in: [1, 2]}
    #     recruitment_r_skill: {skill: {_in: [1, 4]}}
    #   }
    # }
    {
      id
      company_profile {
        brand_name
        logo
      }
      title
      company_address {
        address
      }
      date_end
      estimation_salary_from
      estimation_salary_to
      date_added
      last_modified
      recruitment_candidate {
        id
      }
    }
  }
`
