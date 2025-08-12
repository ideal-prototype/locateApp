/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

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
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer(
  $accountId: String
  $apiKey: String
  $busId: [String!]
  $customerId: String
  $password: String
) {
  onCreateCustomer(
    accountId: $accountId
    apiKey: $apiKey
    busId: $busId
    customerId: $customerId
    password: $password
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
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
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer(
  $accountId: String
  $apiKey: String
  $busId: [String!]
  $customerId: String
  $password: String
) {
  onDeleteCustomer(
    accountId: $accountId
    apiKey: $apiKey
    busId: $busId
    customerId: $customerId
    password: $password
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
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
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer(
  $accountId: String
  $apiKey: String
  $busId: [String!]
  $customerId: String
  $password: String
) {
  onUpdateCustomer(
    accountId: $accountId
    apiKey: $apiKey
    busId: $busId
    customerId: $customerId
    password: $password
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
