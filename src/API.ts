/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

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

export type CreateCustomerInput = {
  accountId: string,
  apiKey: string,
  busId: Array< string >,
  contractUnits: number,
  customerId: string,
  password: string,
  url: string,
};

export type Customer = {
  __typename: "Customer",
  accountId: string,
  apiKey: string,
  busId: Array< string >,
  contractUnits: number,
  customerId: string,
  password: string,
  url: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  password?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CreateUserInput = {
  description?: string | null,
  id?: string | null,
  name: string,
  password?: string | null,
};

export type User = {
  __typename: "User",
  createdAt: string,
  description?: string | null,
  id: string,
  name: string,
  password?: string | null,
  updatedAt: string,
};

export type DeleteBusLinkMobileInput = {
  busId: string,
};

export type DeleteCustomerInput = {
  accountId: string,
  customerId: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdateBusLinkMobileInput = {
  busId: string,
  busName?: Array< string | null > | null,
  mobileId?: Array< string | null > | null,
  restriction?: boolean | null,
};

export type UpdateCustomerInput = {
  accountId: string,
  apiKey?: string | null,
  busId?: Array< string > | null,
  contractUnits?: number | null,
  customerId: string,
  password?: string | null,
  url?: string | null,
};

export type UpdateUserInput = {
  description?: string | null,
  id: string,
  name?: string | null,
  password?: string | null,
};

export type TableBusLinkMobileFilterInput = {
  busId?: TableStringFilterInput | null,
  busName?: TableStringFilterInput | null,
  mobileId?: TableStringFilterInput | null,
  restriction?: TableBooleanFilterInput | null,
};

export type TableStringFilterInput = {
  attributeExists?: boolean | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type TableBooleanFilterInput = {
  attributeExists?: boolean | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type BusLinkMobileConnection = {
  __typename: "BusLinkMobileConnection",
  items?:  Array<BusLinkMobile | null > | null,
  nextToken?: string | null,
};

export type TableCustomerFilterInput = {
  accountId?: TableStringFilterInput | null,
  apiKey?: TableStringFilterInput | null,
  busId?: TableStringFilterInput | null,
  contractUnits?: TableIntFilterInput | null,
  customerId?: TableStringFilterInput | null,
  password?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableIntFilterInput = {
  attributeExists?: boolean | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type CustomerConnection = {
  __typename: "CustomerConnection",
  items?:  Array<Customer | null > | null,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  password?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  password?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
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

export type CreateCustomerMutationVariables = {
  input: CreateCustomerInput,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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

export type DeleteCustomerMutationVariables = {
  input: DeleteCustomerInput,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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

export type UpdateCustomerMutationVariables = {
  input: UpdateCustomerInput,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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

export type GetCustomerQueryVariables = {
  accountId: string,
  customerId: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
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
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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
      apiKey: string,
      busId: Array< string >,
      contractUnits: number,
      customerId: string,
      password: string,
      url: string,
    } | null > | null,
    nextToken?: string | null,
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
      createdAt: string,
      description?: string | null,
      id: string,
      name: string,
      password?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
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

export type OnCreateCustomerSubscriptionVariables = {
  accountId?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
  customerId?: string | null,
  password?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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

export type OnDeleteCustomerSubscriptionVariables = {
  accountId?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
  customerId?: string | null,
  password?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
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

export type OnUpdateCustomerSubscriptionVariables = {
  accountId?: string | null,
  apiKey?: string | null,
  busId?: Array< string > | null,
  customerId?: string | null,
  password?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    accountId: string,
    apiKey: string,
    busId: Array< string >,
    contractUnits: number,
    customerId: string,
    password: string,
    url: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    createdAt: string,
    description?: string | null,
    id: string,
    name: string,
    password?: string | null,
    updatedAt: string,
  } | null,
};
