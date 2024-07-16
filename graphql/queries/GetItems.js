import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems(
    $keywords: String,
    $page: Int,
    $pageSize: Int
  ) {
    items(
      keywords: $keywords,
      page: $page,
      pageSize: $pageSize
    ) {
      items {
        id
        name
        description
      }
      total
    }
  }
`;
