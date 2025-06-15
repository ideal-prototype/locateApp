/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  password?: string | null,
  description?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  password?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  password?: string | null,
  description?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCustomerInput = {
  accountId: string,
  customerId: string,
  password: string,
  apiKey: string,
  busId: Array< string >,
  contractUnits: number,
  url: string,
};

export type Customer = {
  __typename: "Customer",
  accountId: string,
  customerId: string,
  password: string,
  apiKey: string,
  busId: Array< string >,
  contractUnits: number,
  url: string,
};

export type UpdateCustomerInput = {
  accountId: string,
  customerId: string,
  password?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
  contractUnits?: number | null,
  url?: number | null,
};

export type DeleteCustomerInput = {
  accountId: string,
  customerId: string,
};

export type CreateBusLinkMobileInput = {
  busId: string,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction: boolean,
};

export type BusLinkMobile = {
  __typename: "BusLinkMobile",
  busId: string,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction: boolean,
};

export type UpdateBusLinkMobileInput = {
  busId: string,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction?: boolean | null,
};

export type DeleteBusLinkMobileInput = {
  busId: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  password?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type TableCustomerFilterInput = {
  accountId?: TableStringFilterInput | null,
  customerId?: TableStringFilterInput | null,
  password?: TableStringFilterInput | null,
  apiKey?: TableStringFilterInput | null,
  busId?: TableStringFilterInput | null,
  contractUnits?: TableIntFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type TableIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
};

export type CustomerConnection = {
  __typename: "CustomerConnection",
  items?:  Array<Customer | null > | null,
  nextToken?: string | null,
};

export type TableBusLinkMobileFilterInput = {
  busId?: TableStringFilterInput | null,
  busName?: TableStringFilterInput | null,
  mobileId?: TableStringFilterInput | null,
  restriction?: TableBooleanFilterInput | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
};

export type BusLinkMobileConnection = {
  __typename: "BusLinkMobileConnection",
  items?:  Array<BusLinkMobile | null > | null,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type CreateBusLinkMobileMutationVariables = {
  input: CreateBusLinkMobileInput,
};

export type CreateBusLinkMobileMutation = {
  createBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type UpdateBusLinkMobileMutationVariables = {
  input: UpdateBusLinkMobileInput,
};

export type UpdateBusLinkMobileMutation = {
  updateBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type DeleteBusLinkMobileMutationVariables = {
  input: DeleteBusLinkMobileInput,
};

export type DeleteBusLinkMobileMutation = {
  deleteBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      password?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCustomerQueryVariables = {
  customerId: string,
  accountId: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type GetLoginQueryVariables = {
  accountId: string,
  password: string,
};

export type GetLoginQuery = {
  getLogin?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: TableCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "CustomerConnection",
    items?:  Array< {
      __typename: "Customer",
      accountId: string,
      customerId: string,
      password: string,
      apiKey: string,
      busId: Array< string >,
      contractUnits: number,
      url: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetBusLinkMobileQueryVariables = {
  busId: string,
};

export type GetBusLinkMobileQuery = {
  getBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type ListBusLinkMobilesQueryVariables = {
  filter?: TableBusLinkMobileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusLinkMobilesQuery = {
  listBusLinkMobiles?:  {
    __typename: "BusLinkMobileConnection",
    items?:  Array< {
      __typename: "BusLinkMobile",
      busId: string,
      busName?: Array< string | null > | null,
      mobileId?: Array< string | null > | null,
      restriction: boolean,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    password?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  accountId?: string | null,
  customerId?: string | null,
  password?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  accountId?: string | null,
  customerId?: string | null,
  password?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  accountId?: string | null,
  customerId?: string | null,
  password?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    accountId: string,
    customerId: string,
    password: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    url: string,
  } | null,
};

export type OnCreateBusLinkMobileSubscriptionVariables = {
  busId?: string | null,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction?: boolean | null,
};

export type OnCreateBusLinkMobileSubscription = {
  onCreateBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type OnUpdateBusLinkMobileSubscriptionVariables = {
  busId?: string | null,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction?: boolean | null,
};

export type OnUpdateBusLinkMobileSubscription = {
  onUpdateBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};

export type OnDeleteBusLinkMobileSubscriptionVariables = {
  busId?: string | null,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction?: boolean | null,
};

export type OnDeleteBusLinkMobileSubscription = {
  onDeleteBusLinkMobile?:  {
    __typename: "BusLinkMobile",
    busId: string,
    busName?: Array< string | null > | null,
    mobileId?: Array< string | null > | null,
    restriction: boolean,
  } | null,
};
