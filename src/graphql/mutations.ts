/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBusLinkMobile = /* GraphQL */ `mutation CreateBusLinkMobile($input: CreateBusLinkMobileInput!) {
  createBusLinkMobile(input: $input) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBusLinkMobileMutationVariables,
  APITypes.CreateBusLinkMobileMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $condition: ModelUserConditionInput
  $input: CreateUserInput!
) {
  createUser(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteBusLinkMobile = /* GraphQL */ `mutation DeleteBusLinkMobile($input: DeleteBusLinkMobileInput!) {
  deleteBusLinkMobile(input: $input) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBusLinkMobileMutationVariables,
  APITypes.DeleteBusLinkMobileMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $condition: ModelUserConditionInput
  $input: DeleteUserInput!
) {
  deleteUser(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const updateBusLinkMobile = /* GraphQL */ `mutation UpdateBusLinkMobile($input: UpdateBusLinkMobileInput!) {
  updateBusLinkMobile(input: $input) {
    busId
    busName
    mobileId
    restriction
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBusLinkMobileMutationVariables,
  APITypes.UpdateBusLinkMobileMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $condition: ModelUserConditionInput
  $input: UpdateUserInput!
) {
  updateUser(condition: $condition, input: $input) {
    createdAt
    description
    id
    name
    password
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
