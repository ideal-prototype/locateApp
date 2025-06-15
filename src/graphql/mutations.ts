/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
    id
    name
    password
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
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
