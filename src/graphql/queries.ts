/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBusLinkMobile = /* GraphQL */ `query GetBusLinkMobile($busId: String!) {
  getBusLinkMobile(busId: $busId) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusLinkMobileQueryVariables,
  APITypes.GetBusLinkMobileQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($accountId: String!, $customerId: String!) {
  getCustomer(accountId: $accountId, customerId: $customerId) {
    accountId
    apiKey
    busId
    contractUnits
    customerId
    password
    url
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const getLogin = /* GraphQL */ `query GetLogin($accountId: String!, $password: String!) {
  getLogin(accountId: $accountId, password: $password) {
    accountId
    apiKey
    busId
    contractUnits
    customerId
    password
    url
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLoginQueryVariables, APITypes.GetLoginQuery>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listBusLinkMobiles = /* GraphQL */ `query ListBusLinkMobiles(
  $filter: TableBusLinkMobileFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusLinkMobiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      busId
      busName
      mobileId
      restriction
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusLinkMobilesQueryVariables,
  APITypes.ListBusLinkMobilesQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: TableCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      accountId
      apiKey
      busId
      contractUnits
      customerId
      password
      url
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      description
      id
      name
      password
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
