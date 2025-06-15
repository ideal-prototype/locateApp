/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer(
  $accountId: String
  $customerId: String
  $password: String
  $apiKey: String
  $busId: [String!]
) {
  onCreateCustomer(
    accountId: $accountId
    customerId: $customerId
    password: $password
    apiKey: $apiKey
    busId: $busId
  ) {
    accountId
    customerId
    password
    apiKey
    busId
    contractUnits
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer(
  $accountId: String
  $customerId: String
  $password: String
  $apiKey: String
  $busId: [String!]
) {
  onUpdateCustomer(
    accountId: $accountId
    customerId: $customerId
    password: $password
    apiKey: $apiKey
    busId: $busId
  ) {
    accountId
    customerId
    password
    apiKey
    busId
    contractUnits
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer(
  $accountId: String
  $customerId: String
  $password: String
  $apiKey: String
  $busId: [String!]
) {
  onDeleteCustomer(
    accountId: $accountId
    customerId: $customerId
    password: $password
    apiKey: $apiKey
    busId: $busId
  ) {
    accountId
    customerId
    password
    apiKey
    busId
    contractUnits
    url
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onCreateBusLinkMobile = /* GraphQL */ `subscription OnCreateBusLinkMobile(
  $busId: String
  $busName: [String]
  $mobileId: [String]
  $restriction: Boolean
) {
  onCreateBusLinkMobile(
    busId: $busId
    busName: $busName
    mobileId: $mobileId
    restriction: $restriction
  ) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBusLinkMobileSubscriptionVariables,
  APITypes.OnCreateBusLinkMobileSubscription
>;
export const onUpdateBusLinkMobile = /* GraphQL */ `subscription OnUpdateBusLinkMobile(
  $busId: String
  $busName: [String]
  $mobileId: [String]
  $restriction: Boolean
) {
  onUpdateBusLinkMobile(
    busId: $busId
    busName: $busName
    mobileId: $mobileId
    restriction: $restriction
  ) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBusLinkMobileSubscriptionVariables,
  APITypes.OnUpdateBusLinkMobileSubscription
>;
export const onDeleteBusLinkMobile = /* GraphQL */ `subscription OnDeleteBusLinkMobile(
  $busId: String
  $busName: [String]
  $mobileId: [String]
  $restriction: Boolean
) {
  onDeleteBusLinkMobile(
    busId: $busId
    busName: $busName
    mobileId: $mobileId
    restriction: $restriction
  ) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBusLinkMobileSubscriptionVariables,
  APITypes.OnDeleteBusLinkMobileSubscription
>;
