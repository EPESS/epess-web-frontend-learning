/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Delta: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  Json: { input: any; output: any; }
  JsonList: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

/** An admin note. */
export type AdminNote = {
  __typename?: 'AdminNote';
  /** The center the admin note is associated with. */
  center?: Maybe<Center>;
  /** The ID of the center the admin note is associated with. */
  centerId?: Maybe<Scalars['String']['output']>;
  /** The content of the admin note. */
  content?: Maybe<Scalars['String']['output']>;
  /** The date and time the admin note was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the admin note. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The mentor the admin note is associated with. */
  mentor?: Maybe<CenterMentor>;
  /** The ID of the mentor the admin note is associated with. */
  mentorId?: Maybe<Scalars['String']['output']>;
  /** The user who created the admin note. */
  notedBy?: Maybe<User>;
  /** The ID of the user who created the admin note. */
  notedByUserId?: Maybe<Scalars['String']['output']>;
  /** The resume the admin note is associated with. */
  resume?: Maybe<Resume>;
  /** The ID of the resume the admin note is associated with. */
  resumeId?: Maybe<Scalars['String']['output']>;
  /** The service the admin note is associated with. */
  service?: Maybe<Service>;
  /** The ID of the service the admin note is associated with. */
  serviceId?: Maybe<Scalars['String']['output']>;
  /** The date and time the admin note was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminNoteCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutAdminNoteInput>;
};

export type AdminNoteCreateInput = {
  center?: InputMaybe<AdminNoteCreateCenterRelationInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteCreateMentorRelationInput>;
  notedBy: AdminNoteCreateNotedByRelationInput;
  resume?: InputMaybe<AdminNoteCreateResumeRelationInput>;
  service?: InputMaybe<AdminNoteCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteCreateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutAdminNoteInput>;
};

export type AdminNoteCreateNotedByRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutAdminNoteInput>;
};

export type AdminNoteCreateResumeRelationInput = {
  connect?: InputMaybe<ResumeUniqueFilter>;
  create?: InputMaybe<ResumeCreateWithoutAdminNoteInput>;
};

export type AdminNoteCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutAdminNoteInput>;
};

export type AdminNoteCreateWithoutCenterInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteCreateMentorRelationInput>;
  notedBy: AdminNoteCreateNotedByRelationInput;
  resume?: InputMaybe<AdminNoteCreateResumeRelationInput>;
  service?: InputMaybe<AdminNoteCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteCreateWithoutMentorInput = {
  center?: InputMaybe<AdminNoteCreateCenterRelationInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notedBy: AdminNoteCreateNotedByRelationInput;
  resume?: InputMaybe<AdminNoteCreateResumeRelationInput>;
  service?: InputMaybe<AdminNoteCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteCreateWithoutNotedByInput = {
  center?: InputMaybe<AdminNoteCreateCenterRelationInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteCreateMentorRelationInput>;
  resume?: InputMaybe<AdminNoteCreateResumeRelationInput>;
  service?: InputMaybe<AdminNoteCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteCreateWithoutResumeInput = {
  center?: InputMaybe<AdminNoteCreateCenterRelationInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteCreateMentorRelationInput>;
  notedBy: AdminNoteCreateNotedByRelationInput;
  service?: InputMaybe<AdminNoteCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteCreateWithoutServiceInput = {
  center?: InputMaybe<AdminNoteCreateCenterRelationInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteCreateMentorRelationInput>;
  notedBy: AdminNoteCreateNotedByRelationInput;
  resume?: InputMaybe<AdminNoteCreateResumeRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteFilter = {
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  notedBy?: InputMaybe<UserFilter>;
  notedByUserId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminNoteListFilter = {
  every?: InputMaybe<AdminNoteFilter>;
  none?: InputMaybe<AdminNoteFilter>;
  some?: InputMaybe<AdminNoteFilter>;
};

export type AdminNoteOrderBy = {
  center?: InputMaybe<CenterOrderBy>;
  centerId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mentor?: InputMaybe<CenterMentorOrderBy>;
  mentorId?: InputMaybe<OrderBy>;
  notedBy?: InputMaybe<UserOrderBy>;
  notedByUserId?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumeOrderBy>;
  resumeId?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type AdminNoteUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type AdminNoteUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutAdminNoteInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterUpdateWithoutAdminNoteInput>;
};

export type AdminNoteUpdateInput = {
  center?: InputMaybe<AdminNoteUpdateCenterRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteUpdateMentorRelationInput>;
  notedBy?: InputMaybe<AdminNoteUpdateNotedByRelationInput>;
  resume?: InputMaybe<AdminNoteUpdateResumeRelationInput>;
  service?: InputMaybe<AdminNoteUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteUpdateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutAdminNoteInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterMentorUpdateWithoutAdminNoteInput>;
};

export type AdminNoteUpdateNotedByRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutAdminNoteInput>;
  update?: InputMaybe<UserUpdateWithoutAdminNoteInput>;
};

export type AdminNoteUpdateResumeRelationInput = {
  connect?: InputMaybe<ResumeUniqueFilter>;
  create?: InputMaybe<ResumeCreateWithoutAdminNoteInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ResumeUpdateWithoutAdminNoteInput>;
};

export type AdminNoteUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutAdminNoteInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ServiceUpdateWithoutAdminNoteInput>;
};

export type AdminNoteUpdateWithoutCenterInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteUpdateMentorRelationInput>;
  notedBy?: InputMaybe<AdminNoteUpdateNotedByRelationInput>;
  resume?: InputMaybe<AdminNoteUpdateResumeRelationInput>;
  service?: InputMaybe<AdminNoteUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteUpdateWithoutMentorInput = {
  center?: InputMaybe<AdminNoteUpdateCenterRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  notedBy?: InputMaybe<AdminNoteUpdateNotedByRelationInput>;
  resume?: InputMaybe<AdminNoteUpdateResumeRelationInput>;
  service?: InputMaybe<AdminNoteUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteUpdateWithoutNotedByInput = {
  center?: InputMaybe<AdminNoteUpdateCenterRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteUpdateMentorRelationInput>;
  resume?: InputMaybe<AdminNoteUpdateResumeRelationInput>;
  service?: InputMaybe<AdminNoteUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteUpdateWithoutResumeInput = {
  center?: InputMaybe<AdminNoteUpdateCenterRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteUpdateMentorRelationInput>;
  notedBy?: InputMaybe<AdminNoteUpdateNotedByRelationInput>;
  service?: InputMaybe<AdminNoteUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteUpdateWithoutServiceInput = {
  center?: InputMaybe<AdminNoteUpdateCenterRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<AdminNoteUpdateMentorRelationInput>;
  notedBy?: InputMaybe<AdminNoteUpdateNotedByRelationInput>;
  resume?: InputMaybe<AdminNoteUpdateResumeRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AdminNoteWithoutCenterFilter = {
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  notedBy?: InputMaybe<UserFilter>;
  notedByUserId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminNoteWithoutMentorFilter = {
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  notedBy?: InputMaybe<UserFilter>;
  notedByUserId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminNoteWithoutNotedByFilter = {
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminNoteWithoutResumeFilter = {
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  notedBy?: InputMaybe<UserFilter>;
  notedByUserId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminNoteWithoutServiceFilter = {
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  notedBy?: InputMaybe<UserFilter>;
  notedByUserId?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum AnswerType {
  Multiple = 'MULTIPLE',
  Single = 'SINGLE'
}

export type AnswerTypeFilter = {
  equals?: InputMaybe<AnswerType>;
  in?: InputMaybe<Array<AnswerType>>;
  not?: InputMaybe<AnswerTypeFilter>;
  notIn?: InputMaybe<Array<AnswerType>>;
};

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  not?: InputMaybe<BooleanFilter>;
  notIn?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** A category of services. */
export type Category = {
  __typename?: 'Category';
  /** The description of the category. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the category. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the category. */
  name?: Maybe<Scalars['String']['output']>;
  /** The subcategory of the category. */
  subCategory?: Maybe<Array<SubCategory>>;
};

export type CategoryCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subCategory?: InputMaybe<CategoryCreateSubCategoryRelationInput>;
};

export type CategoryCreateSubCategoryRelationInput = {
  connect?: InputMaybe<Array<SubCategoryUniqueFilter>>;
  create?: InputMaybe<Array<SubCategoryCreateWithoutCategoryInput>>;
};

export type CategoryCreateWithoutSubCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CategoryFilter = {
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  subCategory?: InputMaybe<SubCategoryListFilter>;
};

export type CategoryOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  subCategory?: InputMaybe<SubCategoryOrderBy>;
};

export type CategoryUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryUpdateWithoutSubCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** A center in the system. */
export type Center = {
  __typename?: 'Center';
  /** The admin note of the center. */
  adminNote?: Maybe<Array<AdminNote>>;
  /** The bank of the center. */
  bank?: Maybe<Scalars['String']['output']>;
  /** The bank account number of the center. */
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  /** The mentors of the center. */
  centerMentor?: Maybe<Array<CenterMentor>>;
  /** The owner of the center. */
  centerOwner?: Maybe<User>;
  /** The ID of the center owner. */
  centerOwnerId?: Maybe<Scalars['ID']['output']>;
  /** The status of the center. */
  centerStatus?: Maybe<CenterStatus>;
  /** The chat room associated with the center. */
  chatRoom?: Maybe<Array<ChatRoom>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The description of the center. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the center. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Whether the center is an individual center. */
  individual?: Maybe<Scalars['Boolean']['output']>;
  /** The location of the center. */
  location?: Maybe<Scalars['String']['output']>;
  /** The file associated with the center logo. */
  logoFile?: Maybe<UploadedFile>;
  /** The URL of the center logo. */
  logoUrl?: Maybe<Scalars['String']['output']>;
  /** The name of the center. */
  name?: Maybe<Scalars['String']['output']>;
  /** The resume of the center. */
  resume?: Maybe<Array<Resume>>;
  /** The services provided by the center. */
  services?: Maybe<Array<Service>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the uploaded file. */
  uploadedFileId?: Maybe<Scalars['ID']['output']>;
};

/** A center analytic in the system. */
export type CenterAnalytic = {
  __typename?: 'CenterAnalytic';
  /** The number of active mentors. */
  activeMentorCount?: Maybe<Scalars['Int']['output']>;
  /** The number of active services. */
  activeServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The ID of the center. */
  centerId?: Maybe<Scalars['String']['output']>;
  /** The average rating. */
  rating?: Maybe<Scalars['Float']['output']>;
  /** The total revenue. */
  revenue?: Maybe<Scalars['Int']['output']>;
  /** The total number of services. */
  totalServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The date the analytic was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CenterCreateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutCenterInput>>;
};

export type CenterCreateCenterMentorsRelationInput = {
  connect?: InputMaybe<Array<CenterMentorUniqueFilter>>;
  create?: InputMaybe<Array<CenterMentorCreateWithoutCenterInput>>;
};

export type CenterCreateCenterOwnerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutCenterInput>;
};

export type CenterCreateChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutCenterInput>>;
};

export type CenterCreateInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateLogoFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutCenterInput>;
};

export type CenterCreateResumeRelationInput = {
  connect?: InputMaybe<Array<ResumeUniqueFilter>>;
  create?: InputMaybe<Array<ResumeCreateWithoutCenterInput>>;
};

export type CenterCreateServicesRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutCenterInput>>;
};

export type CenterCreateWithoutAdminNoteInput = {
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutCenterMentorsInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutCenterOwnerInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutChatRoomInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutLogoFileInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutResumeInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  services?: InputMaybe<CenterCreateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterCreateWithoutServicesInput = {
  adminNote?: InputMaybe<CenterCreateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterCreateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterCreateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterCreateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location: Scalars['String']['input'];
  logoFile?: InputMaybe<CenterCreateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  resume?: InputMaybe<CenterCreateResumeRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  bank?: InputMaybe<StringFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  centerMentors?: InputMaybe<CenterMentorListFilter>;
  centerOwner?: InputMaybe<UserFilter>;
  centerOwnerId?: InputMaybe<StringFilter>;
  centerStatus?: InputMaybe<CenterStatusFilter>;
  chatRoom?: InputMaybe<ChatRoomListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  individual?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<StringFilter>;
  logoFile?: InputMaybe<UploadedFileFilter>;
  logoUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeListFilter>;
  services?: InputMaybe<ServiceListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uploadedFileId?: InputMaybe<StringFilter>;
};

export type CenterListFilter = {
  every?: InputMaybe<CenterFilter>;
  none?: InputMaybe<CenterFilter>;
  some?: InputMaybe<CenterFilter>;
};

/** A mentor of a center. */
export type CenterMentor = {
  __typename?: 'CenterMentor';
  /** Whether the mentor is active. */
  active?: Maybe<Scalars['Boolean']['output']>;
  /** The admin note of the center mentor. */
  adminNote?: Maybe<Array<AdminNote>>;
  /** The center. */
  center?: Maybe<Center>;
  /** The ID of the center. */
  centerId?: Maybe<Scalars['ID']['output']>;
  /** The workshops created by the center mentor. */
  createdWorkshop?: Maybe<Array<Workshop>>;
  /** Whether the mentor is the center owner. */
  isCenterOwner?: Maybe<Scalars['Boolean']['output']>;
  /** The managed services of the center mentor. */
  managedService?: Maybe<Array<ManagedService>>;
  /** The mentor. */
  mentor?: Maybe<User>;
  /** The ID of the mentor. */
  mentorId?: Maybe<Scalars['ID']['output']>;
};

export type CenterMentorCreateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutMentorInput>>;
};

export type CenterMentorCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutCenterMentorsInput>;
};

export type CenterMentorCreateCreatedWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutMentorInput>>;
};

export type CenterMentorCreateInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorCreateManagedServiceRelationInput = {
  connect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  create?: InputMaybe<Array<ManagedServiceCreateWithoutMentorInput>>;
};

export type CenterMentorCreateMentorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMentorInput>;
};

export type CenterMentorCreateQuizRelationInput = {
  connect?: InputMaybe<Array<QuizUniqueFilter>>;
  create?: InputMaybe<Array<QuizCreateWithoutCenterMentorInput>>;
};

export type CenterMentorCreateWithoutAdminNoteInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorCreateWithoutCenterInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorCreateWithoutCreatedWorkshopInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorCreateWithoutManagedServiceInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorCreateWithoutMentorInput = {
  Quiz?: InputMaybe<CenterMentorCreateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
};

export type CenterMentorCreateWithoutQuizInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorCreateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center: CenterMentorCreateCenterRelationInput;
  createdWorkshop?: InputMaybe<CenterMentorCreateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorCreateManagedServiceRelationInput>;
  mentor: CenterMentorCreateMentorRelationInput;
};

export type CenterMentorFilter = {
  Quiz?: InputMaybe<QuizListFilter>;
  active?: InputMaybe<BooleanFilter>;
  adminNote?: InputMaybe<AdminNoteListFilter>;
  bio?: InputMaybe<StringFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdWorkshop?: InputMaybe<WorkshopListFilter>;
  isCenterOwner?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
};

export type CenterMentorListFilter = {
  every?: InputMaybe<CenterMentorFilter>;
  none?: InputMaybe<CenterMentorFilter>;
  some?: InputMaybe<CenterMentorFilter>;
};

export type CenterMentorOrderBy = {
  Quiz?: InputMaybe<QuizOrderBy>;
  active?: InputMaybe<OrderBy>;
  adminNote?: InputMaybe<AdminNoteOrderBy>;
  bio?: InputMaybe<OrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  centerId?: InputMaybe<OrderBy>;
  createdWorkshop?: InputMaybe<WorkshopOrderBy>;
  isCenterOwner?: InputMaybe<OrderBy>;
  managedService?: InputMaybe<ManagedServiceOrderBy>;
  mentor?: InputMaybe<UserOrderBy>;
  mentorId?: InputMaybe<OrderBy>;
};

export type CenterMentorUniqueFilter = {
  centerId?: InputMaybe<Scalars['String']['input']>;
  mentorId?: InputMaybe<Scalars['String']['input']>;
};

export type CenterMentorUpdateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutMentorInput>>;
  createMany?: InputMaybe<CenterMentorUpdateAdminNoteRelationInputCreateMany>;
  delete?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  deleteMany?: InputMaybe<Array<AdminNoteWithoutMentorFilter>>;
  disconnect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  set?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  update?: InputMaybe<Array<CenterMentorUpdateAdminNoteRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterMentorUpdateAdminNoteRelationInputUpdateMany>>;
};

export type CenterMentorUpdateAdminNoteRelationInputCreateMany = {
  data?: InputMaybe<Array<AdminNoteCreateWithoutMentorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterMentorUpdateAdminNoteRelationInputUpdate = {
  data?: InputMaybe<AdminNoteUpdateWithoutMentorInput>;
  where?: InputMaybe<AdminNoteUniqueFilter>;
};

export type CenterMentorUpdateAdminNoteRelationInputUpdateMany = {
  data?: InputMaybe<AdminNoteUpdateWithoutMentorInput>;
  where?: InputMaybe<AdminNoteWithoutMentorFilter>;
};

export type CenterMentorUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutCenterMentorsInput>;
  update?: InputMaybe<CenterUpdateWithoutCenterMentorsInput>;
};

export type CenterMentorUpdateCreatedWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutMentorInput>>;
  createMany?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopWithoutMentorFilter>>;
  disconnect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopUniqueFilter>>;
  update?: InputMaybe<Array<CenterMentorUpdateCreatedWorkshopRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterMentorUpdateCreatedWorkshopRelationInputUpdateMany>>;
};

export type CenterMentorUpdateCreatedWorkshopRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopCreateWithoutMentorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterMentorUpdateCreatedWorkshopRelationInputUpdate = {
  data?: InputMaybe<WorkshopUpdateWithoutMentorInput>;
  where?: InputMaybe<WorkshopUniqueFilter>;
};

export type CenterMentorUpdateCreatedWorkshopRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopUpdateWithoutMentorInput>;
  where?: InputMaybe<WorkshopWithoutMentorFilter>;
};

export type CenterMentorUpdateInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorUpdateManagedServiceRelationInput = {
  connect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  create?: InputMaybe<Array<ManagedServiceCreateWithoutMentorInput>>;
  createMany?: InputMaybe<CenterMentorUpdateManagedServiceRelationInputCreateMany>;
  delete?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ManagedServiceWithoutMentorFilter>>;
  disconnect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  set?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  update?: InputMaybe<Array<CenterMentorUpdateManagedServiceRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterMentorUpdateManagedServiceRelationInputUpdateMany>>;
};

export type CenterMentorUpdateManagedServiceRelationInputCreateMany = {
  data?: InputMaybe<Array<ManagedServiceCreateWithoutMentorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterMentorUpdateManagedServiceRelationInputUpdate = {
  data?: InputMaybe<ManagedServiceUpdateWithoutMentorInput>;
  where?: InputMaybe<ManagedServiceUniqueFilter>;
};

export type CenterMentorUpdateManagedServiceRelationInputUpdateMany = {
  data?: InputMaybe<ManagedServiceUpdateWithoutMentorInput>;
  where?: InputMaybe<ManagedServiceWithoutMentorFilter>;
};

export type CenterMentorUpdateMentorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMentorInput>;
  update?: InputMaybe<UserUpdateWithoutMentorInput>;
};

export type CenterMentorUpdateQuizRelationInput = {
  connect?: InputMaybe<Array<QuizUniqueFilter>>;
  create?: InputMaybe<Array<QuizCreateWithoutCenterMentorInput>>;
  createMany?: InputMaybe<CenterMentorUpdateQuizRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuizUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuizWithoutCenterMentorFilter>>;
  disconnect?: InputMaybe<Array<QuizUniqueFilter>>;
  set?: InputMaybe<Array<QuizUniqueFilter>>;
  update?: InputMaybe<Array<CenterMentorUpdateQuizRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterMentorUpdateQuizRelationInputUpdateMany>>;
};

export type CenterMentorUpdateQuizRelationInputCreateMany = {
  data?: InputMaybe<Array<QuizCreateWithoutCenterMentorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterMentorUpdateQuizRelationInputUpdate = {
  data?: InputMaybe<QuizUpdateWithoutCenterMentorInput>;
  where?: InputMaybe<QuizUniqueFilter>;
};

export type CenterMentorUpdateQuizRelationInputUpdateMany = {
  data?: InputMaybe<QuizUpdateWithoutCenterMentorInput>;
  where?: InputMaybe<QuizWithoutCenterMentorFilter>;
};

export type CenterMentorUpdateWithoutAdminNoteInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorUpdateWithoutCenterInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorUpdateWithoutCreatedWorkshopInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorUpdateWithoutManagedServiceInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorUpdateWithoutMentorInput = {
  Quiz?: InputMaybe<CenterMentorUpdateQuizRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
};

export type CenterMentorUpdateWithoutQuizInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  adminNote?: InputMaybe<CenterMentorUpdateAdminNoteRelationInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<CenterMentorUpdateCenterRelationInput>;
  createdWorkshop?: InputMaybe<CenterMentorUpdateCreatedWorkshopRelationInput>;
  isCenterOwner?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<CenterMentorUpdateManagedServiceRelationInput>;
  mentor?: InputMaybe<CenterMentorUpdateMentorRelationInput>;
};

export type CenterMentorWithoutCenterFilter = {
  Quiz?: InputMaybe<QuizListFilter>;
  active?: InputMaybe<BooleanFilter>;
  adminNote?: InputMaybe<AdminNoteListFilter>;
  bio?: InputMaybe<StringFilter>;
  createdWorkshop?: InputMaybe<WorkshopListFilter>;
  isCenterOwner?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
};

export type CenterOrderBy = {
  adminNote?: InputMaybe<AdminNoteOrderBy>;
  bank?: InputMaybe<OrderBy>;
  bankAccountNumber?: InputMaybe<OrderBy>;
  centerMentors?: InputMaybe<CenterMentorOrderBy>;
  centerOwner?: InputMaybe<UserOrderBy>;
  centerOwnerId?: InputMaybe<OrderBy>;
  centerStatus?: InputMaybe<OrderBy>;
  chatRoom?: InputMaybe<ChatRoomOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  individual?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  logoFile?: InputMaybe<UploadedFileOrderBy>;
  logoUrl?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumeOrderBy>;
  services?: InputMaybe<ServiceOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedFileId?: InputMaybe<OrderBy>;
};

export enum CenterSortBy {
  Rating = 'rating',
  Revenue = 'revenue',
  Services = 'services'
}

export enum CenterStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type CenterStatusFilter = {
  equals?: InputMaybe<CenterStatus>;
  in?: InputMaybe<Array<CenterStatus>>;
  not?: InputMaybe<CenterStatusFilter>;
  notIn?: InputMaybe<Array<CenterStatus>>;
};

export type CenterUniqueFilter = {
  centerOwnerId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CenterUpdateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutCenterInput>>;
  createMany?: InputMaybe<CenterUpdateAdminNoteRelationInputCreateMany>;
  delete?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  deleteMany?: InputMaybe<Array<AdminNoteWithoutCenterFilter>>;
  disconnect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  set?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  update?: InputMaybe<Array<CenterUpdateAdminNoteRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterUpdateAdminNoteRelationInputUpdateMany>>;
};

export type CenterUpdateAdminNoteRelationInputCreateMany = {
  data?: InputMaybe<Array<AdminNoteCreateWithoutCenterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterUpdateAdminNoteRelationInputUpdate = {
  data?: InputMaybe<AdminNoteUpdateWithoutCenterInput>;
  where?: InputMaybe<AdminNoteUniqueFilter>;
};

export type CenterUpdateAdminNoteRelationInputUpdateMany = {
  data?: InputMaybe<AdminNoteUpdateWithoutCenterInput>;
  where?: InputMaybe<AdminNoteWithoutCenterFilter>;
};

export type CenterUpdateCenterMentorsRelationInput = {
  connect?: InputMaybe<Array<CenterMentorUniqueFilter>>;
  create?: InputMaybe<Array<CenterMentorCreateWithoutCenterInput>>;
  createMany?: InputMaybe<CenterUpdateCenterMentorsRelationInputCreateMany>;
  delete?: InputMaybe<Array<CenterMentorUniqueFilter>>;
  deleteMany?: InputMaybe<Array<CenterMentorWithoutCenterFilter>>;
  disconnect?: InputMaybe<Array<CenterMentorUniqueFilter>>;
  set?: InputMaybe<Array<CenterMentorUniqueFilter>>;
  update?: InputMaybe<Array<CenterUpdateCenterMentorsRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterUpdateCenterMentorsRelationInputUpdateMany>>;
};

export type CenterUpdateCenterMentorsRelationInputCreateMany = {
  data?: InputMaybe<Array<CenterMentorCreateWithoutCenterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterUpdateCenterMentorsRelationInputUpdate = {
  data?: InputMaybe<CenterMentorUpdateWithoutCenterInput>;
  where?: InputMaybe<CenterMentorUniqueFilter>;
};

export type CenterUpdateCenterMentorsRelationInputUpdateMany = {
  data?: InputMaybe<CenterMentorUpdateWithoutCenterInput>;
  where?: InputMaybe<CenterMentorWithoutCenterFilter>;
};

export type CenterUpdateCenterOwnerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutCenterInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutCenterInput>;
};

export type CenterUpdateChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutCenterInput>>;
  createMany?: InputMaybe<CenterUpdateChatRoomRelationInputCreateMany>;
  delete?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ChatRoomWithoutCenterFilter>>;
  disconnect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  set?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  update?: InputMaybe<Array<CenterUpdateChatRoomRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterUpdateChatRoomRelationInputUpdateMany>>;
};

export type CenterUpdateChatRoomRelationInputCreateMany = {
  data?: InputMaybe<Array<ChatRoomCreateWithoutCenterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterUpdateChatRoomRelationInputUpdate = {
  data?: InputMaybe<ChatRoomUpdateWithoutCenterInput>;
  where?: InputMaybe<ChatRoomUniqueFilter>;
};

export type CenterUpdateChatRoomRelationInputUpdateMany = {
  data?: InputMaybe<ChatRoomUpdateWithoutCenterInput>;
  where?: InputMaybe<ChatRoomWithoutCenterFilter>;
};

export type CenterUpdateInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateLogoFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutCenterInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UploadedFileUpdateWithoutCenterInput>;
};

export type CenterUpdateResumeRelationInput = {
  connect?: InputMaybe<Array<ResumeUniqueFilter>>;
  create?: InputMaybe<Array<ResumeCreateWithoutCenterInput>>;
  createMany?: InputMaybe<CenterUpdateResumeRelationInputCreateMany>;
  delete?: InputMaybe<Array<ResumeUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ResumeWithoutCenterFilter>>;
  disconnect?: InputMaybe<Array<ResumeUniqueFilter>>;
  set?: InputMaybe<Array<ResumeUniqueFilter>>;
  update?: InputMaybe<Array<CenterUpdateResumeRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterUpdateResumeRelationInputUpdateMany>>;
};

export type CenterUpdateResumeRelationInputCreateMany = {
  data?: InputMaybe<Array<ResumeCreateWithoutCenterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterUpdateResumeRelationInputUpdate = {
  data?: InputMaybe<ResumeUpdateWithoutCenterInput>;
  where?: InputMaybe<ResumeUniqueFilter>;
};

export type CenterUpdateResumeRelationInputUpdateMany = {
  data?: InputMaybe<ResumeUpdateWithoutCenterInput>;
  where?: InputMaybe<ResumeWithoutCenterFilter>;
};

export type CenterUpdateServicesRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutCenterInput>>;
  createMany?: InputMaybe<CenterUpdateServicesRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceWithoutCenterFilter>>;
  disconnect?: InputMaybe<Array<ServiceUniqueFilter>>;
  set?: InputMaybe<Array<ServiceUniqueFilter>>;
  update?: InputMaybe<Array<CenterUpdateServicesRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<CenterUpdateServicesRelationInputUpdateMany>>;
};

export type CenterUpdateServicesRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceCreateWithoutCenterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CenterUpdateServicesRelationInputUpdate = {
  data?: InputMaybe<ServiceUpdateWithoutCenterInput>;
  where?: InputMaybe<ServiceUniqueFilter>;
};

export type CenterUpdateServicesRelationInputUpdateMany = {
  data?: InputMaybe<ServiceUpdateWithoutCenterInput>;
  where?: InputMaybe<ServiceWithoutCenterFilter>;
};

export type CenterUpdateWithoutAdminNoteInput = {
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutCenterMentorsInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutCenterOwnerInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutChatRoomInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutLogoFileInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutResumeInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  services?: InputMaybe<CenterUpdateServicesRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterUpdateWithoutServicesInput = {
  adminNote?: InputMaybe<CenterUpdateAdminNoteRelationInput>;
  bank?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  centerMentors?: InputMaybe<CenterUpdateCenterMentorsRelationInput>;
  centerOwner?: InputMaybe<CenterUpdateCenterOwnerRelationInput>;
  centerStatus?: InputMaybe<CenterStatus>;
  chatRoom?: InputMaybe<CenterUpdateChatRoomRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  individual?: InputMaybe<Scalars['Boolean']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  logoFile?: InputMaybe<CenterUpdateLogoFileRelationInput>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<CenterUpdateResumeRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CenterWithoutLogoFileFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  bank?: InputMaybe<StringFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  centerMentors?: InputMaybe<CenterMentorListFilter>;
  centerOwner?: InputMaybe<UserFilter>;
  centerOwnerId?: InputMaybe<StringFilter>;
  centerStatus?: InputMaybe<CenterStatusFilter>;
  chatRoom?: InputMaybe<ChatRoomListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  individual?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<StringFilter>;
  logoUrl?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeListFilter>;
  services?: InputMaybe<ServiceListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** A chat room in the system. */
export type ChatRoom = {
  __typename?: 'ChatRoom';
  /** The center. */
  center?: Maybe<Center>;
  /** The ID of the center. */
  centerId?: Maybe<Scalars['ID']['output']>;
  /** The collaboration session. */
  collaborationSession?: Maybe<Array<CollaborationSession>>;
  /** The date and time the chat room was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The customer. */
  customer?: Maybe<User>;
  /** The ID of the customer. */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** The ID of the chat room. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The last activity date and time. */
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  /** The mentor. */
  mentor?: Maybe<User>;
  /** The ID of the mentor. */
  mentorId?: Maybe<Scalars['ID']['output']>;
  /** The messages in the chat room. */
  message?: Maybe<Array<Message>>;
  /** The order. */
  order?: Maybe<Order>;
  /** The type of the chat room. */
  type?: Maybe<ChatRoomType>;
};

export type ChatRoomCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutChatRoomInput>;
};

export type ChatRoomCreateCollaborationSessionRelationInput = {
  connect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  create?: InputMaybe<Array<CollaborationSessionCreateWithoutChatRoomInput>>;
};

export type ChatRoomCreateCustomerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutCustomerChatRoomInput>;
};

export type ChatRoomCreateMentorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMentorChatRoomInput>;
};

export type ChatRoomCreateMessageRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatRoomInput>>;
};

export type ChatRoomCreateOrderRelationInput = {
  connect?: InputMaybe<OrderUniqueFilter>;
  create?: InputMaybe<OrderCreateWithoutChatRoomInput>;
};

export type ChatRoomCreateWithoutCenterInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutCollaborationSessionInput = {
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutCustomerInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutMentorInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutMessageInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutOrderInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
  workshop?: InputMaybe<ChatRoomCreateWorkshopRelationInput>;
};

export type ChatRoomCreateWithoutWorkshopInput = {
  CollaborationSession?: InputMaybe<ChatRoomCreateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomCreateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center: ChatRoomCreateCenterRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer: ChatRoomCreateCustomerRelationInput;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomCreateMentorRelationInput>;
  message?: InputMaybe<ChatRoomCreateMessageRelationInput>;
  type: ChatRoomType;
};

export type ChatRoomCreateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutChatRoomInput>;
};

export type ChatRoomFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  Order?: InputMaybe<OrderFilter>;
  active?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<UserFilter>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastActivity?: InputMaybe<DateTimeFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
  message?: InputMaybe<MessageListFilter>;
  type?: InputMaybe<ChatRoomTypeFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type ChatRoomListFilter = {
  every?: InputMaybe<ChatRoomFilter>;
  none?: InputMaybe<ChatRoomFilter>;
  some?: InputMaybe<ChatRoomFilter>;
};

export type ChatRoomOrderBy = {
  CollaborationSession?: InputMaybe<CollaborationSessionOrderBy>;
  Order?: InputMaybe<OrderOrderBy>;
  active?: InputMaybe<OrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  centerId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  customer?: InputMaybe<UserOrderBy>;
  customerId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastActivity?: InputMaybe<OrderBy>;
  mentor?: InputMaybe<UserOrderBy>;
  mentorId?: InputMaybe<OrderBy>;
  message?: InputMaybe<MessageOrderBy>;
  type?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
  workshopId?: InputMaybe<OrderBy>;
};

export enum ChatRoomType {
  Consultation = 'CONSULTATION',
  Support = 'SUPPORT',
  Workshop = 'WORKSHOP'
}

export type ChatRoomTypeFilter = {
  equals?: InputMaybe<ChatRoomType>;
  in?: InputMaybe<Array<ChatRoomType>>;
  not?: InputMaybe<ChatRoomTypeFilter>;
  notIn?: InputMaybe<Array<ChatRoomType>>;
};

export type ChatRoomUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ChatRoomUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutChatRoomInput>;
  update?: InputMaybe<CenterUpdateWithoutChatRoomInput>;
};

export type ChatRoomUpdateCollaborationSessionRelationInput = {
  connect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  create?: InputMaybe<Array<CollaborationSessionCreateWithoutChatRoomInput>>;
  createMany?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInputCreateMany>;
  delete?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  deleteMany?: InputMaybe<Array<CollaborationSessionWithoutChatRoomFilter>>;
  disconnect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  set?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  update?: InputMaybe<Array<ChatRoomUpdateCollaborationSessionRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ChatRoomUpdateCollaborationSessionRelationInputUpdateMany>>;
};

export type ChatRoomUpdateCollaborationSessionRelationInputCreateMany = {
  data?: InputMaybe<Array<CollaborationSessionCreateWithoutChatRoomInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatRoomUpdateCollaborationSessionRelationInputUpdate = {
  data?: InputMaybe<CollaborationSessionUpdateWithoutChatRoomInput>;
  where?: InputMaybe<CollaborationSessionUniqueFilter>;
};

export type ChatRoomUpdateCollaborationSessionRelationInputUpdateMany = {
  data?: InputMaybe<CollaborationSessionUpdateWithoutChatRoomInput>;
  where?: InputMaybe<CollaborationSessionWithoutChatRoomFilter>;
};

export type ChatRoomUpdateCustomerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutCustomerChatRoomInput>;
  update?: InputMaybe<UserUpdateWithoutCustomerChatRoomInput>;
};

export type ChatRoomUpdateMentorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMentorChatRoomInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutMentorChatRoomInput>;
};

export type ChatRoomUpdateMessageRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutChatRoomInput>>;
  createMany?: InputMaybe<ChatRoomUpdateMessageRelationInputCreateMany>;
  delete?: InputMaybe<Array<MessageUniqueFilter>>;
  deleteMany?: InputMaybe<Array<MessageWithoutChatRoomFilter>>;
  disconnect?: InputMaybe<Array<MessageUniqueFilter>>;
  set?: InputMaybe<Array<MessageUniqueFilter>>;
  update?: InputMaybe<Array<ChatRoomUpdateMessageRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ChatRoomUpdateMessageRelationInputUpdateMany>>;
};

export type ChatRoomUpdateMessageRelationInputCreateMany = {
  data?: InputMaybe<Array<MessageCreateWithoutChatRoomInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatRoomUpdateMessageRelationInputUpdate = {
  data?: InputMaybe<MessageUpdateWithoutChatRoomInput>;
  where?: InputMaybe<MessageUniqueFilter>;
};

export type ChatRoomUpdateMessageRelationInputUpdateMany = {
  data?: InputMaybe<MessageUpdateWithoutChatRoomInput>;
  where?: InputMaybe<MessageWithoutChatRoomFilter>;
};

export type ChatRoomUpdateOrderRelationInput = {
  connect?: InputMaybe<OrderUniqueFilter>;
  create?: InputMaybe<OrderCreateWithoutChatRoomInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<OrderUpdateWithoutChatRoomInput>;
};

export type ChatRoomUpdateWithoutCenterInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutCollaborationSessionInput = {
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutCustomerInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutMentorInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutMessageInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutOrderInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
  workshop?: InputMaybe<ChatRoomUpdateWorkshopRelationInput>;
};

export type ChatRoomUpdateWithoutWorkshopInput = {
  CollaborationSession?: InputMaybe<ChatRoomUpdateCollaborationSessionRelationInput>;
  Order?: InputMaybe<ChatRoomUpdateOrderRelationInput>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<ChatRoomUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customer?: InputMaybe<ChatRoomUpdateCustomerRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastActivity?: InputMaybe<Scalars['DateTime']['input']>;
  mentor?: InputMaybe<ChatRoomUpdateMentorRelationInput>;
  message?: InputMaybe<ChatRoomUpdateMessageRelationInput>;
  type?: InputMaybe<ChatRoomType>;
};

export type ChatRoomUpdateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutChatRoomInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<WorkshopUpdateWithoutChatRoomInput>;
};

export type ChatRoomWithoutCenterFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  Order?: InputMaybe<OrderFilter>;
  active?: InputMaybe<BooleanFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<UserFilter>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastActivity?: InputMaybe<DateTimeFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
  message?: InputMaybe<MessageListFilter>;
  type?: InputMaybe<ChatRoomTypeFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type ChatRoomWithoutCustomerFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  Order?: InputMaybe<OrderFilter>;
  active?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lastActivity?: InputMaybe<DateTimeFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
  message?: InputMaybe<MessageListFilter>;
  type?: InputMaybe<ChatRoomTypeFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type ChatRoomWithoutMentorFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  Order?: InputMaybe<OrderFilter>;
  active?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<UserFilter>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastActivity?: InputMaybe<DateTimeFilter>;
  message?: InputMaybe<MessageListFilter>;
  type?: InputMaybe<ChatRoomTypeFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type ChatRoomWithoutWorkshopFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  Order?: InputMaybe<OrderFilter>;
  active?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<UserFilter>;
  customerId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastActivity?: InputMaybe<DateTimeFilter>;
  mentor?: InputMaybe<UserFilter>;
  mentorId?: InputMaybe<StringFilter>;
  message?: InputMaybe<MessageListFilter>;
  type?: InputMaybe<ChatRoomTypeFilter>;
};

/** A collaboration session in the system. */
export type CollaborationSession = {
  __typename?: 'CollaborationSession';
  /** The active document. */
  activeDocument?: Maybe<Document>;
  /** The ID of the active document. */
  activeDocumentId?: Maybe<Scalars['String']['output']>;
  /** The chat room. */
  chatRoom?: Maybe<ChatRoom>;
  /** The ID of the chat room. */
  chatRoomId?: Maybe<Scalars['String']['output']>;
  /** The IDs of the collaborators. */
  collaboratorsIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The creation date of the collaboration session. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the collaboration session. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The meeting room. */
  meetingRoom?: Maybe<MeetingRoom>;
  /** The schedule date. */
  scheduleDate?: Maybe<ScheduleDate>;
  /** The update date of the collaboration session. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CollaborationSessionCreateActiveDocumentRelationInput = {
  connect?: InputMaybe<DocumentUniqueFilter>;
  create?: InputMaybe<DocumentCreateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionCreateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionCreateMeetingRoomRelationInput = {
  connect?: InputMaybe<MeetingRoomUniqueFilter>;
  create?: InputMaybe<MeetingRoomCreateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionCreateScheduleDateRelationInput = {
  connect?: InputMaybe<ScheduleDateUniqueFilter>;
  create?: InputMaybe<ScheduleDateCreateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionCreateWithoutActiveDocumentInput = {
  ChatRoom?: InputMaybe<CollaborationSessionCreateChatRoomRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionCreateMeetingRoomRelationInput>;
  scheduleDate: CollaborationSessionCreateScheduleDateRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionCreateWithoutChatRoomInput = {
  activeDocument?: InputMaybe<CollaborationSessionCreateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionCreateMeetingRoomRelationInput>;
  scheduleDate: CollaborationSessionCreateScheduleDateRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionCreateWithoutMeetingRoomInput = {
  ChatRoom?: InputMaybe<CollaborationSessionCreateChatRoomRelationInput>;
  activeDocument?: InputMaybe<CollaborationSessionCreateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleDate: CollaborationSessionCreateScheduleDateRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionCreateWithoutScheduleDateInput = {
  ChatRoom?: InputMaybe<CollaborationSessionCreateChatRoomRelationInput>;
  activeDocument?: InputMaybe<CollaborationSessionCreateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionCreateMeetingRoomRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionFilter = {
  ChatRoom?: InputMaybe<ChatRoomFilter>;
  activeDocument?: InputMaybe<DocumentFilter>;
  activeDocumentId?: InputMaybe<StringFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  collaboratorsIds?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  meetingRoom?: InputMaybe<MeetingRoomFilter>;
  scheduleDate?: InputMaybe<ScheduleDateFilter>;
  scheduleDateId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CollaborationSessionListFilter = {
  every?: InputMaybe<CollaborationSessionFilter>;
  none?: InputMaybe<CollaborationSessionFilter>;
  some?: InputMaybe<CollaborationSessionFilter>;
};

export type CollaborationSessionOrderBy = {
  ChatRoom?: InputMaybe<ChatRoomOrderBy>;
  activeDocument?: InputMaybe<DocumentOrderBy>;
  activeDocumentId?: InputMaybe<OrderBy>;
  chatRoomId?: InputMaybe<OrderBy>;
  collaboratorsIds?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  meetingRoom?: InputMaybe<MeetingRoomOrderBy>;
  scheduleDate?: InputMaybe<ScheduleDateOrderBy>;
  scheduleDateId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type CollaborationSessionUniqueFilter = {
  activeDocumentId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleDateId?: InputMaybe<Scalars['String']['input']>;
};

export type CollaborationSessionUpdateActiveDocumentRelationInput = {
  connect?: InputMaybe<DocumentUniqueFilter>;
  create?: InputMaybe<DocumentCreateWithoutCollaborationSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<DocumentUpdateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionUpdateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutCollaborationSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ChatRoomUpdateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionUpdateMeetingRoomRelationInput = {
  connect?: InputMaybe<MeetingRoomUniqueFilter>;
  create?: InputMaybe<MeetingRoomCreateWithoutCollaborationSessionInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<MeetingRoomUpdateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionUpdateScheduleDateRelationInput = {
  connect?: InputMaybe<ScheduleDateUniqueFilter>;
  create?: InputMaybe<ScheduleDateCreateWithoutCollaborationSessionInput>;
  update?: InputMaybe<ScheduleDateUpdateWithoutCollaborationSessionInput>;
};

export type CollaborationSessionUpdateWithoutActiveDocumentInput = {
  ChatRoom?: InputMaybe<CollaborationSessionUpdateChatRoomRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionUpdateMeetingRoomRelationInput>;
  scheduleDate?: InputMaybe<CollaborationSessionUpdateScheduleDateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionUpdateWithoutChatRoomInput = {
  activeDocument?: InputMaybe<CollaborationSessionUpdateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionUpdateMeetingRoomRelationInput>;
  scheduleDate?: InputMaybe<CollaborationSessionUpdateScheduleDateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionUpdateWithoutMeetingRoomInput = {
  ChatRoom?: InputMaybe<CollaborationSessionUpdateChatRoomRelationInput>;
  activeDocument?: InputMaybe<CollaborationSessionUpdateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  scheduleDate?: InputMaybe<CollaborationSessionUpdateScheduleDateRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionUpdateWithoutScheduleDateInput = {
  ChatRoom?: InputMaybe<CollaborationSessionUpdateChatRoomRelationInput>;
  activeDocument?: InputMaybe<CollaborationSessionUpdateActiveDocumentRelationInput>;
  collaboratorsIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<CollaborationSessionUpdateMeetingRoomRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CollaborationSessionWithoutChatRoomFilter = {
  activeDocument?: InputMaybe<DocumentFilter>;
  activeDocumentId?: InputMaybe<StringFilter>;
  collaboratorsIds?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  meetingRoom?: InputMaybe<MeetingRoomFilter>;
  scheduleDate?: InputMaybe<ScheduleDateFilter>;
  scheduleDateId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CollaborationSessionWithoutScheduleDateFilter = {
  ChatRoom?: InputMaybe<ChatRoomFilter>;
  activeDocument?: InputMaybe<DocumentFilter>;
  activeDocumentId?: InputMaybe<StringFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  collaboratorsIds?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  meetingRoom?: InputMaybe<MeetingRoomFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** An app config */
export type Config = {
  __typename?: 'Config';
  /** The unique identifier for the config */
  id?: Maybe<Scalars['ID']['output']>;
  /** The key of the config */
  key?: Maybe<Scalars['String']['output']>;
  /** The name of the config */
  name?: Maybe<Scalars['String']['output']>;
  /** The value of the config */
  value?: Maybe<Scalars['String']['output']>;
  /** Whether the config is visible */
  visible?: Maybe<Scalars['Boolean']['output']>;
};

export type ConfigCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConfigFilter = {
  id?: InputMaybe<StringFilter>;
  key?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
  visible?: InputMaybe<BooleanFilter>;
};

export type ConfigOrderBy = {
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  visible?: InputMaybe<OrderBy>;
};

export type ConfigUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
};

export type ConfigUpdateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  visible?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CorrectAnswerObject = StringListType | StringType;

export type Cursor = {
  __typename?: 'Cursor';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Range>;
};

export type CursorInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<RangeInput>;
};

/** A customer analytic in the system. */
export type CustomerAnalytic = {
  __typename?: 'CustomerAnalytic';
  /** The number of active services. */
  activeServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The total number of services. */
  totalServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The total amount spent. */
  totalSpent?: Maybe<Scalars['Float']['output']>;
  /** The date the analytic was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the user. */
  userId?: Maybe<Scalars['String']['output']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Document = {
  __typename?: 'Document';
  /** The collaboration session of the document. */
  collaborationSession?: Maybe<CollaborationSession>;
  /** The ID of the collaboration session of the document. */
  collaborationSessionId?: Maybe<Scalars['ID']['output']>;
  /** The collaborators of the document. */
  collaborators: Array<DocumentCollaborator>;
  /** The creation time of the document. */
  createdAt: Scalars['DateTime']['output'];
  /** The file URL of the document. */
  fileUrl: Scalars['String']['output'];
  /** The ID of the document. */
  id: Scalars['ID']['output'];
  /** Whether the document is public. */
  isPublic: Scalars['Boolean']['output'];
  /** The name of the document. */
  name: Scalars['String']['output'];
  /** The owner of the document. */
  owner: User;
  /** The preview image of the document. */
  previewImage?: Maybe<UploadedFile>;
  /** The update time of the document. */
  updatedAt: Scalars['DateTime']['output'];
};

export type DocumentCollaborator = {
  __typename?: 'DocumentCollaborator';
  document: Document;
  documentId: Scalars['ID']['output'];
  readable: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['ID']['output'];
  writable: Scalars['Boolean']['output'];
};

export type DocumentCollaboratorCreateDocumentRelationInput = {
  connect?: InputMaybe<DocumentUniqueFilter>;
  create?: InputMaybe<DocumentCreateWithoutCollaboratorsInput>;
};

export type DocumentCollaboratorCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutDocumentCollaboratorInput>;
};

export type DocumentCollaboratorCreateWithoutDocumentInput = {
  readable?: InputMaybe<Scalars['Boolean']['input']>;
  user: DocumentCollaboratorCreateUserRelationInput;
  writable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentCollaboratorCreateWithoutUserInput = {
  document: DocumentCollaboratorCreateDocumentRelationInput;
  readable?: InputMaybe<Scalars['Boolean']['input']>;
  writable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentCollaboratorFilter = {
  document?: InputMaybe<DocumentFilter>;
  documentId?: InputMaybe<StringFilter>;
  readable?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  writable?: InputMaybe<BooleanFilter>;
};

export type DocumentCollaboratorListFilter = {
  every?: InputMaybe<DocumentCollaboratorFilter>;
  none?: InputMaybe<DocumentCollaboratorFilter>;
  some?: InputMaybe<DocumentCollaboratorFilter>;
};

export type DocumentCollaboratorOrderBy = {
  document?: InputMaybe<DocumentOrderBy>;
  documentId?: InputMaybe<OrderBy>;
  readable?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
  writable?: InputMaybe<OrderBy>;
};

export type DocumentCollaboratorUniqueFilter = {
  documentId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentCollaboratorUpdateDocumentRelationInput = {
  connect?: InputMaybe<DocumentUniqueFilter>;
  create?: InputMaybe<DocumentCreateWithoutCollaboratorsInput>;
  update?: InputMaybe<DocumentUpdateWithoutCollaboratorsInput>;
};

export type DocumentCollaboratorUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutDocumentCollaboratorInput>;
  update?: InputMaybe<UserUpdateWithoutDocumentCollaboratorInput>;
};

export type DocumentCollaboratorUpdateWithoutDocumentInput = {
  readable?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<DocumentCollaboratorUpdateUserRelationInput>;
  writable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentCollaboratorUpdateWithoutUserInput = {
  document?: InputMaybe<DocumentCollaboratorUpdateDocumentRelationInput>;
  readable?: InputMaybe<Scalars['Boolean']['input']>;
  writable?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentCollaboratorWithoutDocumentFilter = {
  readable?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  writable?: InputMaybe<BooleanFilter>;
};

export type DocumentCollaboratorWithoutUserFilter = {
  document?: InputMaybe<DocumentFilter>;
  documentId?: InputMaybe<StringFilter>;
  readable?: InputMaybe<BooleanFilter>;
  writable?: InputMaybe<BooleanFilter>;
};

export type DocumentCreateCollaborationSessionRelationInput = {
  connect?: InputMaybe<CollaborationSessionUniqueFilter>;
  create?: InputMaybe<CollaborationSessionCreateWithoutActiveDocumentInput>;
};

export type DocumentCreateCollaboratorsRelationInput = {
  connect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCollaboratorCreateWithoutDocumentInput>>;
};

export type DocumentCreateOwnerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutDocumentInput>;
};

export type DocumentCreatePreviewImageRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutDocumentInput>;
};

export type DocumentCreateWithoutCollaborationSessionInput = {
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentCreateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  owner: DocumentCreateOwnerRelationInput;
  previewImage?: InputMaybe<DocumentCreatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentCreateWithoutCollaboratorsInput = {
  collaborationSession?: InputMaybe<DocumentCreateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  owner: DocumentCreateOwnerRelationInput;
  previewImage?: InputMaybe<DocumentCreatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentCreateWithoutIdWithoutOwnerIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaboratorsWithoutOwnerWithoutFileUrlWithoutPreviewImageUrlWithoutNameInput = {
  collaborationSession?: InputMaybe<DocumentCreateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  previewImage?: InputMaybe<DocumentCreatePreviewImageRelationInput>;
};

export type DocumentCreateWithoutOwnerInput = {
  collaborationSession?: InputMaybe<DocumentCreateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentCreateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  previewImage?: InputMaybe<DocumentCreatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentCreateWithoutPreviewImageInput = {
  collaborationSession?: InputMaybe<DocumentCreateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentCreateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  owner: DocumentCreateOwnerRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentDelta = {
  __typename?: 'DocumentDelta';
  cursor?: Maybe<Cursor>;
  delta?: Maybe<Scalars['Delta']['output']>;
  documentId?: Maybe<Scalars['String']['output']>;
  eventType?: Maybe<Scalars['String']['output']>;
  pageIndex?: Maybe<Scalars['Int']['output']>;
  requestSync?: Maybe<Scalars['Boolean']['output']>;
  senderId?: Maybe<Scalars['String']['output']>;
  totalPage?: Maybe<Scalars['Int']['output']>;
};

export type DocumentDeltaInput = {
  cursor?: InputMaybe<CursorInput>;
  delta?: InputMaybe<Scalars['Delta']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
};

export type DocumentExportObject = {
  __typename?: 'DocumentExportObject';
  documentId?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  pageIndex?: Maybe<Scalars['Int']['output']>;
  type: DocumentExportType;
};

export enum DocumentExportType {
  Docx = 'DOCX',
  Pdf = 'PDF'
}

export type DocumentFilter = {
  collaborationSession?: InputMaybe<CollaborationSessionFilter>;
  collaborationSessionId?: InputMaybe<StringFilter>;
  collaborators?: InputMaybe<DocumentCollaboratorListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserFilter>;
  ownerId?: InputMaybe<StringFilter>;
  previewImage?: InputMaybe<UploadedFileFilter>;
  previewImageId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DocumentListFilter = {
  every?: InputMaybe<DocumentFilter>;
  none?: InputMaybe<DocumentFilter>;
  some?: InputMaybe<DocumentFilter>;
};

export type DocumentOrderBy = {
  collaborationSession?: InputMaybe<CollaborationSessionOrderBy>;
  collaborationSessionId?: InputMaybe<OrderBy>;
  collaborators?: InputMaybe<DocumentCollaboratorOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  fileUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isPublic?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  owner?: InputMaybe<UserOrderBy>;
  ownerId?: InputMaybe<OrderBy>;
  previewImage?: InputMaybe<UploadedFileOrderBy>;
  previewImageId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type DocumentUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentUpdateCollaborationSessionRelationInput = {
  connect?: InputMaybe<CollaborationSessionUniqueFilter>;
  create?: InputMaybe<CollaborationSessionCreateWithoutActiveDocumentInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CollaborationSessionUpdateWithoutActiveDocumentInput>;
};

export type DocumentUpdateCollaboratorsRelationInput = {
  connect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCollaboratorCreateWithoutDocumentInput>>;
  createMany?: InputMaybe<DocumentUpdateCollaboratorsRelationInputCreateMany>;
  delete?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  deleteMany?: InputMaybe<Array<DocumentCollaboratorWithoutDocumentFilter>>;
  disconnect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  set?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  update?: InputMaybe<Array<DocumentUpdateCollaboratorsRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<DocumentUpdateCollaboratorsRelationInputUpdateMany>>;
};

export type DocumentUpdateCollaboratorsRelationInputCreateMany = {
  data?: InputMaybe<Array<DocumentCollaboratorCreateWithoutDocumentInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentUpdateCollaboratorsRelationInputUpdate = {
  data?: InputMaybe<DocumentCollaboratorUpdateWithoutDocumentInput>;
  where?: InputMaybe<DocumentCollaboratorUniqueFilter>;
};

export type DocumentUpdateCollaboratorsRelationInputUpdateMany = {
  data?: InputMaybe<DocumentCollaboratorUpdateWithoutDocumentInput>;
  where?: InputMaybe<DocumentCollaboratorWithoutDocumentFilter>;
};

export type DocumentUpdateOwnerRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutDocumentInput>;
  update?: InputMaybe<UserUpdateWithoutDocumentInput>;
};

export type DocumentUpdatePreviewImageRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutDocumentInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UploadedFileUpdateWithoutDocumentInput>;
};

export type DocumentUpdateWithoutCollaborationSessionInput = {
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentUpdateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<DocumentUpdateOwnerRelationInput>;
  previewImage?: InputMaybe<DocumentUpdatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentUpdateWithoutCollaboratorsInput = {
  collaborationSession?: InputMaybe<DocumentUpdateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<DocumentUpdateOwnerRelationInput>;
  previewImage?: InputMaybe<DocumentUpdatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentUpdateWithoutIdWithoutOwnerIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaborationSessionIdWithoutCollaborationSessionWithoutOwnerWithoutFileUrlWithoutPreviewImageUrlInput = {
  collaborators?: InputMaybe<DocumentUpdateCollaboratorsRelationInput>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewImage?: InputMaybe<DocumentUpdatePreviewImageRelationInput>;
};

export type DocumentUpdateWithoutOwnerInput = {
  collaborationSession?: InputMaybe<DocumentUpdateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentUpdateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewImage?: InputMaybe<DocumentUpdatePreviewImageRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentUpdateWithoutPreviewImageInput = {
  collaborationSession?: InputMaybe<DocumentUpdateCollaborationSessionRelationInput>;
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  collaborators?: InputMaybe<DocumentUpdateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<DocumentUpdateOwnerRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DocumentWithoutOwnerFilter = {
  collaborationSession?: InputMaybe<CollaborationSessionFilter>;
  collaborationSessionId?: InputMaybe<StringFilter>;
  collaborators?: InputMaybe<DocumentCollaboratorListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  previewImage?: InputMaybe<UploadedFileFilter>;
  previewImageId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DocumentWithoutPreviewImageFilter = {
  collaborationSession?: InputMaybe<CollaborationSessionFilter>;
  collaborationSessionId?: InputMaybe<StringFilter>;
  collaborators?: InputMaybe<DocumentCollaboratorListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isPublic?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  owner?: InputMaybe<UserFilter>;
  ownerId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Error = {
  __typename?: 'Error';
  message?: Maybe<Scalars['String']['output']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntListFilter = {
  equals?: InputMaybe<Array<Scalars['Int']['input']>>;
  has?: InputMaybe<Scalars['Int']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['Int']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['Int']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JsonFilter = {
  equals?: InputMaybe<Scalars['Json']['input']>;
  in?: InputMaybe<Array<Scalars['Json']['input']>>;
  not?: InputMaybe<JsonFilter>;
  notIn?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type JsonListFilter = {
  equals?: InputMaybe<Array<Scalars['Json']['input']>>;
  has?: InputMaybe<Scalars['Json']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['Json']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['Json']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A managed service */
export type ManagedService = {
  __typename?: 'ManagedService';
  /** The ID of the managed service. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The mentor. */
  mentor?: Maybe<CenterMentor>;
  /** The ID of the mentor. */
  mentorId?: Maybe<Scalars['ID']['output']>;
  /** The schedule of the service. */
  schedule?: Maybe<Array<Schedule>>;
  /** The service. */
  service?: Maybe<Service>;
  /** The ID of the service. */
  serviceId?: Maybe<Scalars['ID']['output']>;
};

export type ManagedServiceCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<ManagedServiceCreateMentorRelationInput>;
  schedule?: InputMaybe<ManagedServiceCreateScheduleRelationInput>;
  service?: InputMaybe<ManagedServiceCreateServiceRelationInput>;
};

export type ManagedServiceCreateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutManagedServiceInput>;
};

export type ManagedServiceCreateScheduleRelationInput = {
  connect?: InputMaybe<Array<ScheduleUniqueFilter>>;
  create?: InputMaybe<Array<ScheduleCreateWithoutManagedServiceInput>>;
};

export type ManagedServiceCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutManagedServiceInput>;
};

export type ManagedServiceCreateWithoutMentorInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<ManagedServiceCreateScheduleRelationInput>;
  service?: InputMaybe<ManagedServiceCreateServiceRelationInput>;
};

export type ManagedServiceCreateWithoutScheduleInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<ManagedServiceCreateMentorRelationInput>;
  service?: InputMaybe<ManagedServiceCreateServiceRelationInput>;
};

export type ManagedServiceCreateWithoutServiceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<ManagedServiceCreateMentorRelationInput>;
  schedule?: InputMaybe<ManagedServiceCreateScheduleRelationInput>;
};

export type ManagedServiceFilter = {
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  schedule?: InputMaybe<ScheduleListFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
};

export type ManagedServiceListFilter = {
  every?: InputMaybe<ManagedServiceFilter>;
  none?: InputMaybe<ManagedServiceFilter>;
  some?: InputMaybe<ManagedServiceFilter>;
};

export type ManagedServiceOrderBy = {
  id?: InputMaybe<OrderBy>;
  mentor?: InputMaybe<CenterMentorOrderBy>;
  mentorId?: InputMaybe<OrderBy>;
  schedule?: InputMaybe<ScheduleOrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
};

export type ManagedServiceUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ManagedServiceUpdateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutManagedServiceInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterMentorUpdateWithoutManagedServiceInput>;
};

export type ManagedServiceUpdateScheduleRelationInput = {
  connect?: InputMaybe<Array<ScheduleUniqueFilter>>;
  create?: InputMaybe<Array<ScheduleCreateWithoutManagedServiceInput>>;
  createMany?: InputMaybe<ManagedServiceUpdateScheduleRelationInputCreateMany>;
  delete?: InputMaybe<Array<ScheduleUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ScheduleWithoutManagedServiceFilter>>;
  disconnect?: InputMaybe<Array<ScheduleUniqueFilter>>;
  set?: InputMaybe<Array<ScheduleUniqueFilter>>;
  update?: InputMaybe<Array<ManagedServiceUpdateScheduleRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ManagedServiceUpdateScheduleRelationInputUpdateMany>>;
};

export type ManagedServiceUpdateScheduleRelationInputCreateMany = {
  data?: InputMaybe<Array<ScheduleCreateWithoutManagedServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ManagedServiceUpdateScheduleRelationInputUpdate = {
  data?: InputMaybe<ScheduleUpdateWithoutManagedServiceInput>;
  where?: InputMaybe<ScheduleUniqueFilter>;
};

export type ManagedServiceUpdateScheduleRelationInputUpdateMany = {
  data?: InputMaybe<ScheduleUpdateWithoutManagedServiceInput>;
  where?: InputMaybe<ScheduleWithoutManagedServiceFilter>;
};

export type ManagedServiceUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutManagedServiceInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ServiceUpdateWithoutManagedServiceInput>;
};

export type ManagedServiceUpdateWithoutMentorInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<ManagedServiceUpdateScheduleRelationInput>;
  service?: InputMaybe<ManagedServiceUpdateServiceRelationInput>;
};

export type ManagedServiceUpdateWithoutScheduleInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<ManagedServiceUpdateMentorRelationInput>;
  service?: InputMaybe<ManagedServiceUpdateServiceRelationInput>;
};

export type ManagedServiceUpdateWithoutServiceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<ManagedServiceUpdateMentorRelationInput>;
  schedule?: InputMaybe<ManagedServiceUpdateScheduleRelationInput>;
};

export type ManagedServiceWithoutMentorFilter = {
  id?: InputMaybe<StringFilter>;
  schedule?: InputMaybe<ScheduleListFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
};

export type ManagedServiceWithoutServiceFilter = {
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  schedule?: InputMaybe<ScheduleListFilter>;
};

export type MeetingRoom = {
  __typename?: 'MeetingRoom';
  collaborationSession?: Maybe<CollaborationSession>;
  collaborationSessionId?: Maybe<Scalars['String']['output']>;
  collaborators?: Maybe<Array<MeetingRoomCollaborator>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  recordUrl?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type MeetingRoomCollaborator = {
  __typename?: 'MeetingRoomCollaborator';
  id?: Maybe<Scalars['ID']['output']>;
  meetingRoom?: Maybe<MeetingRoom>;
  meetingRoomId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type MeetingRoomCollaboratorCreateMeetingRoomRelationInput = {
  connect?: InputMaybe<MeetingRoomUniqueFilter>;
  create?: InputMaybe<MeetingRoomCreateWithoutCollaboratorsInput>;
};

export type MeetingRoomCollaboratorCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMeetingRoomCollaboratorInput>;
};

export type MeetingRoomCollaboratorCreateWithoutMeetingRoomInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  user: MeetingRoomCollaboratorCreateUserRelationInput;
};

export type MeetingRoomCollaboratorCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom: MeetingRoomCollaboratorCreateMeetingRoomRelationInput;
};

export type MeetingRoomCollaboratorFilter = {
  id?: InputMaybe<StringFilter>;
  meetingRoom?: InputMaybe<MeetingRoomFilter>;
  meetingRoomId?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MeetingRoomCollaboratorListFilter = {
  every?: InputMaybe<MeetingRoomCollaboratorFilter>;
  none?: InputMaybe<MeetingRoomCollaboratorFilter>;
  some?: InputMaybe<MeetingRoomCollaboratorFilter>;
};

export type MeetingRoomCollaboratorOrderBy = {
  id?: InputMaybe<OrderBy>;
  meetingRoom?: InputMaybe<MeetingRoomOrderBy>;
  meetingRoomId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type MeetingRoomCollaboratorUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MeetingRoomCollaboratorUpdateMeetingRoomRelationInput = {
  connect?: InputMaybe<MeetingRoomUniqueFilter>;
  create?: InputMaybe<MeetingRoomCreateWithoutCollaboratorsInput>;
  update?: InputMaybe<MeetingRoomUpdateWithoutCollaboratorsInput>;
};

export type MeetingRoomCollaboratorUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutMeetingRoomCollaboratorInput>;
  update?: InputMaybe<UserUpdateWithoutMeetingRoomCollaboratorInput>;
};

export type MeetingRoomCollaboratorUpdateWithoutMeetingRoomInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<MeetingRoomCollaboratorUpdateUserRelationInput>;
};

export type MeetingRoomCollaboratorUpdateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  meetingRoom?: InputMaybe<MeetingRoomCollaboratorUpdateMeetingRoomRelationInput>;
};

export type MeetingRoomCollaboratorWithoutMeetingRoomFilter = {
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type MeetingRoomCollaboratorWithoutUserFilter = {
  id?: InputMaybe<StringFilter>;
  meetingRoom?: InputMaybe<MeetingRoomFilter>;
  meetingRoomId?: InputMaybe<StringFilter>;
};

export type MeetingRoomCreateCollaborationSessionRelationInput = {
  connect?: InputMaybe<CollaborationSessionUniqueFilter>;
  create?: InputMaybe<CollaborationSessionCreateWithoutMeetingRoomInput>;
};

export type MeetingRoomCreateCollaboratorsRelationInput = {
  connect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutMeetingRoomInput>>;
};

export type MeetingRoomCreateWithoutCollaborationSessionInput = {
  collaborators?: InputMaybe<MeetingRoomCreateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetingRoomCreateWithoutCollaboratorsInput = {
  collaborationSession: MeetingRoomCreateCollaborationSessionRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetingRoomCreateWithoutIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaboratorsInput = {
  collaborationSession: MeetingRoomCreateCollaborationSessionRelationInput;
};

export type MeetingRoomFilter = {
  collaborationSession?: InputMaybe<CollaborationSessionFilter>;
  collaborationSessionId?: InputMaybe<StringFilter>;
  collaborators?: InputMaybe<MeetingRoomCollaboratorListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MeetingRoomJoinInfo = {
  __typename?: 'MeetingRoomJoinInfo';
  /** The ID of the meeting room. */
  id?: Maybe<Scalars['String']['output']>;
  /** The URL of the server. */
  serverUrl?: Maybe<Scalars['String']['output']>;
  /** The token to join the meeting room. */
  token?: Maybe<Scalars['String']['output']>;
};

export type MeetingRoomOrderBy = {
  collaborationSession?: InputMaybe<CollaborationSessionOrderBy>;
  collaborationSessionId?: InputMaybe<OrderBy>;
  collaborators?: InputMaybe<MeetingRoomCollaboratorOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type MeetingRoomUniqueFilter = {
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MeetingRoomUpdateCollaborationSessionRelationInput = {
  connect?: InputMaybe<CollaborationSessionUniqueFilter>;
  create?: InputMaybe<CollaborationSessionCreateWithoutMeetingRoomInput>;
  update?: InputMaybe<CollaborationSessionUpdateWithoutMeetingRoomInput>;
};

export type MeetingRoomUpdateCollaboratorsRelationInput = {
  connect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutMeetingRoomInput>>;
  createMany?: InputMaybe<MeetingRoomUpdateCollaboratorsRelationInputCreateMany>;
  delete?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  deleteMany?: InputMaybe<Array<MeetingRoomCollaboratorWithoutMeetingRoomFilter>>;
  disconnect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  set?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  update?: InputMaybe<Array<MeetingRoomUpdateCollaboratorsRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<MeetingRoomUpdateCollaboratorsRelationInputUpdateMany>>;
};

export type MeetingRoomUpdateCollaboratorsRelationInputCreateMany = {
  data?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutMeetingRoomInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MeetingRoomUpdateCollaboratorsRelationInputUpdate = {
  data?: InputMaybe<MeetingRoomCollaboratorUpdateWithoutMeetingRoomInput>;
  where?: InputMaybe<MeetingRoomCollaboratorUniqueFilter>;
};

export type MeetingRoomUpdateCollaboratorsRelationInputUpdateMany = {
  data?: InputMaybe<MeetingRoomCollaboratorUpdateWithoutMeetingRoomInput>;
  where?: InputMaybe<MeetingRoomCollaboratorWithoutMeetingRoomFilter>;
};

export type MeetingRoomUpdateWithoutCollaborationSessionInput = {
  collaborators?: InputMaybe<MeetingRoomUpdateCollaboratorsRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MeetingRoomUpdateWithoutCollaboratorsInput = {
  collaborationSession?: InputMaybe<MeetingRoomUpdateCollaborationSessionRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A mentor analytic in the system. */
export type MentorAnalytic = {
  __typename?: 'MentorAnalytic';
  /** The ID of the mentor. */
  userId?: Maybe<Scalars['String']['output']>;
};

/** A message in the system. */
export type Message = {
  __typename?: 'Message';
  /** The chat room. */
  chatRoom?: Maybe<ChatRoom>;
  /** The ID of the chat room. */
  chatRoomId?: Maybe<Scalars['ID']['output']>;
  /** The message content. */
  content?: Maybe<Scalars['String']['output']>;
  /** The context of the message. */
  context?: Maybe<MessageContextType>;
  /** The ID of the message. */
  id?: Maybe<Scalars['ID']['output']>;
  /** Whether the message has been read. */
  isRead?: Maybe<Scalars['Boolean']['output']>;
  /** The metadata of the message. */
  metadata?: Maybe<Scalars['Json']['output']>;
  /** The sender of the message. */
  sender?: Maybe<User>;
  /** The ID of the sender. */
  senderId?: Maybe<Scalars['ID']['output']>;
  /** The date and time the message was sent. */
  sentAt?: Maybe<Scalars['DateTime']['output']>;
  /** The type of the message. */
  type?: Maybe<MessageType>;
};

export enum MessageContextType {
  Chat = 'CHAT',
  Notification = 'NOTIFICATION',
  System = 'SYSTEM'
}

export type MessageContextTypeFilter = {
  equals?: InputMaybe<MessageContextType>;
  in?: InputMaybe<Array<MessageContextType>>;
  not?: InputMaybe<MessageContextTypeFilter>;
  notIn?: InputMaybe<Array<MessageContextType>>;
};

export type MessageCreateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutMessageInput>;
};

export type MessageCreateInput = {
  chatRoom?: InputMaybe<MessageCreateChatRoomRelationInput>;
  content: Scalars['String']['input'];
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  recipient?: InputMaybe<MessageCreateRecipientRelationInput>;
  sender?: InputMaybe<MessageCreateSenderRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type: MessageType;
};

export type MessageCreateRecipientRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutReceivedMessagesInput>;
};

export type MessageCreateSenderRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutSentMessagesInput>;
};

export type MessageCreateWithoutChatRoomInput = {
  content: Scalars['String']['input'];
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  recipient?: InputMaybe<MessageCreateRecipientRelationInput>;
  sender?: InputMaybe<MessageCreateSenderRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type: MessageType;
};

export type MessageCreateWithoutIdWithoutSenderIdWithoutSenderWithoutSentAtWithoutContextWithoutRecipientWithoutRecipientIdInput = {
  chatRoom?: InputMaybe<MessageCreateChatRoomRelationInput>;
  content: Scalars['String']['input'];
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  type: MessageType;
};

export type MessageCreateWithoutRecipientInput = {
  chatRoom?: InputMaybe<MessageCreateChatRoomRelationInput>;
  content: Scalars['String']['input'];
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  sender?: InputMaybe<MessageCreateSenderRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type: MessageType;
};

export type MessageCreateWithoutSenderInput = {
  chatRoom?: InputMaybe<MessageCreateChatRoomRelationInput>;
  content: Scalars['String']['input'];
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  recipient?: InputMaybe<MessageCreateRecipientRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type: MessageType;
};

export type MessageFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  context?: InputMaybe<MessageContextTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<JsonFilter>;
  recipient?: InputMaybe<UserFilter>;
  recipientId?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserFilter>;
  senderId?: InputMaybe<StringFilter>;
  sentAt?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<MessageTypeFilter>;
};

export type MessageListFilter = {
  every?: InputMaybe<MessageFilter>;
  none?: InputMaybe<MessageFilter>;
  some?: InputMaybe<MessageFilter>;
};

export type MessageOrderBy = {
  chatRoom?: InputMaybe<ChatRoomOrderBy>;
  chatRoomId?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  context?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isRead?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  recipient?: InputMaybe<UserOrderBy>;
  recipientId?: InputMaybe<OrderBy>;
  sender?: InputMaybe<UserOrderBy>;
  senderId?: InputMaybe<OrderBy>;
  sentAt?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export enum MessageType {
  Attachment = 'ATTACHMENT',
  Text = 'TEXT'
}

export type MessageTypeFilter = {
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<MessageTypeFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
};

export type MessageUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MessageUpdateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutMessageInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ChatRoomUpdateWithoutMessageInput>;
};

export type MessageUpdateRecipientRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutReceivedMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutReceivedMessagesInput>;
};

export type MessageUpdateSenderRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutSentMessagesInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutSentMessagesInput>;
};

export type MessageUpdateWithoutChatRoomInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  recipient?: InputMaybe<MessageUpdateRecipientRelationInput>;
  sender?: InputMaybe<MessageUpdateSenderRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<MessageType>;
};

export type MessageUpdateWithoutRecipientInput = {
  chatRoom?: InputMaybe<MessageUpdateChatRoomRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  sender?: InputMaybe<MessageUpdateSenderRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<MessageType>;
};

export type MessageUpdateWithoutSenderInput = {
  chatRoom?: InputMaybe<MessageUpdateChatRoomRelationInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  context?: InputMaybe<MessageContextType>;
  id?: InputMaybe<Scalars['String']['input']>;
  isRead?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<Scalars['Json']['input']>;
  recipient?: InputMaybe<MessageUpdateRecipientRelationInput>;
  sentAt?: InputMaybe<Scalars['DateTime']['input']>;
  type?: InputMaybe<MessageType>;
};

export type MessageWithoutChatRoomFilter = {
  content?: InputMaybe<StringFilter>;
  context?: InputMaybe<MessageContextTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<JsonFilter>;
  recipient?: InputMaybe<UserFilter>;
  recipientId?: InputMaybe<StringFilter>;
  sender?: InputMaybe<UserFilter>;
  senderId?: InputMaybe<StringFilter>;
  sentAt?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<MessageTypeFilter>;
};

export type MessageWithoutRecipientFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  context?: InputMaybe<MessageContextTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<JsonFilter>;
  sender?: InputMaybe<UserFilter>;
  senderId?: InputMaybe<StringFilter>;
  sentAt?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<MessageTypeFilter>;
};

export type MessageWithoutSenderFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  content?: InputMaybe<StringFilter>;
  context?: InputMaybe<MessageContextTypeFilter>;
  id?: InputMaybe<StringFilter>;
  isRead?: InputMaybe<BooleanFilter>;
  metadata?: InputMaybe<JsonFilter>;
  recipient?: InputMaybe<UserFilter>;
  recipientId?: InputMaybe<StringFilter>;
  sentAt?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<MessageTypeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCollaborator?: Maybe<DocumentCollaborator>;
  /** Approve a center and promote centermentor to mentor */
  approveOrRejectCenter?: Maybe<Center>;
  /** Approve or reject a center mentor. */
  approveOrRejectCenterMentor?: Maybe<CenterMentor>;
  /** Approve or reject a resume. */
  approveOrRejectResume?: Maybe<Resume>;
  /** Approve or reject a service. For moderator only. */
  approveOrRejectService?: Maybe<Service>;
  banUser?: Maybe<Scalars['String']['output']>;
  createAdminNote?: Maybe<AdminNote>;
  /** Create an app config */
  createAppConfig?: Maybe<Config>;
  /** Create multiple app configs */
  createAppConfigs?: Maybe<Array<Config>>;
  /** Create a new category. */
  createCategory?: Maybe<Category>;
  /** Create a new center. */
  createCenter?: Maybe<Center>;
  /** Create a new center mentor. */
  createCenterMentor?: Maybe<CenterMentor>;
  createDocument?: Maybe<Document>;
  /** Create a new managed service. */
  createManagedService?: Maybe<ManagedService>;
  /** Create multiple new categories. */
  createManyCategories?: Maybe<Array<Category>>;
  /** Create multiple personal milestones. */
  createManyPersonalMilestones?: Maybe<Array<PersonalMilestone>>;
  createMeetingRoom?: Maybe<MeetingRoom>;
  /** Create a new order. */
  createOrder?: Maybe<Order>;
  createQuiz?: Maybe<Quiz>;
  /** Create a new schedule. */
  createSchedule?: Maybe<Schedule>;
  /** Create a new service. */
  createService?: Maybe<Service>;
  /** Create a service and category. */
  createServiceAndCategory?: Maybe<ServiceAndCategory>;
  /** Create a new service feedback. */
  createServiceFeedback?: Maybe<ServiceFeedback>;
  /** Create a new subcategory. */
  createSubCategory?: Maybe<SubCategory>;
  /** Create a new workshop. */
  createWorkshop?: Maybe<Workshop>;
  deleteAdminNote?: Maybe<AdminNote>;
  /** Delete an existing center. */
  deleteCenter?: Maybe<Center>;
  /** Delete an existing center mentor. */
  deleteCenterMentor?: Maybe<CenterMentor>;
  /** Delete an existing order. */
  deleteOrder?: Maybe<Order>;
  /** Delete a personal milestone. */
  deletePersonalMilestone?: Maybe<PersonalMilestone>;
  /** Delete an existing service. */
  deleteService?: Maybe<Service>;
  /** Delete a service and category. */
  deleteServiceAndCategory?: Maybe<ServiceAndCategory>;
  /** Delete a single uploaded file by its unique identifier. */
  deleteUploadedFile?: Maybe<UploadedFile>;
  /** Delete multiple uploaded files by their unique identifiers. */
  deleteUploadedFiles?: Maybe<Array<UploadedFile>>;
  editCollaboratorPermission?: Maybe<DocumentCollaborator>;
  eventDocumentChanged?: Maybe<DocumentDelta>;
  eventDocumentServerRequestSync?: Maybe<DocumentDelta>;
  /** Invite a new center mentor. */
  inviteCenterMentor?: Maybe<CenterMentor>;
  inviteModerator?: Maybe<Scalars['String']['output']>;
  /** Upload multiple files for a user. */
  multipleUpload?: Maybe<Array<UploadedFile>>;
  /** Process a refund ticket, can only done by moderator */
  processRefundTicket?: Maybe<RefundTicket>;
  removeCollaborator?: Maybe<DocumentCollaborator>;
  /** Request a refund for an order. */
  requestRefund?: Maybe<RefundTicket>;
  /** Send a message to a chat room. */
  sendMessage?: Maybe<Message>;
  sendTestNotification?: Maybe<Message>;
  /** Upload a single file for a user. */
  singleUpload?: Maybe<UploadedFile>;
  submitQuiz?: Maybe<QuizAttempt>;
  subscribeToWorkshop?: Maybe<WorkshopSubscription>;
  /** Update the active document ID for a collaboration session. */
  updateActiveDocumentId?: Maybe<CollaborationSession>;
  updateAdminNote?: Maybe<AdminNote>;
  /** Update an app config */
  updateAppConfig?: Maybe<Config>;
  /** Update an existing center. */
  updateCenter?: Maybe<Center>;
  /** Update an existing center mentor. */
  updateCenterMentor?: Maybe<CenterMentor>;
  updateDocument?: Maybe<Document>;
  updateDocumentPreviewImage?: Maybe<Document>;
  /** Update the current user in context. */
  updateMe?: Maybe<User>;
  updateMeetingRoomCollaborators?: Maybe<MeetingRoom>;
  /** Update an existing order. */
  updateOrder?: Maybe<Order>;
  /** Update a personal milestone. */
  updatePersonalMilestone?: Maybe<PersonalMilestone>;
  updateQuiz?: Maybe<Quiz>;
  /** Update a schedule status. */
  updateScheduleStatus?: Maybe<Schedule>;
  /** Update an existing service. */
  updateService?: Maybe<Service>;
  /** Update an existing user. */
  updateUser?: Maybe<User>;
  /** Update an existing workshop. */
  updateWorkshop?: Maybe<Workshop>;
  /** Create or update a resume. */
  upsertResume?: Maybe<Resume>;
};


export type MutationAddCollaboratorArgs = {
  documentId: Scalars['String']['input'];
  readable: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
  writable: Scalars['Boolean']['input'];
};


export type MutationApproveOrRejectCenterArgs = {
  adminNote?: InputMaybe<Scalars['String']['input']>;
  approve: Scalars['Boolean']['input'];
  centerId: Scalars['String']['input'];
};


export type MutationApproveOrRejectCenterMentorArgs = {
  adminNote?: InputMaybe<Scalars['String']['input']>;
  approved: Scalars['Boolean']['input'];
  where: UserUniqueFilter;
};


export type MutationApproveOrRejectResumeArgs = {
  adminNote: Scalars['String']['input'];
  resumeId: Scalars['String']['input'];
  status: ResumeStatus;
};


export type MutationApproveOrRejectServiceArgs = {
  adminNote?: InputMaybe<Scalars['String']['input']>;
  approve: Scalars['Boolean']['input'];
  commission?: InputMaybe<Scalars['Float']['input']>;
  serviceId: Scalars['String']['input'];
};


export type MutationBanUserArgs = {
  userId: Scalars['String']['input'];
};


export type MutationCreateAdminNoteArgs = {
  input: AdminNoteCreateInput;
};


export type MutationCreateAppConfigArgs = {
  input: ConfigCreateInput;
};


export type MutationCreateAppConfigsArgs = {
  data: Array<ConfigCreateInput>;
};


export type MutationCreateCategoryArgs = {
  input: CategoryCreateInput;
};


export type MutationCreateCenterArgs = {
  input: CenterCreateInput;
};


export type MutationCreateCenterMentorArgs = {
  data: CenterMentorCreateInput;
};


export type MutationCreateDocumentArgs = {
  input?: InputMaybe<DocumentCreateWithoutIdWithoutOwnerIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaboratorsWithoutOwnerWithoutFileUrlWithoutPreviewImageUrlWithoutNameInput>;
};


export type MutationCreateManagedServiceArgs = {
  input: ManagedServiceCreateInput;
};


export type MutationCreateManyCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};


export type MutationCreateManyPersonalMilestonesArgs = {
  data: Array<PersonalMilestoneCreateWithoutScheduleWithoutUserInput>;
  scheduleId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationCreateMeetingRoomArgs = {
  input: MeetingRoomCreateWithoutIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaboratorsInput;
};


export type MutationCreateOrderArgs = {
  data: OrderCreateWithoutIdWithoutUserWithoutPaymentIdWithoutPaymentWithoutRefundTicketWithoutStatusWithoutTotalWithoutCreatedAtWithoutUpdatedAtWithoutCommissionInput;
};


export type MutationCreateQuizArgs = {
  data: QuizCreateWithoutIdWithoutCenterMentorIdWithoutCreatedAtWithoutUpdatedAtInput;
};


export type MutationCreateScheduleArgs = {
  schedule: ScheduleCreateWithoutIdWithoutStatusWithoutCustomerIdWithoutOrderIdWithoutDatesInput;
};


export type MutationCreateServiceArgs = {
  input: ServiceCreateWithoutUserInput;
};


export type MutationCreateServiceAndCategoryArgs = {
  data: ServiceAndCategoryCreateInput;
};


export type MutationCreateServiceFeedbackArgs = {
  comments?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
};


export type MutationCreateSubCategoryArgs = {
  input: SubCategoryCreateInput;
};


export type MutationCreateWorkshopArgs = {
  input: WorkshopCreateWithoutWorkshopMeetingRoomInput;
};


export type MutationDeleteAdminNoteArgs = {
  where: AdminNoteUniqueFilter;
};


export type MutationDeleteCenterArgs = {
  where: CenterUniqueFilter;
};


export type MutationDeleteCenterMentorArgs = {
  where: CenterMentorUniqueFilter;
};


export type MutationDeleteOrderArgs = {
  where: OrderUniqueFilter;
};


export type MutationDeletePersonalMilestoneArgs = {
  personalMilestoneId: Scalars['String']['input'];
};


export type MutationDeleteServiceArgs = {
  where: ServiceUniqueFilter;
};


export type MutationDeleteServiceAndCategoryArgs = {
  where: ServiceAndCategoryUniqueFilter;
};


export type MutationDeleteUploadedFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUploadedFilesArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type MutationEditCollaboratorPermissionArgs = {
  documentId: Scalars['String']['input'];
  readable: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
  writable: Scalars['Boolean']['input'];
};


export type MutationEventDocumentChangedArgs = {
  data: DocumentDeltaInput;
};


export type MutationEventDocumentServerRequestSyncArgs = {
  data: DocumentDeltaInput;
};


export type MutationInviteCenterMentorArgs = {
  email: Scalars['String']['input'];
};


export type MutationInviteModeratorArgs = {
  email: Scalars['String']['input'];
};


export type MutationMultipleUploadArgs = {
  fileType: UploadedFileType;
  files: Array<Scalars['Upload']['input']>;
  userId: Scalars['String']['input'];
};


export type MutationProcessRefundTicketArgs = {
  action: RefundTicketAction;
  reason?: InputMaybe<Scalars['String']['input']>;
  refundTicketId: Scalars['String']['input'];
};


export type MutationRemoveCollaboratorArgs = {
  documentId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};


export type MutationRequestRefundArgs = {
  orderId: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendMessageArgs = {
  input: MessageCreateWithoutIdWithoutSenderIdWithoutSenderWithoutSentAtWithoutContextWithoutRecipientWithoutRecipientIdInput;
};


export type MutationSendTestNotificationArgs = {
  input: MessageCreateInput;
};


export type MutationSingleUploadArgs = {
  file: Scalars['Upload']['input'];
  fileType: UploadedFileType;
  userId: Scalars['String']['input'];
};


export type MutationSubmitQuizArgs = {
  data?: InputMaybe<QuizAttemptCreateWithoutIdWithoutCreatedAtWithoutUpdatedAtWithoutUserWithoutUserIdInput>;
};


export type MutationSubscribeToWorkshopArgs = {
  workshopId: Scalars['String']['input'];
};


export type MutationUpdateActiveDocumentIdArgs = {
  activeDocumentId: Scalars['String']['input'];
  collaborationSessionId: Scalars['String']['input'];
};


export type MutationUpdateAdminNoteArgs = {
  data: AdminNoteUpdateInput;
  where: AdminNoteUniqueFilter;
};


export type MutationUpdateAppConfigArgs = {
  input: ConfigUpdateInput;
  where: ConfigUniqueFilter;
};


export type MutationUpdateCenterArgs = {
  input: CenterUpdateInput;
  where: CenterUniqueFilter;
};


export type MutationUpdateCenterMentorArgs = {
  data: CenterMentorUpdateInput;
  where: CenterMentorUniqueFilter;
};


export type MutationUpdateDocumentArgs = {
  data: DocumentUpdateWithoutIdWithoutOwnerIdWithoutCreatedAtWithoutUpdatedAtWithoutCollaborationSessionIdWithoutCollaborationSessionWithoutOwnerWithoutFileUrlWithoutPreviewImageUrlInput;
  documentId: Scalars['String']['input'];
};


export type MutationUpdateDocumentPreviewImageArgs = {
  documentId: Scalars['String']['input'];
  imageId: Scalars['String']['input'];
};


export type MutationUpdateMeArgs = {
  firstName?: InputMaybe<Scalars['String']['input']>;
  imageBlob?: InputMaybe<Scalars['Upload']['input']>;
  input?: InputMaybe<UserUpdateWithoutIdWithoutAdminNoteWithoutCenterWithoutCustomerChatRoomWithoutAvatarUrlWithoutEmailWithoutNameWithoutPhoneNumberWithoutRoleWithoutCreatedAtWithoutUpdatedAtWithoutFilesWithoutOrdersWithoutSendingMessageWithoutMentorWithoutMentorChatRoomWithoutResumeWithoutServiceWithoutServiceFeedbacksWithoutWorkshopSubscriptionInput>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateMeetingRoomCollaboratorsArgs = {
  addCollaborators?: InputMaybe<Array<Scalars['String']['input']>>;
  meetingRoomId: Scalars['String']['input'];
  removeCollaborators?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUpdateOrderArgs = {
  data: OrderUpdateWithoutStatusWithoutTotalInput;
  where: OrderUniqueFilter;
};


export type MutationUpdatePersonalMilestoneArgs = {
  data: PersonalMilestoneUpdateInput;
  where: PersonalMilestoneUniqueFilter;
};


export type MutationUpdateQuizArgs = {
  data: QuizUpdateInput;
  where: QuizUniqueFilter;
};


export type MutationUpdateScheduleStatusArgs = {
  scheduleId: Scalars['String']['input'];
  status: ScheduleStatus;
};


export type MutationUpdateServiceArgs = {
  input: ServiceUpdateInput;
  where: ServiceUniqueFilter;
};


export type MutationUpdateUserArgs = {
  input: UserUpdateInput;
  where: UserUniqueFilter;
};


export type MutationUpdateWorkshopArgs = {
  input: WorkshopUpdateInput;
  where: WorkshopUniqueFilter;
};


export type MutationUpsertResumeArgs = {
  centerId: Scalars['String']['input'];
  resumeFile: Scalars['Upload']['input'];
  userId: Scalars['String']['input'];
};

/** An order in the system. */
export type Order = {
  __typename?: 'Order';
  /** The chat room of the order. */
  chatRoom?: Maybe<ChatRoom>;
  /** The ID of the chat room. */
  chatRoomId?: Maybe<Scalars['ID']['output']>;
  /** The commission of the order. */
  commission?: Maybe<Scalars['Float']['output']>;
  /** The date and time the order was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the order has been disbursed. */
  disbursed?: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the order. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The payment for the order. */
  payment?: Maybe<Array<Payment>>;
  /** The ID of the payment. */
  paymentId?: Maybe<Scalars['String']['output']>;
  /** The refund ticket for the order. */
  refundTicket?: Maybe<RefundTicket>;
  /** The schedule of the order. */
  schedule?: Maybe<Schedule>;
  /** The ID of the schedule. */
  scheduleId?: Maybe<Scalars['ID']['output']>;
  /** The service for the order. */
  service?: Maybe<Service>;
  /** The ID of the service. */
  serviceId?: Maybe<Scalars['ID']['output']>;
  /** The status of the order. */
  status?: Maybe<OrderStatus>;
  /** The total price of the order. */
  total?: Maybe<Scalars['Int']['output']>;
  /** The date and time the order was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who made the order. */
  user?: Maybe<User>;
  /** The ID of the user. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export enum OrderBy {
  Asc = 'Asc',
  Desc = 'Desc'
}

export type OrderCreateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutOrderInput>;
};

export type OrderCreatePaymentRelationInput = {
  connect?: InputMaybe<Array<PaymentUniqueFilter>>;
  create?: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
};

export type OrderCreateRefundTicketRelationInput = {
  connect?: InputMaybe<RefundTicketUniqueFilter>;
  create?: InputMaybe<RefundTicketCreateWithoutOrderInput>;
};

export type OrderCreateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutOrderInput>;
};

export type OrderCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutOrderInput>;
};

export type OrderCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutOrdersInput>;
};

export type OrderCreateWithoutChatRoomInput = {
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderCreatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderCreateRefundTicketRelationInput>;
  schedule: OrderCreateScheduleRelationInput;
  service: OrderCreateServiceRelationInput;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: OrderCreateUserRelationInput;
};

export type OrderCreateWithoutIdWithoutUserWithoutPaymentIdWithoutPaymentWithoutRefundTicketWithoutStatusWithoutTotalWithoutCreatedAtWithoutUpdatedAtWithoutCommissionInput = {
  chatRoom?: InputMaybe<OrderCreateChatRoomRelationInput>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  schedule: OrderCreateScheduleRelationInput;
  service: OrderCreateServiceRelationInput;
};

export type OrderCreateWithoutRefundTicketInput = {
  chatRoom?: InputMaybe<OrderCreateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderCreatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  schedule: OrderCreateScheduleRelationInput;
  service: OrderCreateServiceRelationInput;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: OrderCreateUserRelationInput;
};

export type OrderCreateWithoutScheduleInput = {
  chatRoom?: InputMaybe<OrderCreateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderCreatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderCreateRefundTicketRelationInput>;
  service: OrderCreateServiceRelationInput;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: OrderCreateUserRelationInput;
};

export type OrderCreateWithoutServiceInput = {
  chatRoom?: InputMaybe<OrderCreateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderCreatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderCreateRefundTicketRelationInput>;
  schedule: OrderCreateScheduleRelationInput;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: OrderCreateUserRelationInput;
};

export type OrderCreateWithoutUserInput = {
  chatRoom?: InputMaybe<OrderCreateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderCreatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderCreateRefundTicketRelationInput>;
  schedule: OrderCreateScheduleRelationInput;
  service: OrderCreateServiceRelationInput;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderDetails = {
  __typename?: 'OrderDetails';
  /** The center of the order. */
  center?: Maybe<Center>;
  /** The mentor of the order. */
  centerMentor?: Maybe<CenterMentor>;
  commission?: Maybe<Scalars['Float']['output']>;
  /** The date and time the order was completed. */
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The order of the details. */
  order?: Maybe<Order>;
  status?: Maybe<Scalars['String']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  /** The user of the order. */
  user?: Maybe<User>;
};

export type OrderFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disbursed?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentListFilter>;
  paymentId?: InputMaybe<StringFilter>;
  refundTicket?: InputMaybe<RefundTicketFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrderListFilter = {
  every?: InputMaybe<OrderFilter>;
  none?: InputMaybe<OrderFilter>;
  some?: InputMaybe<OrderFilter>;
};

export type OrderOrderBy = {
  chatRoom?: InputMaybe<ChatRoomOrderBy>;
  chatRoomId?: InputMaybe<OrderBy>;
  commission?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  disbursed?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  payment?: InputMaybe<PaymentOrderBy>;
  paymentId?: InputMaybe<OrderBy>;
  refundTicket?: InputMaybe<RefundTicketOrderBy>;
  schedule?: InputMaybe<ScheduleOrderBy>;
  scheduleId?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export enum OrderStatus {
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
  PendingRefund = 'PENDING_REFUND',
  Refunded = 'REFUNDED'
}

export type OrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<OrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type OrderUniqueFilter = {
  chatRoomId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type OrderUpdateChatRoomRelationInput = {
  connect?: InputMaybe<ChatRoomUniqueFilter>;
  create?: InputMaybe<ChatRoomCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ChatRoomUpdateWithoutOrderInput>;
};

export type OrderUpdatePaymentRelationInput = {
  connect?: InputMaybe<Array<PaymentUniqueFilter>>;
  create?: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  createMany?: InputMaybe<OrderUpdatePaymentRelationInputCreateMany>;
  delete?: InputMaybe<Array<PaymentUniqueFilter>>;
  deleteMany?: InputMaybe<Array<PaymentWithoutOrderFilter>>;
  disconnect?: InputMaybe<Array<PaymentUniqueFilter>>;
  set?: InputMaybe<Array<PaymentUniqueFilter>>;
  update?: InputMaybe<Array<OrderUpdatePaymentRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<OrderUpdatePaymentRelationInputUpdateMany>>;
};

export type OrderUpdatePaymentRelationInputCreateMany = {
  data?: InputMaybe<Array<PaymentCreateWithoutOrderInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderUpdatePaymentRelationInputUpdate = {
  data?: InputMaybe<PaymentUpdateWithoutOrderInput>;
  where?: InputMaybe<PaymentUniqueFilter>;
};

export type OrderUpdatePaymentRelationInputUpdateMany = {
  data?: InputMaybe<PaymentUpdateWithoutOrderInput>;
  where?: InputMaybe<PaymentWithoutOrderFilter>;
};

export type OrderUpdateRefundTicketRelationInput = {
  connect?: InputMaybe<RefundTicketUniqueFilter>;
  create?: InputMaybe<RefundTicketCreateWithoutOrderInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<RefundTicketUpdateWithoutOrderInput>;
};

export type OrderUpdateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutOrderInput>;
  update?: InputMaybe<ScheduleUpdateWithoutOrderInput>;
};

export type OrderUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutOrderInput>;
  update?: InputMaybe<ServiceUpdateWithoutOrderInput>;
};

export type OrderUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutOrdersInput>;
  update?: InputMaybe<UserUpdateWithoutOrdersInput>;
};

export type OrderUpdateWithoutChatRoomInput = {
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderUpdateRefundTicketRelationInput>;
  schedule?: InputMaybe<OrderUpdateScheduleRelationInput>;
  service?: InputMaybe<OrderUpdateServiceRelationInput>;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<OrderUpdateUserRelationInput>;
};

export type OrderUpdateWithoutRefundTicketInput = {
  chatRoom?: InputMaybe<OrderUpdateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  schedule?: InputMaybe<OrderUpdateScheduleRelationInput>;
  service?: InputMaybe<OrderUpdateServiceRelationInput>;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<OrderUpdateUserRelationInput>;
};

export type OrderUpdateWithoutScheduleInput = {
  chatRoom?: InputMaybe<OrderUpdateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderUpdateRefundTicketRelationInput>;
  service?: InputMaybe<OrderUpdateServiceRelationInput>;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<OrderUpdateUserRelationInput>;
};

export type OrderUpdateWithoutServiceInput = {
  chatRoom?: InputMaybe<OrderUpdateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderUpdateRefundTicketRelationInput>;
  schedule?: InputMaybe<OrderUpdateScheduleRelationInput>;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<OrderUpdateUserRelationInput>;
};

export type OrderUpdateWithoutStatusWithoutTotalInput = {
  chatRoom?: InputMaybe<OrderUpdateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderUpdateRefundTicketRelationInput>;
  schedule?: InputMaybe<OrderUpdateScheduleRelationInput>;
  service?: InputMaybe<OrderUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<OrderUpdateUserRelationInput>;
};

export type OrderUpdateWithoutUserInput = {
  chatRoom?: InputMaybe<OrderUpdateChatRoomRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  disbursed?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  payment?: InputMaybe<OrderUpdatePaymentRelationInput>;
  paymentId?: InputMaybe<Scalars['String']['input']>;
  refundTicket?: InputMaybe<OrderUpdateRefundTicketRelationInput>;
  schedule?: InputMaybe<OrderUpdateScheduleRelationInput>;
  service?: InputMaybe<OrderUpdateServiceRelationInput>;
  status?: InputMaybe<OrderStatus>;
  total?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderWithoutScheduleFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disbursed?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentListFilter>;
  paymentId?: InputMaybe<StringFilter>;
  refundTicket?: InputMaybe<RefundTicketFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrderWithoutServiceFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disbursed?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentListFilter>;
  paymentId?: InputMaybe<StringFilter>;
  refundTicket?: InputMaybe<RefundTicketFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrderWithoutUserFilter = {
  chatRoom?: InputMaybe<ChatRoomFilter>;
  chatRoomId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  disbursed?: InputMaybe<BooleanFilter>;
  id?: InputMaybe<StringFilter>;
  payment?: InputMaybe<PaymentListFilter>;
  paymentId?: InputMaybe<StringFilter>;
  refundTicket?: InputMaybe<RefundTicketFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  status?: InputMaybe<OrderStatusFilter>;
  total?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** A payment in the system. */
export type Payment = {
  __typename?: 'Payment';
  /** The amount of the payment. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The date and time the payment was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time the payment will expire. */
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the payment. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The order for the payment. */
  order?: Maybe<Order>;
  /** The code of the payment. */
  paymentCode?: Maybe<Scalars['String']['output']>;
  /** The status of the payment. */
  status?: Maybe<PaymentStatus>;
  /** The date and time the payment was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PaymentCreateWithoutOrderInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  paymentCode: Scalars['String']['input'];
  status?: InputMaybe<PaymentStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentFilter = {
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  orderId?: InputMaybe<StringFilter>;
  paymentCode?: InputMaybe<StringFilter>;
  status?: InputMaybe<PaymentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PaymentListFilter = {
  every?: InputMaybe<PaymentFilter>;
  none?: InputMaybe<PaymentFilter>;
  some?: InputMaybe<PaymentFilter>;
};

export type PaymentOrderBy = {
  amount?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  expiredAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderOrderBy>;
  orderId?: InputMaybe<OrderBy>;
  paymentCode?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Processing = 'PROCESSING'
}

export type PaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<PaymentStatusFilter>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
};

export type PaymentUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  paymentCode?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentUpdateWithoutOrderInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiredAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  paymentCode?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<PaymentStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaymentWithoutOrderFilter = {
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  paymentCode?: InputMaybe<StringFilter>;
  status?: InputMaybe<PaymentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonalMilestone = {
  __typename?: 'PersonalMilestone';
  /** The date the personal milestone was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The description of the personal milestone. */
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the personal milestone. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The order of the personal milestone. */
  milestoneOrder?: Maybe<Scalars['Int']['output']>;
  /** The schedule the personal milestone belongs to. */
  schedule?: Maybe<Schedule>;
  /** The ID of the schedule the personal milestone belongs to. */
  scheduleId?: Maybe<Scalars['String']['output']>;
  /** The status of the personal milestone. */
  status?: Maybe<PersonalMilestoneStatus>;
  /** The title of the personal milestone. */
  title?: Maybe<Scalars['String']['output']>;
  /** The date the personal milestone was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user the personal milestone belongs to. */
  user?: Maybe<User>;
  /** The ID of the user the personal milestone belongs to. */
  userId?: Maybe<Scalars['String']['output']>;
};

export type PersonalMilestoneCreateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutPersonalMilestoneInput>;
};

export type PersonalMilestoneCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutPersonalMilestoneInput>;
};

export type PersonalMilestoneCreateWithoutScheduleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: PersonalMilestoneCreateUserRelationInput;
};

export type PersonalMilestoneCreateWithoutScheduleWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonalMilestoneCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  schedule: PersonalMilestoneCreateScheduleRelationInput;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonalMilestoneFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  milestoneOrder?: InputMaybe<IntFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<PersonalMilestoneStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PersonalMilestoneListFilter = {
  every?: InputMaybe<PersonalMilestoneFilter>;
  none?: InputMaybe<PersonalMilestoneFilter>;
  some?: InputMaybe<PersonalMilestoneFilter>;
};

export type PersonalMilestoneOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  milestoneOrder?: InputMaybe<OrderBy>;
  schedule?: InputMaybe<ScheduleOrderBy>;
  scheduleId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export enum PersonalMilestoneStatus {
  NotPassed = 'NOT_PASSED',
  Passed = 'PASSED',
  Unrated = 'UNRATED'
}

export type PersonalMilestoneStatusFilter = {
  equals?: InputMaybe<PersonalMilestoneStatus>;
  in?: InputMaybe<Array<PersonalMilestoneStatus>>;
  not?: InputMaybe<PersonalMilestoneStatusFilter>;
  notIn?: InputMaybe<Array<PersonalMilestoneStatus>>;
};

export type PersonalMilestoneUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type PersonalMilestoneUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  schedule?: InputMaybe<PersonalMilestoneUpdateScheduleRelationInput>;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<PersonalMilestoneUpdateUserRelationInput>;
};

export type PersonalMilestoneUpdateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutPersonalMilestoneInput>;
  update?: InputMaybe<ScheduleUpdateWithoutPersonalMilestoneInput>;
};

export type PersonalMilestoneUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutPersonalMilestoneInput>;
  update?: InputMaybe<UserUpdateWithoutPersonalMilestoneInput>;
};

export type PersonalMilestoneUpdateWithoutScheduleInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<PersonalMilestoneUpdateUserRelationInput>;
};

export type PersonalMilestoneUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  milestoneOrder?: InputMaybe<Scalars['Int']['input']>;
  schedule?: InputMaybe<PersonalMilestoneUpdateScheduleRelationInput>;
  status?: InputMaybe<PersonalMilestoneStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PersonalMilestoneWithoutScheduleFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  milestoneOrder?: InputMaybe<IntFilter>;
  status?: InputMaybe<PersonalMilestoneStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type PersonalMilestoneWithoutUserFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  milestoneOrder?: InputMaybe<IntFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<PersonalMilestoneStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** A platform analytic in the system. */
export type PlatformAnalytic = {
  __typename?: 'PlatformAnalytic';
  /** The number of active centers. */
  activeCenterCount?: Maybe<Scalars['Int']['output']>;
  /** The number of active mentors. */
  activeMentorCount?: Maybe<Scalars['Int']['output']>;
  /** The number of approved services. */
  approvedServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The pending refunds. */
  pendingRefunds?: Maybe<Array<Order>>;
  /** The number of rejected services. */
  rejectedServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The total revenue. */
  revenue?: Maybe<Scalars['Int']['output']>;
  /** The top centers by revenue. */
  topCenters?: Maybe<Array<Center>>;
  /** The top services by revenue. */
  topServices?: Maybe<Array<Service>>;
  /** The total number of centers. */
  totalCenterCount?: Maybe<Scalars['Int']['output']>;
  /** The total number of mentors. */
  totalMentorCount?: Maybe<Scalars['Int']['output']>;
  /** The total number of services. */
  totalServiceCount?: Maybe<Scalars['Int']['output']>;
  /** The total number of users. */
  totalUserCount?: Maybe<Scalars['Int']['output']>;
  /** The total number of workshops. */
  totalWorkshopCount?: Maybe<Scalars['Int']['output']>;
  /** The date the analytic was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PreviewSchedule = {
  __typename?: 'PreviewSchedule';
  slots?: Maybe<Array<ScheduleSlot>>;
  totalSlots?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single admin note by its unique identifier. */
  adminNote?: Maybe<AdminNote>;
  /** Retrieve a list of admin notes. */
  adminNotes?: Maybe<Array<AdminNote>>;
  /** Preview a schedule for admin. */
  adminPreviewSchedule?: Maybe<PreviewSchedule>;
  /** Get an app config by key */
  appConfig?: Maybe<Config>;
  /** Get all app configs */
  appConfigs?: Maybe<Array<Config>>;
  /** Retrieve a list of categories with optional filtering, ordering, and pagination. */
  categories?: Maybe<Array<Category>>;
  /** Retrieve a single category by its unique identifier. */
  category?: Maybe<Category>;
  /** Retrieve a single center by its unique identifier. */
  center?: Maybe<Center>;
  /** Retrieve a single center analytic. */
  centerAnalytic?: Maybe<CenterAnalytic>;
  /** Retrieve a single center by its unique identifier. */
  centerByCenterMentor?: Maybe<Center>;
  /** Retrieve a list of center mentors with optional filtering, ordering, and pagination. */
  centerMentors?: Maybe<Array<CenterMentor>>;
  /** Preview a schedule for center mentor. */
  centerPreviewSchedule?: Maybe<PreviewSchedule>;
  /** Retrieve a list of centers with optional filtering, ordering, and pagination. */
  centers?: Maybe<Array<Center>>;
  /** Retrieve a single chat room by its unique identifier. */
  chatRoom?: Maybe<ChatRoom>;
  /** Retrieve a list of chat rooms with optional filtering, ordering, and pagination. */
  chatRooms?: Maybe<Array<ChatRoom>>;
  /** Retrieve a single collaboration session by its unique identifier. */
  collaborationSession?: Maybe<CollaborationSession>;
  /** Retrieve a list of collaboration sessions with optional filtering, ordering, and pagination. */
  collaborationSessions?: Maybe<Array<CollaborationSession>>;
  /** Retrieve a list of completed orders */
  completedOrders?: Maybe<Array<Order>>;
  /** Retrieve a list of completed orders details */
  completedOrdersDetails?: Maybe<OrderDetails>;
  /** Retrieve a list of completed orders for moderator */
  completedOrdersForModerator?: Maybe<Array<Order>>;
  /** Retrieve a single customer analytic. */
  customerAnalytic?: Maybe<CustomerAnalytic>;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  eventDocumentClientRequestSync?: Maybe<DocumentDelta>;
  interviewJoinInfo?: Maybe<MeetingRoomJoinInfo>;
  liveKitToken?: Maybe<Scalars['String']['output']>;
  managedService?: Maybe<ManagedService>;
  managedServices?: Maybe<Array<ManagedService>>;
  /** Retrieve the current user in context. */
  me?: Maybe<User>;
  meetingRoom?: Maybe<MeetingRoom>;
  meetingRoomJoinInfo?: Maybe<MeetingRoomJoinInfo>;
  /** Retrieve a single mentor analytic. */
  mentorAnalytic?: Maybe<MentorAnalytic>;
  /** Retrieve a single message by its unique identifier. */
  message?: Maybe<Message>;
  /** Retrieve a list of messages with optional filtering, ordering, and pagination. */
  messages?: Maybe<Array<Message>>;
  /** Retrieve a list of messages by chat room ID. */
  messagesByChatRoomId?: Maybe<Array<Message>>;
  myDocuments?: Maybe<Array<Document>>;
  /** Retrieve a list of resumes for the current user. */
  myResumes?: Maybe<Array<Resume>>;
  newDocument?: Maybe<Document>;
  newSession?: Maybe<Scalars['String']['output']>;
  /** Retrieve a single order by its unique identifier. */
  order?: Maybe<Order>;
  /** Retrieve a list of orders with optional filtering, ordering, and pagination. */
  orders?: Maybe<Array<Order>>;
  /** Retrieve a single payment by its unique identifier. */
  payment?: Maybe<Payment>;
  /** Retrieve a list of payments with optional filtering, ordering, and pagination. */
  payments?: Maybe<Array<Payment>>;
  /** Retrieve a single personal milestone by its unique identifier. */
  personalMilestone?: Maybe<PersonalMilestone>;
  /** Retrieve multiple personal milestones. */
  personalMilestones?: Maybe<Array<PersonalMilestone>>;
  /** Retrieve a single platform analytic. */
  platformAnalytic?: Maybe<PlatformAnalytic>;
  quiz?: Maybe<Quiz>;
  quizAttempt?: Maybe<QuizAttempt>;
  quizAttempts?: Maybe<Array<QuizAttempt>>;
  quizzes?: Maybe<Array<Quiz>>;
  /** Retrieve the recent chat activity of the current user. */
  recentChatActivity?: Maybe<Array<RecentChatActivity>>;
  /** Retrieve a refund ticket by ID. */
  refundTicket?: Maybe<RefundTicket>;
  /** Retrieve a list of refund tickets with optional filtering, ordering, and pagination. */
  refundTickets?: Maybe<Array<RefundTicket>>;
  /** Retrieve a single resume by its unique identifier. */
  resume?: Maybe<Resume>;
  /** Retrieve a single resume file by its unique identifier. */
  resumeFile?: Maybe<ResumeFile>;
  /** Retrieve a list of resume files with optional filtering, ordering, and pagination. */
  resumeFiles?: Maybe<Array<ResumeFile>>;
  /** Retrieve a list of resumes with optional filtering, ordering, and pagination. */
  resumes?: Maybe<Array<Resume>>;
  /** Retrieve a single schedule by its unique identifier. */
  schedule?: Maybe<Schedule>;
  /** Retrieve a list of schedule dates. */
  scheduleDates?: Maybe<Array<ScheduleDate>>;
  /** Retrieve a list of schedules with optional filtering, ordering, and pagination. */
  schedules?: Maybe<Array<Schedule>>;
  /** Retrieve a single service by its unique identifier. */
  service?: Maybe<Service>;
  /** Retrieve a list of service and categories with optional filtering, ordering, and pagination. */
  serviceAndCategories?: Maybe<Array<ServiceAndCategory>>;
  /** Retrieve a service and category by ID. */
  serviceAndCategory?: Maybe<ServiceAndCategory>;
  /** Retrieve a list of service feedbacks with optional filtering, ordering, and pagination. */
  serviceFeedbacks?: Maybe<Array<ServiceFeedback>>;
  /** Retrieve a list of services with optional filtering, ordering, and pagination. */
  services?: Maybe<Array<Service>>;
  /** Retrieve a list of services with optional filtering, ordering, and pagination. */
  servicesByCenter?: Maybe<Array<Service>>;
  session?: Maybe<Scalars['Json']['output']>;
  /** Retrieve a list of subcategories with optional filtering, ordering, and pagination. */
  subCategories?: Maybe<Array<SubCategory>>;
  /** Retrieve a list of workshops that the current user is subscribed to. */
  subscribedWorkshops?: Maybe<Array<WorkshopSubscription>>;
  /** Retrieve a single uploaded file by its unique identifier. */
  uploadedFile?: Maybe<UploadedFile>;
  /** Retrieve a list of uploaded files with optional filtering, ordering, and pagination. */
  uploadedFiles?: Maybe<Array<UploadedFile>>;
  /** Retrieve a single user by their unique identifier. */
  user?: Maybe<User>;
  /** Retrieve a single user by their session ID. */
  userBySession?: Maybe<User>;
  /** Retrieve a list of users with optional filtering, ordering, and pagination. */
  users?: Maybe<Array<User>>;
  /** Retrieve a single workshop by its unique identifier. */
  workshop?: Maybe<Workshop>;
  workshopMeetingRoom?: Maybe<WorkshopMeetingRoom>;
  workshopMeetingRoomJoinInfo?: Maybe<WorkshopMeetingRoomJoinInfo>;
  workshopMeetingRooms?: Maybe<Array<WorkshopMeetingRoom>>;
  /** Retrieve a single workshop subscription by its unique identifier. */
  workshopSubscription?: Maybe<WorkshopSubscription>;
  /** Retrieve a list of workshop subscriptions with optional filtering, ordering, and pagination. */
  workshopSubscriptions?: Maybe<Array<WorkshopSubscription>>;
  /** Retrieve a list of workshops with optional filtering, ordering, and pagination. */
  workshops?: Maybe<Array<Workshop>>;
};


export type QueryAdminNoteArgs = {
  where: AdminNoteUniqueFilter;
};


export type QueryAdminNotesArgs = {
  cursor?: InputMaybe<AdminNoteUniqueFilter>;
  filter?: InputMaybe<AdminNoteFilter>;
  orderBy?: InputMaybe<Array<AdminNoteOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAdminPreviewScheduleArgs = {
  scheduleConfig?: InputMaybe<ScheduleConfigInput>;
};


export type QueryAppConfigArgs = {
  where: ConfigUniqueFilter;
};


export type QueryAppConfigsArgs = {
  cursor?: InputMaybe<ConfigUniqueFilter>;
  filter?: InputMaybe<ConfigFilter>;
  orderBy?: InputMaybe<Array<ConfigOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryUniqueFilter>;
  filter?: InputMaybe<CategoryFilter>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  where: CategoryUniqueFilter;
};


export type QueryCenterArgs = {
  where: CenterUniqueFilter;
};


export type QueryCenterByCenterMentorArgs = {
  userId: Scalars['String']['input'];
};


export type QueryCenterMentorsArgs = {
  cursor?: InputMaybe<CenterMentorUniqueFilter>;
  filter?: InputMaybe<CenterMentorFilter>;
  orderBy?: InputMaybe<Array<CenterMentorOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCenterPreviewScheduleArgs = {
  scheduleConfigInput: ScheduleConfigInputForCenter;
};


export type QueryCentersArgs = {
  cursor?: InputMaybe<CenterUniqueFilter>;
  filter?: InputMaybe<CenterFilter>;
  orderBy?: InputMaybe<Array<CenterOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryChatRoomArgs = {
  where: ChatRoomUniqueFilter;
};


export type QueryChatRoomsArgs = {
  cursor?: InputMaybe<ChatRoomUniqueFilter>;
  filter?: InputMaybe<ChatRoomFilter>;
  orderBy?: InputMaybe<Array<ChatRoomOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCollaborationSessionArgs = {
  scheduleDateId: Scalars['String']['input'];
};


export type QueryCollaborationSessionsArgs = {
  cursor?: InputMaybe<CollaborationSessionUniqueFilter>;
  filter?: InputMaybe<CollaborationSessionFilter>;
  orderBy?: InputMaybe<Array<CollaborationSessionOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompletedOrdersArgs = {
  cursor?: InputMaybe<OrderUniqueFilter>;
  filter?: InputMaybe<OrderFilter>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompletedOrdersDetailsArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryCompletedOrdersForModeratorArgs = {
  cursor?: InputMaybe<OrderUniqueFilter>;
  filter?: InputMaybe<OrderFilter>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDocumentArgs = {
  where: DocumentUniqueFilter;
};


export type QueryDocumentsArgs = {
  cursor?: InputMaybe<DocumentUniqueFilter>;
  filter?: InputMaybe<DocumentFilter>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEventDocumentClientRequestSyncArgs = {
  documentId: Scalars['String']['input'];
  pageIndex: Scalars['Int']['input'];
};


export type QueryInterviewJoinInfoArgs = {
  scheduleId: Scalars['String']['input'];
};


export type QueryManagedServiceArgs = {
  where: ManagedServiceUniqueFilter;
};


export type QueryManagedServicesArgs = {
  cursor?: InputMaybe<ManagedServiceUniqueFilter>;
  filter?: InputMaybe<ManagedServiceFilter>;
  orderBy?: InputMaybe<Array<ManagedServiceOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMeetingRoomArgs = {
  scheduleDateId: Scalars['String']['input'];
};


export type QueryMeetingRoomJoinInfoArgs = {
  collaborationSessionId: Scalars['String']['input'];
};


export type QueryMessageArgs = {
  where: MessageUniqueFilter;
};


export type QueryMessagesArgs = {
  cursor?: InputMaybe<MessageUniqueFilter>;
  filter?: InputMaybe<MessageFilter>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMessagesByChatRoomIdArgs = {
  cursor?: InputMaybe<MessageUniqueFilter>;
  filter?: InputMaybe<MessageFilter>;
  orderBy?: InputMaybe<Array<MessageOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyDocumentsArgs = {
  cursor?: InputMaybe<DocumentUniqueFilter>;
  filter?: InputMaybe<DocumentFilter>;
  orderBy?: InputMaybe<Array<DocumentOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMyResumesArgs = {
  status?: InputMaybe<ResumeStatus>;
};


export type QueryNewSessionArgs = {
  userId: Scalars['String']['input'];
};


export type QueryOrderArgs = {
  where: OrderUniqueFilter;
};


export type QueryOrdersArgs = {
  cursor?: InputMaybe<OrderUniqueFilter>;
  filter?: InputMaybe<OrderFilter>;
  orderBy?: InputMaybe<Array<OrderOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentArgs = {
  where: PaymentUniqueFilter;
};


export type QueryPaymentsArgs = {
  cursor?: InputMaybe<PaymentUniqueFilter>;
  filter?: InputMaybe<PaymentFilter>;
  orderBy?: InputMaybe<Array<PaymentOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPersonalMilestoneArgs = {
  where: PersonalMilestoneUniqueFilter;
};


export type QueryPersonalMilestonesArgs = {
  cursor?: InputMaybe<PersonalMilestoneUniqueFilter>;
  filter?: InputMaybe<PersonalMilestoneFilter>;
  orderBy?: InputMaybe<Array<PersonalMilestoneOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPlatformAnalyticArgs = {
  centerSortBy: CenterSortBy;
  serviceSortBy: ServiceSortBy;
  take: Scalars['Int']['input'];
  timeframes: Timeframe;
};


export type QueryQuizArgs = {
  where: QuizUniqueFilter;
};


export type QueryQuizAttemptArgs = {
  id: Scalars['String']['input'];
};


export type QueryQuizAttemptsArgs = {
  filter?: InputMaybe<QuizAttemptFilter>;
  quizId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuizzesArgs = {
  scheduleId?: InputMaybe<Scalars['String']['input']>;
  serviceId: Scalars['String']['input'];
};


export type QueryRecentChatActivityArgs = {
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRefundTicketArgs = {
  id: Scalars['String']['input'];
};


export type QueryRefundTicketsArgs = {
  cursor?: InputMaybe<RefundTicketUniqueFilter>;
  filter?: InputMaybe<RefundTicketFilter>;
  orderBy?: InputMaybe<Array<RefundTicketOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResumeArgs = {
  where: ResumeUniqueFilter;
};


export type QueryResumeFileArgs = {
  where: ResumeFileUniqueFilter;
};


export type QueryResumeFilesArgs = {
  cursor?: InputMaybe<ResumeFileUniqueFilter>;
  filter?: InputMaybe<ResumeFileFilter>;
  orderBy?: InputMaybe<Array<ResumeFileOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryResumesArgs = {
  cursor?: InputMaybe<ResumeUniqueFilter>;
  filter?: InputMaybe<ResumeFilter>;
  orderBy?: InputMaybe<Array<ResumeOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryScheduleArgs = {
  where: ScheduleUniqueFilter;
};


export type QueryScheduleDatesArgs = {
  cursor?: InputMaybe<ScheduleDateUniqueFilter>;
  filter?: InputMaybe<ScheduleDateFilter>;
  orderBy?: InputMaybe<Array<ScheduleDateOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySchedulesArgs = {
  cursor?: InputMaybe<ScheduleUniqueFilter>;
  filter?: InputMaybe<ScheduleFilter>;
  orderBy?: InputMaybe<Array<ScheduleOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServiceArgs = {
  input: ServiceUniqueFilter;
};


export type QueryServiceAndCategoriesArgs = {
  cursor?: InputMaybe<ServiceAndCategoryUniqueFilter>;
  filter?: InputMaybe<ServiceAndCategoryFilter>;
  orderBy?: InputMaybe<Array<ServiceAndCategoryOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServiceAndCategoryArgs = {
  where: ServiceAndCategoryUniqueFilter;
};


export type QueryServiceFeedbacksArgs = {
  cursor?: InputMaybe<ServiceFeedbackUniqueFilter>;
  filter?: InputMaybe<ServiceFeedbackFilter>;
  orderBy?: InputMaybe<Array<ServiceFeedbackOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesArgs = {
  cursor?: InputMaybe<ServiceUniqueFilter>;
  filter?: InputMaybe<ServiceFilter>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryServicesByCenterArgs = {
  cursor?: InputMaybe<ServiceUniqueFilter>;
  filter?: InputMaybe<ServiceFilter>;
  orderBy?: InputMaybe<Array<ServiceOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySessionArgs = {
  sessionId: Scalars['String']['input'];
};


export type QuerySubCategoriesArgs = {
  cursor?: InputMaybe<SubCategoryUniqueFilter>;
  filter?: InputMaybe<SubCategoryFilter>;
  orderBy?: InputMaybe<Array<SubCategoryOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUploadedFileArgs = {
  where: UploadedFileUniqueFilter;
};


export type QueryUploadedFilesArgs = {
  cursor?: InputMaybe<UploadedFileUniqueFilter>;
  filter?: InputMaybe<UploadedFileFilter>;
  orderBy?: InputMaybe<Array<UploadedFileOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  where: UserUniqueFilter;
};


export type QueryUserBySessionArgs = {
  sessionId: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserUniqueFilter>;
  filter?: InputMaybe<UserFilter>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkshopArgs = {
  where: WorkshopUniqueFilter;
};


export type QueryWorkshopMeetingRoomArgs = {
  where: WorkshopMeetingRoomUniqueFilter;
};


export type QueryWorkshopMeetingRoomJoinInfoArgs = {
  workshopId: Scalars['String']['input'];
};


export type QueryWorkshopMeetingRoomsArgs = {
  cursor?: InputMaybe<WorkshopMeetingRoomUniqueFilter>;
  filter?: InputMaybe<WorkshopMeetingRoomFilter>;
  orderBy?: InputMaybe<Array<WorkshopMeetingRoomOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkshopSubscriptionArgs = {
  where: WorkshopSubscriptionUniqueFilter;
};


export type QueryWorkshopSubscriptionsArgs = {
  cursor?: InputMaybe<WorkshopSubscriptionUniqueFilter>;
  filter?: InputMaybe<WorkshopSubscriptionFilter>;
  orderBy?: InputMaybe<Array<WorkshopSubscriptionOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWorkshopsArgs = {
  cursor?: InputMaybe<WorkshopUniqueFilter>;
  filter?: InputMaybe<WorkshopFilter>;
  orderBy?: InputMaybe<Array<WorkshopOrderBy>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type Question = {
  __typename?: 'Question';
  answerSelectionType?: Maybe<AnswerType>;
  answers?: Maybe<Array<Scalars['String']['output']>>;
  correctAnswer?: Maybe<CorrectAnswerObject>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  explanation?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  messageForCorrectAnswer?: Maybe<Scalars['String']['output']>;
  messageForIncorrectAnswer?: Maybe<Scalars['String']['output']>;
  point?: Maybe<Scalars['Int']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  questionPic?: Maybe<Scalars['String']['output']>;
  questionType?: Maybe<QuestionType>;
  quiz?: Maybe<Quiz>;
  quizId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuestionCreateWithoutQuizInput = {
  answerSelectionType?: InputMaybe<AnswerType>;
  answers?: InputMaybe<Array<Scalars['String']['input']>>;
  correctAnswer?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  messageForCorrectAnswer?: InputMaybe<Scalars['String']['input']>;
  messageForIncorrectAnswer?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  question: Scalars['String']['input'];
  questionPic?: InputMaybe<Scalars['String']['input']>;
  questionType?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuestionFilter = {
  answerSelectionType?: InputMaybe<AnswerTypeFilter>;
  answers?: InputMaybe<StringListFilter>;
  correctAnswer?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  explanation?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messageForCorrectAnswer?: InputMaybe<StringFilter>;
  messageForIncorrectAnswer?: InputMaybe<StringFilter>;
  point?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  questionPic?: InputMaybe<StringFilter>;
  questionType?: InputMaybe<QuestionTypeFilter>;
  quiz?: InputMaybe<QuizFilter>;
  quizId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuestionListFilter = {
  every?: InputMaybe<QuestionFilter>;
  none?: InputMaybe<QuestionFilter>;
  some?: InputMaybe<QuestionFilter>;
};

export type QuestionOrderBy = {
  answerSelectionType?: InputMaybe<OrderBy>;
  answers?: InputMaybe<OrderBy>;
  correctAnswer?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  explanation?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  messageForCorrectAnswer?: InputMaybe<OrderBy>;
  messageForIncorrectAnswer?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
  question?: InputMaybe<OrderBy>;
  questionPic?: InputMaybe<OrderBy>;
  questionType?: InputMaybe<OrderBy>;
  quiz?: InputMaybe<QuizOrderBy>;
  quizId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export enum QuestionType {
  Photo = 'PHOTO',
  Text = 'TEXT'
}

export type QuestionTypeFilter = {
  equals?: InputMaybe<QuestionType>;
  in?: InputMaybe<Array<QuestionType>>;
  not?: InputMaybe<QuestionTypeFilter>;
  notIn?: InputMaybe<Array<QuestionType>>;
};

export type QuestionUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionUpdateWithoutQuizInput = {
  answerSelectionType?: InputMaybe<AnswerType>;
  answers?: InputMaybe<Array<Scalars['String']['input']>>;
  correctAnswer?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  explanation?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  messageForCorrectAnswer?: InputMaybe<Scalars['String']['input']>;
  messageForIncorrectAnswer?: InputMaybe<Scalars['String']['input']>;
  point?: InputMaybe<Scalars['Int']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  questionPic?: InputMaybe<Scalars['String']['input']>;
  questionType?: InputMaybe<QuestionType>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuestionWithoutQuizFilter = {
  answerSelectionType?: InputMaybe<AnswerTypeFilter>;
  answers?: InputMaybe<StringListFilter>;
  correctAnswer?: InputMaybe<StringListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  explanation?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  messageForCorrectAnswer?: InputMaybe<StringFilter>;
  messageForIncorrectAnswer?: InputMaybe<StringFilter>;
  point?: InputMaybe<IntFilter>;
  question?: InputMaybe<StringFilter>;
  questionPic?: InputMaybe<StringFilter>;
  questionType?: InputMaybe<QuestionTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Quiz = {
  __typename?: 'Quiz';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  nrOfQuestions?: Maybe<Scalars['Int']['output']>;
  progressBarColor?: Maybe<Scalars['String']['output']>;
  questions?: Maybe<Array<Question>>;
  quizSynopsis?: Maybe<Scalars['String']['output']>;
  quizTitle?: Maybe<Scalars['String']['output']>;
  service?: Maybe<Service>;
  serviceId?: Maybe<Scalars['ID']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuizAttempt = {
  __typename?: 'QuizAttempt';
  correctPoints?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  numberOfCorrectAnswers?: Maybe<Scalars['Int']['output']>;
  numberOfIncorrectAnswers?: Maybe<Scalars['Int']['output']>;
  numberOfQuestions?: Maybe<Scalars['Int']['output']>;
  questions?: Maybe<Scalars['JsonList']['output']>;
  quiz?: Maybe<Quiz>;
  quizId?: Maybe<Scalars['ID']['output']>;
  schedule?: Maybe<Schedule>;
  scheduleId?: Maybe<Scalars['ID']['output']>;
  totalPoints?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ID']['output']>;
  userInput?: Maybe<Scalars['JsonList']['output']>;
};

export type QuizAttemptCreateQuizRelationInput = {
  connect?: InputMaybe<QuizUniqueFilter>;
  create?: InputMaybe<QuizCreateWithoutQuizAttemptInput>;
};

export type QuizAttemptCreateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutQuizAttemptInput>;
};

export type QuizAttemptCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutQuizAttemptInput>;
};

export type QuizAttemptCreateWithoutIdWithoutCreatedAtWithoutUpdatedAtWithoutUserWithoutUserIdInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  quiz: QuizAttemptCreateQuizRelationInput;
  schedule: QuizAttemptCreateScheduleRelationInput;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptCreateWithoutQuizInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  schedule: QuizAttemptCreateScheduleRelationInput;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: QuizAttemptCreateUserRelationInput;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptCreateWithoutScheduleInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  quiz: QuizAttemptCreateQuizRelationInput;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: QuizAttemptCreateUserRelationInput;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptCreateWithoutUserInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  quiz: QuizAttemptCreateQuizRelationInput;
  schedule: QuizAttemptCreateScheduleRelationInput;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptFilter = {
  correctPoints?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  numberOfCorrectAnswers?: InputMaybe<IntFilter>;
  numberOfIncorrectAnswers?: InputMaybe<IntFilter>;
  numberOfQuestions?: InputMaybe<IntFilter>;
  questions?: InputMaybe<JsonListFilter>;
  quiz?: InputMaybe<QuizFilter>;
  quizId?: InputMaybe<StringFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  totalPoints?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  userInput?: InputMaybe<JsonListFilter>;
};

export type QuizAttemptListFilter = {
  every?: InputMaybe<QuizAttemptFilter>;
  none?: InputMaybe<QuizAttemptFilter>;
  some?: InputMaybe<QuizAttemptFilter>;
};

export type QuizAttemptOrderBy = {
  correctPoints?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  numberOfCorrectAnswers?: InputMaybe<OrderBy>;
  numberOfIncorrectAnswers?: InputMaybe<OrderBy>;
  numberOfQuestions?: InputMaybe<OrderBy>;
  questions?: InputMaybe<OrderBy>;
  quiz?: InputMaybe<QuizOrderBy>;
  quizId?: InputMaybe<OrderBy>;
  schedule?: InputMaybe<ScheduleOrderBy>;
  scheduleId?: InputMaybe<OrderBy>;
  totalPoints?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
  userInput?: InputMaybe<OrderBy>;
};

export type QuizAttemptUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  quizId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type QuizAttemptUpdateQuizRelationInput = {
  connect?: InputMaybe<QuizUniqueFilter>;
  create?: InputMaybe<QuizCreateWithoutQuizAttemptInput>;
  update?: InputMaybe<QuizUpdateWithoutQuizAttemptInput>;
};

export type QuizAttemptUpdateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutQuizAttemptInput>;
  update?: InputMaybe<ScheduleUpdateWithoutQuizAttemptInput>;
};

export type QuizAttemptUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutQuizAttemptInput>;
  update?: InputMaybe<UserUpdateWithoutQuizAttemptInput>;
};

export type QuizAttemptUpdateWithoutQuizInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  schedule?: InputMaybe<QuizAttemptUpdateScheduleRelationInput>;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<QuizAttemptUpdateUserRelationInput>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptUpdateWithoutScheduleInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  quiz?: InputMaybe<QuizAttemptUpdateQuizRelationInput>;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<QuizAttemptUpdateUserRelationInput>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptUpdateWithoutUserInput = {
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']>>;
  quiz?: InputMaybe<QuizAttemptUpdateQuizRelationInput>;
  schedule?: InputMaybe<QuizAttemptUpdateScheduleRelationInput>;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']>>;
};

export type QuizAttemptWithoutQuizFilter = {
  correctPoints?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  numberOfCorrectAnswers?: InputMaybe<IntFilter>;
  numberOfIncorrectAnswers?: InputMaybe<IntFilter>;
  numberOfQuestions?: InputMaybe<IntFilter>;
  questions?: InputMaybe<JsonListFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  totalPoints?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  userInput?: InputMaybe<JsonListFilter>;
};

export type QuizAttemptWithoutScheduleFilter = {
  correctPoints?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  numberOfCorrectAnswers?: InputMaybe<IntFilter>;
  numberOfIncorrectAnswers?: InputMaybe<IntFilter>;
  numberOfQuestions?: InputMaybe<IntFilter>;
  questions?: InputMaybe<JsonListFilter>;
  quiz?: InputMaybe<QuizFilter>;
  quizId?: InputMaybe<StringFilter>;
  totalPoints?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  userInput?: InputMaybe<JsonListFilter>;
};

export type QuizAttemptWithoutUserFilter = {
  correctPoints?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  numberOfCorrectAnswers?: InputMaybe<IntFilter>;
  numberOfIncorrectAnswers?: InputMaybe<IntFilter>;
  numberOfQuestions?: InputMaybe<IntFilter>;
  questions?: InputMaybe<JsonListFilter>;
  quiz?: InputMaybe<QuizFilter>;
  quizId?: InputMaybe<StringFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  totalPoints?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userInput?: InputMaybe<JsonListFilter>;
};

export type QuizCreateCenterMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutQuizInput>;
};

export type QuizCreateQuestionsRelationInput = {
  connect?: InputMaybe<Array<QuestionUniqueFilter>>;
  create?: InputMaybe<Array<QuestionCreateWithoutQuizInput>>;
};

export type QuizCreateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutQuizInput>>;
};

export type QuizCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutQuizInput>;
};

export type QuizCreateWithoutCenterMentorInput = {
  QuizAttempt?: InputMaybe<QuizCreateQuizAttemptRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions: Scalars['Int']['input'];
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizCreateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle: Scalars['String']['input'];
  service: QuizCreateServiceRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizCreateWithoutIdWithoutCenterMentorIdWithoutCreatedAtWithoutUpdatedAtInput = {
  QuizAttempt?: InputMaybe<QuizCreateQuizAttemptRelationInput>;
  centerMentor: QuizCreateCenterMentorRelationInput;
  nrOfQuestions: Scalars['Int']['input'];
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizCreateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle: Scalars['String']['input'];
  service: QuizCreateServiceRelationInput;
};

export type QuizCreateWithoutQuizAttemptInput = {
  centerMentor: QuizCreateCenterMentorRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions: Scalars['Int']['input'];
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizCreateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle: Scalars['String']['input'];
  service: QuizCreateServiceRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizCreateWithoutServiceInput = {
  QuizAttempt?: InputMaybe<QuizCreateQuizAttemptRelationInput>;
  centerMentor: QuizCreateCenterMentorRelationInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions: Scalars['Int']['input'];
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizCreateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizFilter = {
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  centerMentor?: InputMaybe<CenterMentorFilter>;
  centerMentorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  nrOfQuestions?: InputMaybe<IntFilter>;
  progressBarColor?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListFilter>;
  quizSynopsis?: InputMaybe<StringFilter>;
  quizTitle?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuizListFilter = {
  every?: InputMaybe<QuizFilter>;
  none?: InputMaybe<QuizFilter>;
  some?: InputMaybe<QuizFilter>;
};

export type QuizOrderBy = {
  QuizAttempt?: InputMaybe<QuizAttemptOrderBy>;
  centerMentor?: InputMaybe<CenterMentorOrderBy>;
  centerMentorId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  nrOfQuestions?: InputMaybe<OrderBy>;
  progressBarColor?: InputMaybe<OrderBy>;
  questions?: InputMaybe<QuestionOrderBy>;
  quizSynopsis?: InputMaybe<OrderBy>;
  quizTitle?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type QuizUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QuizUpdateCenterMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutQuizInput>;
  update?: InputMaybe<CenterMentorUpdateWithoutQuizInput>;
};

export type QuizUpdateInput = {
  QuizAttempt?: InputMaybe<QuizUpdateQuizAttemptRelationInput>;
  centerMentor?: InputMaybe<QuizUpdateCenterMentorRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizUpdateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<QuizUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizUpdateQuestionsRelationInput = {
  connect?: InputMaybe<Array<QuestionUniqueFilter>>;
  create?: InputMaybe<Array<QuestionCreateWithoutQuizInput>>;
  createMany?: InputMaybe<QuizUpdateQuestionsRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuestionUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuestionWithoutQuizFilter>>;
  disconnect?: InputMaybe<Array<QuestionUniqueFilter>>;
  set?: InputMaybe<Array<QuestionUniqueFilter>>;
  update?: InputMaybe<Array<QuizUpdateQuestionsRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<QuizUpdateQuestionsRelationInputUpdateMany>>;
};

export type QuizUpdateQuestionsRelationInputCreateMany = {
  data?: InputMaybe<Array<QuestionCreateWithoutQuizInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizUpdateQuestionsRelationInputUpdate = {
  data?: InputMaybe<QuestionUpdateWithoutQuizInput>;
  where?: InputMaybe<QuestionUniqueFilter>;
};

export type QuizUpdateQuestionsRelationInputUpdateMany = {
  data?: InputMaybe<QuestionUpdateWithoutQuizInput>;
  where?: InputMaybe<QuestionWithoutQuizFilter>;
};

export type QuizUpdateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutQuizInput>>;
  createMany?: InputMaybe<QuizUpdateQuizAttemptRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuizAttemptWithoutQuizFilter>>;
  disconnect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  set?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  update?: InputMaybe<Array<QuizUpdateQuizAttemptRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<QuizUpdateQuizAttemptRelationInputUpdateMany>>;
};

export type QuizUpdateQuizAttemptRelationInputCreateMany = {
  data?: InputMaybe<Array<QuizAttemptCreateWithoutQuizInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuizUpdateQuizAttemptRelationInputUpdate = {
  data?: InputMaybe<QuizAttemptUpdateWithoutQuizInput>;
  where?: InputMaybe<QuizAttemptUniqueFilter>;
};

export type QuizUpdateQuizAttemptRelationInputUpdateMany = {
  data?: InputMaybe<QuizAttemptUpdateWithoutQuizInput>;
  where?: InputMaybe<QuizAttemptWithoutQuizFilter>;
};

export type QuizUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutQuizInput>;
  update?: InputMaybe<ServiceUpdateWithoutQuizInput>;
};

export type QuizUpdateWithoutCenterMentorInput = {
  QuizAttempt?: InputMaybe<QuizUpdateQuizAttemptRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizUpdateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<QuizUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizUpdateWithoutQuizAttemptInput = {
  centerMentor?: InputMaybe<QuizUpdateCenterMentorRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizUpdateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<QuizUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizUpdateWithoutServiceInput = {
  QuizAttempt?: InputMaybe<QuizUpdateQuizAttemptRelationInput>;
  centerMentor?: InputMaybe<QuizUpdateCenterMentorRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  nrOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  progressBarColor?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<QuizUpdateQuestionsRelationInput>;
  quizSynopsis?: InputMaybe<Scalars['String']['input']>;
  quizTitle?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type QuizWithoutCenterMentorFilter = {
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  nrOfQuestions?: InputMaybe<IntFilter>;
  progressBarColor?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListFilter>;
  quizSynopsis?: InputMaybe<StringFilter>;
  quizTitle?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuizWithoutServiceFilter = {
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  centerMentor?: InputMaybe<CenterMentorFilter>;
  centerMentorId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  nrOfQuestions?: InputMaybe<IntFilter>;
  progressBarColor?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListFilter>;
  quizSynopsis?: InputMaybe<StringFilter>;
  quizTitle?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Range = {
  __typename?: 'Range';
  index?: Maybe<Scalars['Int']['output']>;
  length?: Maybe<Scalars['Int']['output']>;
};

export type RangeInput = {
  index?: InputMaybe<Scalars['Int']['input']>;
  length?: InputMaybe<Scalars['Int']['input']>;
};

export type RecentChatActivity = {
  __typename?: 'RecentChatActivity';
  /** The chat room. */
  chatRoom?: Maybe<ChatRoom>;
  /** The last activity of the chat room. */
  lastActivity?: Maybe<Scalars['DateTime']['output']>;
  /** The last message of the chat room. */
  message?: Maybe<Message>;
  /** The sender of the message. */
  sender?: Maybe<User>;
};

export type RefundTicket = {
  __typename?: 'RefundTicket';
  /** The amount of the refund ticket. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** The bank account number of the refund ticket. */
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  /** The bank BIN of the refund ticket. */
  bankBin?: Maybe<Scalars['String']['output']>;
  /** The bank name of the refund ticket. */
  bankName?: Maybe<Scalars['String']['output']>;
  /** The date and time the refund ticket was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the refund ticket. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The moderator who processed the refund ticket. */
  moderator?: Maybe<User>;
  /** The order for the refund ticket. */
  order?: Maybe<Order>;
  /** The reason for the refund ticket. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The requester of the refund ticket. */
  requester?: Maybe<User>;
  /** The status of the refund ticket. */
  status?: Maybe<RefundTicketStatus>;
  /** The date and time the refund ticket was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

/** The action to take on a refund ticket. */
export enum RefundTicketAction {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export type RefundTicketCreateModeratorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutRefundTicketInput>;
};

export type RefundTicketCreateOrderRelationInput = {
  connect?: InputMaybe<OrderUniqueFilter>;
  create?: InputMaybe<OrderCreateWithoutRefundTicketInput>;
};

export type RefundTicketCreateRequesterRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutRequesterInput>;
};

export type RefundTicketCreateWithoutModeratorInput = {
  amount: Scalars['Float']['input'];
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order: RefundTicketCreateOrderRelationInput;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  requester: RefundTicketCreateRequesterRelationInput;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketCreateWithoutOrderInput = {
  amount: Scalars['Float']['input'];
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moderator?: InputMaybe<RefundTicketCreateModeratorRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  requester: RefundTicketCreateRequesterRelationInput;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketCreateWithoutRequesterInput = {
  amount: Scalars['Float']['input'];
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moderator?: InputMaybe<RefundTicketCreateModeratorRelationInput>;
  order: RefundTicketCreateOrderRelationInput;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketFilter = {
  amount?: InputMaybe<FloatFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankBin?: InputMaybe<StringFilter>;
  bankName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  moderator?: InputMaybe<UserFilter>;
  moderatorId?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  orderId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<StringFilter>;
  rejectedReason?: InputMaybe<StringFilter>;
  requester?: InputMaybe<UserFilter>;
  requesterId?: InputMaybe<StringFilter>;
  status?: InputMaybe<RefundTicketStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RefundTicketListFilter = {
  every?: InputMaybe<RefundTicketFilter>;
  none?: InputMaybe<RefundTicketFilter>;
  some?: InputMaybe<RefundTicketFilter>;
};

export type RefundTicketOrderBy = {
  amount?: InputMaybe<OrderBy>;
  bankAccountNumber?: InputMaybe<OrderBy>;
  bankBin?: InputMaybe<OrderBy>;
  bankName?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  moderator?: InputMaybe<UserOrderBy>;
  moderatorId?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderOrderBy>;
  orderId?: InputMaybe<OrderBy>;
  reason?: InputMaybe<OrderBy>;
  rejectedReason?: InputMaybe<OrderBy>;
  requester?: InputMaybe<UserOrderBy>;
  requesterId?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export enum RefundTicketStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type RefundTicketStatusFilter = {
  equals?: InputMaybe<RefundTicketStatus>;
  in?: InputMaybe<Array<RefundTicketStatus>>;
  not?: InputMaybe<RefundTicketStatusFilter>;
  notIn?: InputMaybe<Array<RefundTicketStatus>>;
};

export type RefundTicketUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
};

export type RefundTicketUpdateModeratorRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutRefundTicketInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutRefundTicketInput>;
};

export type RefundTicketUpdateOrderRelationInput = {
  connect?: InputMaybe<OrderUniqueFilter>;
  create?: InputMaybe<OrderCreateWithoutRefundTicketInput>;
  update?: InputMaybe<OrderUpdateWithoutRefundTicketInput>;
};

export type RefundTicketUpdateRequesterRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutRequesterInput>;
  update?: InputMaybe<UserUpdateWithoutRequesterInput>;
};

export type RefundTicketUpdateWithoutModeratorInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<RefundTicketUpdateOrderRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  requester?: InputMaybe<RefundTicketUpdateRequesterRelationInput>;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketUpdateWithoutOrderInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moderator?: InputMaybe<RefundTicketUpdateModeratorRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  requester?: InputMaybe<RefundTicketUpdateRequesterRelationInput>;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketUpdateWithoutRequesterInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  bankName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  moderator?: InputMaybe<RefundTicketUpdateModeratorRelationInput>;
  order?: InputMaybe<RefundTicketUpdateOrderRelationInput>;
  reason?: InputMaybe<Scalars['String']['input']>;
  rejectedReason?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<RefundTicketStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type RefundTicketWithoutModeratorFilter = {
  amount?: InputMaybe<FloatFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankBin?: InputMaybe<StringFilter>;
  bankName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  orderId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<StringFilter>;
  rejectedReason?: InputMaybe<StringFilter>;
  requester?: InputMaybe<UserFilter>;
  requesterId?: InputMaybe<StringFilter>;
  status?: InputMaybe<RefundTicketStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type RefundTicketWithoutRequesterFilter = {
  amount?: InputMaybe<FloatFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankBin?: InputMaybe<StringFilter>;
  bankName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  moderator?: InputMaybe<UserFilter>;
  moderatorId?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderFilter>;
  orderId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<StringFilter>;
  rejectedReason?: InputMaybe<StringFilter>;
  status?: InputMaybe<RefundTicketStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

/** A resume in the system. */
export type Resume = {
  __typename?: 'Resume';
  /** The center for the resume. */
  center?: Maybe<Center>;
  /** The ID of the center. */
  centerId?: Maybe<Scalars['ID']['output']>;
  /** The date and time the resume was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the resume. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The resume file for the resume. */
  resumeFile?: Maybe<Array<ResumeFile>>;
  /** The status of the resume. */
  status?: Maybe<ResumeStatus>;
  /** The date and time the resume was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user for the resume. */
  user?: Maybe<User>;
  /** The ID of the user. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ResumeCreateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutResumeInput>>;
};

export type ResumeCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutResumeInput>;
};

export type ResumeCreateResumeFileRelationInput = {
  connect?: InputMaybe<Array<ResumeFileUniqueFilter>>;
  create?: InputMaybe<Array<ResumeFileCreateWithoutResumeInput>>;
};

export type ResumeCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutResumeInput>;
};

export type ResumeCreateWithoutAdminNoteInput = {
  center?: InputMaybe<ResumeCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeCreateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: ResumeCreateUserRelationInput;
};

export type ResumeCreateWithoutCenterInput = {
  adminNote?: InputMaybe<ResumeCreateAdminNoteRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeCreateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: ResumeCreateUserRelationInput;
};

export type ResumeCreateWithoutUserInput = {
  adminNote?: InputMaybe<ResumeCreateAdminNoteRelationInput>;
  center?: InputMaybe<ResumeCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeCreateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/** A file associated with a resume. */
export type ResumeFile = {
  __typename?: 'ResumeFile';
  /** The original name of the resume file. */
  actualFileName?: Maybe<Scalars['String']['output']>;
  /** The date and time the resume file was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The URL of the resume file. */
  fileUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the resume file. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The resume for the resume file. */
  resume?: Maybe<Resume>;
  /** The ID of the resume. */
  resumeId?: Maybe<Scalars['ID']['output']>;
  /** The type of the resume file. */
  type?: Maybe<Scalars['String']['output']>;
  /** The date and time the resume file was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ResumeFileCreateWithoutResumeInput = {
  actualFileName: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeFileFilter = {
  actualFileName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  resume?: InputMaybe<ResumeFilter>;
  resumeId?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ResumeFileListFilter = {
  every?: InputMaybe<ResumeFileFilter>;
  none?: InputMaybe<ResumeFileFilter>;
  some?: InputMaybe<ResumeFileFilter>;
};

export type ResumeFileOrderBy = {
  actualFileName?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  fileUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  resume?: InputMaybe<ResumeOrderBy>;
  resumeId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

export type ResumeFileUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeFileUpdateWithoutResumeInput = {
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeFileWithoutResumeFilter = {
  actualFileName?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ResumeFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resumeFile?: InputMaybe<ResumeFileListFilter>;
  status?: InputMaybe<ResumeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ResumeListFilter = {
  every?: InputMaybe<ResumeFilter>;
  none?: InputMaybe<ResumeFilter>;
  some?: InputMaybe<ResumeFilter>;
};

export type ResumeOrderBy = {
  adminNote?: InputMaybe<AdminNoteOrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  centerId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  resumeFile?: InputMaybe<ResumeFileOrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export enum ResumeStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED',
  Requested = 'REQUESTED',
  Reviewing = 'REVIEWING'
}

export type ResumeStatusFilter = {
  equals?: InputMaybe<ResumeStatus>;
  in?: InputMaybe<Array<ResumeStatus>>;
  not?: InputMaybe<ResumeStatusFilter>;
  notIn?: InputMaybe<Array<ResumeStatus>>;
};

export type ResumeUniqueFilter = {
  centerId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ResumeUpdateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResumeUpdateAdminNoteRelationInputCreateMany>;
  delete?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  deleteMany?: InputMaybe<Array<AdminNoteWithoutResumeFilter>>;
  disconnect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  set?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  update?: InputMaybe<Array<ResumeUpdateAdminNoteRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ResumeUpdateAdminNoteRelationInputUpdateMany>>;
};

export type ResumeUpdateAdminNoteRelationInputCreateMany = {
  data?: InputMaybe<Array<AdminNoteCreateWithoutResumeInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResumeUpdateAdminNoteRelationInputUpdate = {
  data?: InputMaybe<AdminNoteUpdateWithoutResumeInput>;
  where?: InputMaybe<AdminNoteUniqueFilter>;
};

export type ResumeUpdateAdminNoteRelationInputUpdateMany = {
  data?: InputMaybe<AdminNoteUpdateWithoutResumeInput>;
  where?: InputMaybe<AdminNoteWithoutResumeFilter>;
};

export type ResumeUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutResumeInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterUpdateWithoutResumeInput>;
};

export type ResumeUpdateResumeFileRelationInput = {
  connect?: InputMaybe<Array<ResumeFileUniqueFilter>>;
  create?: InputMaybe<Array<ResumeFileCreateWithoutResumeInput>>;
  createMany?: InputMaybe<ResumeUpdateResumeFileRelationInputCreateMany>;
  delete?: InputMaybe<Array<ResumeFileUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ResumeFileWithoutResumeFilter>>;
  disconnect?: InputMaybe<Array<ResumeFileUniqueFilter>>;
  set?: InputMaybe<Array<ResumeFileUniqueFilter>>;
  update?: InputMaybe<Array<ResumeUpdateResumeFileRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ResumeUpdateResumeFileRelationInputUpdateMany>>;
};

export type ResumeUpdateResumeFileRelationInputCreateMany = {
  data?: InputMaybe<Array<ResumeFileCreateWithoutResumeInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ResumeUpdateResumeFileRelationInputUpdate = {
  data?: InputMaybe<ResumeFileUpdateWithoutResumeInput>;
  where?: InputMaybe<ResumeFileUniqueFilter>;
};

export type ResumeUpdateResumeFileRelationInputUpdateMany = {
  data?: InputMaybe<ResumeFileUpdateWithoutResumeInput>;
  where?: InputMaybe<ResumeFileWithoutResumeFilter>;
};

export type ResumeUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutResumeInput>;
  update?: InputMaybe<UserUpdateWithoutResumeInput>;
};

export type ResumeUpdateWithoutAdminNoteInput = {
  center?: InputMaybe<ResumeUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeUpdateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ResumeUpdateUserRelationInput>;
};

export type ResumeUpdateWithoutCenterInput = {
  adminNote?: InputMaybe<ResumeUpdateAdminNoteRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeUpdateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ResumeUpdateUserRelationInput>;
};

export type ResumeUpdateWithoutUserInput = {
  adminNote?: InputMaybe<ResumeUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ResumeUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  resumeFile?: InputMaybe<ResumeUpdateResumeFileRelationInput>;
  status?: InputMaybe<ResumeStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResumeWithoutCenterFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resumeFile?: InputMaybe<ResumeFileListFilter>;
  status?: InputMaybe<ResumeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ResumeWithoutUserFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  resumeFile?: InputMaybe<ResumeFileListFilter>;
  status?: InputMaybe<ResumeStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum Role {
  Admin = 'ADMIN',
  CenterMentor = 'CENTER_MENTOR',
  CenterOwner = 'CENTER_OWNER',
  Customer = 'CUSTOMER',
  Moderator = 'MODERATOR'
}

export type RoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<RoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

/** A schedule in the system. */
export type Schedule = {
  __typename?: 'Schedule';
  /** The ID of the customer the schedule belongs to. */
  customerId?: Maybe<Scalars['ID']['output']>;
  /** The dates of the schedule. */
  dates?: Maybe<Array<ScheduleDate>>;
  daysOfWeek: Array<Scalars['Int']['output']>;
  /** The ID of the schedule. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The managed service the schedule belongs to. */
  managedService: ManagedService;
  /** The ID of the managed service the schedule belongs to. */
  managedServiceId: Scalars['ID']['output'];
  /** The order that belongs to orderId. */
  order?: Maybe<Array<Order>>;
  /** The ID of the order the schedule belongs to. */
  orderId?: Maybe<Scalars['ID']['output']>;
  /** The personal milestone of the schedule. */
  personalMilestone?: Maybe<Array<PersonalMilestone>>;
  scheduleEnd: Scalars['DateTime']['output'];
  scheduleStart: Scalars['DateTime']['output'];
  slots: Array<Scalars['Int']['output']>;
  status: ScheduleStatus;
};

/** A schedule config in the system. */
export type ScheduleConfigInput = {
  dayEndTime: Scalars['String']['input'];
  dayStartTime: Scalars['String']['input'];
  midDayBreakTimeEnd: Scalars['String']['input'];
  midDayBreakTimeStart: Scalars['String']['input'];
  slotBreakDuration: Scalars['String']['input'];
  slotDuration: Scalars['String']['input'];
};

export type ScheduleConfigInputForCenter = {
  days: Array<Scalars['Int']['input']>;
  endDate: Scalars['String']['input'];
  slots: Array<Scalars['Int']['input']>;
  startDate: Scalars['String']['input'];
};

export type ScheduleConnection = {
  __typename?: 'ScheduleConnection';
  schedules?: Maybe<Array<Schedule>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type ScheduleCreateDatesRelationInput = {
  connect?: InputMaybe<Array<ScheduleDateUniqueFilter>>;
  create?: InputMaybe<Array<ScheduleDateCreateWithoutScheduleInput>>;
};

export type ScheduleCreateManagedServiceRelationInput = {
  connect?: InputMaybe<ManagedServiceUniqueFilter>;
  create?: InputMaybe<ManagedServiceCreateWithoutScheduleInput>;
};

export type ScheduleCreateOrderRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutScheduleInput>>;
};

export type ScheduleCreatePersonalMilestoneRelationInput = {
  connect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  create?: InputMaybe<Array<PersonalMilestoneCreateWithoutScheduleInput>>;
};

export type ScheduleCreateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutScheduleInput>>;
};

export type ScheduleCreateWithoutDatesInput = {
  Order?: InputMaybe<ScheduleCreateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleCreateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService: ScheduleCreateManagedServiceRelationInput;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleCreatePersonalMilestoneRelationInput>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleCreateWithoutIdWithoutStatusWithoutCustomerIdWithoutOrderIdWithoutDatesInput = {
  Order?: InputMaybe<ScheduleCreateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleCreateQuizAttemptRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  managedService: ScheduleCreateManagedServiceRelationInput;
  personalMilestone?: InputMaybe<ScheduleCreatePersonalMilestoneRelationInput>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type ScheduleCreateWithoutManagedServiceInput = {
  Order?: InputMaybe<ScheduleCreateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleCreateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleCreateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleCreatePersonalMilestoneRelationInput>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleCreateWithoutOrderInput = {
  QuizAttempt?: InputMaybe<ScheduleCreateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleCreateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService: ScheduleCreateManagedServiceRelationInput;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleCreatePersonalMilestoneRelationInput>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleCreateWithoutPersonalMilestoneInput = {
  Order?: InputMaybe<ScheduleCreateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleCreateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleCreateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService: ScheduleCreateManagedServiceRelationInput;
  orderId?: InputMaybe<Scalars['String']['input']>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleCreateWithoutQuizAttemptInput = {
  Order?: InputMaybe<ScheduleCreateOrderRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleCreateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService: ScheduleCreateManagedServiceRelationInput;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleCreatePersonalMilestoneRelationInput>;
  scheduleEnd: Scalars['DateTime']['input'];
  scheduleStart: Scalars['DateTime']['input'];
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

/** A schedule date in the system. */
export type ScheduleDate = {
  __typename?: 'ScheduleDate';
  /** The collaboration session of the schedule date. */
  collaborationSession?: Maybe<Array<CollaborationSession>>;
  dayOfWeek: Scalars['Int']['output'];
  end: Scalars['DateTime']['output'];
  /** The ID of the schedule date. */
  id?: Maybe<Scalars['ID']['output']>;
  lateStart?: Maybe<Scalars['DateTime']['output']>;
  maxParticipants: Scalars['Int']['output'];
  orderId?: Maybe<Scalars['ID']['output']>;
  participantIds: Array<Scalars['String']['output']>;
  /** The schedule the schedule date belongs to. */
  schedule?: Maybe<Schedule>;
  /** The ID of the schedule the schedule date belongs to. */
  scheduleId?: Maybe<Scalars['ID']['output']>;
  serviceId: Scalars['ID']['output'];
  slot: Scalars['Int']['output'];
  start: Scalars['DateTime']['output'];
  status: ScheduleDateStatus;
};

export type ScheduleDateCreateCollaborationSessionRelationInput = {
  connect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  create?: InputMaybe<Array<CollaborationSessionCreateWithoutScheduleDateInput>>;
};

export type ScheduleDateCreateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutDatesInput>;
};

export type ScheduleDateCreateUserRelationInput = {
  connect?: InputMaybe<Array<UserUniqueFilter>>;
  create?: InputMaybe<Array<UserCreateWithoutScheduleDateInput>>;
};

export type ScheduleDateCreateWithoutCollaborationSessionInput = {
  User?: InputMaybe<ScheduleDateCreateUserRelationInput>;
  dayOfWeek: Scalars['Int']['input'];
  end: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  schedule: ScheduleDateCreateScheduleRelationInput;
  serviceId: Scalars['String']['input'];
  slot: Scalars['Int']['input'];
  start: Scalars['DateTime']['input'];
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateCreateWithoutScheduleInput = {
  CollaborationSession?: InputMaybe<ScheduleDateCreateCollaborationSessionRelationInput>;
  User?: InputMaybe<ScheduleDateCreateUserRelationInput>;
  dayOfWeek: Scalars['Int']['input'];
  end: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceId: Scalars['String']['input'];
  slot: Scalars['Int']['input'];
  start: Scalars['DateTime']['input'];
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateCreateWithoutUserInput = {
  CollaborationSession?: InputMaybe<ScheduleDateCreateCollaborationSessionRelationInput>;
  dayOfWeek: Scalars['Int']['input'];
  end: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  schedule: ScheduleDateCreateScheduleRelationInput;
  serviceId: Scalars['String']['input'];
  slot: Scalars['Int']['input'];
  start: Scalars['DateTime']['input'];
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  User?: InputMaybe<UserListFilter>;
  dayOfWeek?: InputMaybe<IntFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lateStart?: InputMaybe<DateTimeFilter>;
  maxParticipants?: InputMaybe<IntFilter>;
  orderId?: InputMaybe<StringFilter>;
  participantIds?: InputMaybe<StringListFilter>;
  schedule?: InputMaybe<ScheduleFilter>;
  scheduleId?: InputMaybe<StringFilter>;
  serviceId?: InputMaybe<StringFilter>;
  slot?: InputMaybe<IntFilter>;
  start?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<ScheduleDateStatusFilter>;
};

export type ScheduleDateListFilter = {
  every?: InputMaybe<ScheduleDateFilter>;
  none?: InputMaybe<ScheduleDateFilter>;
  some?: InputMaybe<ScheduleDateFilter>;
};

export type ScheduleDateOrderBy = {
  CollaborationSession?: InputMaybe<CollaborationSessionOrderBy>;
  User?: InputMaybe<UserOrderBy>;
  dayOfWeek?: InputMaybe<OrderBy>;
  end?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lateStart?: InputMaybe<OrderBy>;
  maxParticipants?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  participantIds?: InputMaybe<OrderBy>;
  schedule?: InputMaybe<ScheduleOrderBy>;
  scheduleId?: InputMaybe<OrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  slot?: InputMaybe<OrderBy>;
  start?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

export enum ScheduleDateStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS',
  MissingCustomer = 'MISSING_CUSTOMER',
  MissingMentor = 'MISSING_MENTOR',
  NotStarted = 'NOT_STARTED'
}

export type ScheduleDateStatusFilter = {
  equals?: InputMaybe<ScheduleDateStatus>;
  in?: InputMaybe<Array<ScheduleDateStatus>>;
  not?: InputMaybe<ScheduleDateStatusFilter>;
  notIn?: InputMaybe<Array<ScheduleDateStatus>>;
};

export type ScheduleDateUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduleDateUpdateCollaborationSessionRelationInput = {
  connect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  create?: InputMaybe<Array<CollaborationSessionCreateWithoutScheduleDateInput>>;
  createMany?: InputMaybe<ScheduleDateUpdateCollaborationSessionRelationInputCreateMany>;
  delete?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  deleteMany?: InputMaybe<Array<CollaborationSessionWithoutScheduleDateFilter>>;
  disconnect?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  set?: InputMaybe<Array<CollaborationSessionUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleDateUpdateCollaborationSessionRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleDateUpdateCollaborationSessionRelationInputUpdateMany>>;
};

export type ScheduleDateUpdateCollaborationSessionRelationInputCreateMany = {
  data?: InputMaybe<Array<CollaborationSessionCreateWithoutScheduleDateInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleDateUpdateCollaborationSessionRelationInputUpdate = {
  data?: InputMaybe<CollaborationSessionUpdateWithoutScheduleDateInput>;
  where?: InputMaybe<CollaborationSessionUniqueFilter>;
};

export type ScheduleDateUpdateCollaborationSessionRelationInputUpdateMany = {
  data?: InputMaybe<CollaborationSessionUpdateWithoutScheduleDateInput>;
  where?: InputMaybe<CollaborationSessionWithoutScheduleDateFilter>;
};

export type ScheduleDateUpdateScheduleRelationInput = {
  connect?: InputMaybe<ScheduleUniqueFilter>;
  create?: InputMaybe<ScheduleCreateWithoutDatesInput>;
  update?: InputMaybe<ScheduleUpdateWithoutDatesInput>;
};

export type ScheduleDateUpdateUserRelationInput = {
  connect?: InputMaybe<Array<UserUniqueFilter>>;
  create?: InputMaybe<Array<UserCreateWithoutScheduleDateInput>>;
  createMany?: InputMaybe<ScheduleDateUpdateUserRelationInputCreateMany>;
  delete?: InputMaybe<Array<UserUniqueFilter>>;
  deleteMany?: InputMaybe<Array<UserWithoutScheduleDateFilter>>;
  disconnect?: InputMaybe<Array<UserUniqueFilter>>;
  set?: InputMaybe<Array<UserUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleDateUpdateUserRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleDateUpdateUserRelationInputUpdateMany>>;
};

export type ScheduleDateUpdateUserRelationInputCreateMany = {
  data?: InputMaybe<Array<UserCreateWithoutScheduleDateInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleDateUpdateUserRelationInputUpdate = {
  data?: InputMaybe<UserUpdateWithoutScheduleDateInput>;
  where?: InputMaybe<UserUniqueFilter>;
};

export type ScheduleDateUpdateUserRelationInputUpdateMany = {
  data?: InputMaybe<UserUpdateWithoutScheduleDateInput>;
  where?: InputMaybe<UserWithoutScheduleDateFilter>;
};

export type ScheduleDateUpdateWithoutCollaborationSessionInput = {
  User?: InputMaybe<ScheduleDateUpdateUserRelationInput>;
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  schedule?: InputMaybe<ScheduleDateUpdateScheduleRelationInput>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateUpdateWithoutScheduleInput = {
  CollaborationSession?: InputMaybe<ScheduleDateUpdateCollaborationSessionRelationInput>;
  User?: InputMaybe<ScheduleDateUpdateUserRelationInput>;
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateUpdateWithoutUserInput = {
  CollaborationSession?: InputMaybe<ScheduleDateUpdateCollaborationSessionRelationInput>;
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lateStart?: InputMaybe<Scalars['DateTime']['input']>;
  maxParticipants?: InputMaybe<Scalars['Int']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  participantIds?: InputMaybe<Array<Scalars['String']['input']>>;
  schedule?: InputMaybe<ScheduleDateUpdateScheduleRelationInput>;
  serviceId?: InputMaybe<Scalars['String']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<ScheduleDateStatus>;
};

export type ScheduleDateWithoutScheduleFilter = {
  CollaborationSession?: InputMaybe<CollaborationSessionListFilter>;
  User?: InputMaybe<UserListFilter>;
  dayOfWeek?: InputMaybe<IntFilter>;
  end?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  lateStart?: InputMaybe<DateTimeFilter>;
  maxParticipants?: InputMaybe<IntFilter>;
  orderId?: InputMaybe<StringFilter>;
  participantIds?: InputMaybe<StringListFilter>;
  serviceId?: InputMaybe<StringFilter>;
  slot?: InputMaybe<IntFilter>;
  start?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<ScheduleDateStatusFilter>;
};

export type ScheduleFilter = {
  Order?: InputMaybe<OrderListFilter>;
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  customerId?: InputMaybe<StringFilter>;
  dates?: InputMaybe<ScheduleDateListFilter>;
  daysOfWeek?: InputMaybe<IntListFilter>;
  id?: InputMaybe<StringFilter>;
  managedService?: InputMaybe<ManagedServiceFilter>;
  managedServiceId?: InputMaybe<StringFilter>;
  orderId?: InputMaybe<StringFilter>;
  personalMilestone?: InputMaybe<PersonalMilestoneListFilter>;
  scheduleEnd?: InputMaybe<DateTimeFilter>;
  scheduleStart?: InputMaybe<DateTimeFilter>;
  slots?: InputMaybe<IntListFilter>;
  status?: InputMaybe<ScheduleStatusFilter>;
};

export type ScheduleListFilter = {
  every?: InputMaybe<ScheduleFilter>;
  none?: InputMaybe<ScheduleFilter>;
  some?: InputMaybe<ScheduleFilter>;
};

export type ScheduleOrderBy = {
  Order?: InputMaybe<OrderOrderBy>;
  QuizAttempt?: InputMaybe<QuizAttemptOrderBy>;
  customerId?: InputMaybe<OrderBy>;
  dates?: InputMaybe<ScheduleDateOrderBy>;
  daysOfWeek?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  managedService?: InputMaybe<ManagedServiceOrderBy>;
  managedServiceId?: InputMaybe<OrderBy>;
  orderId?: InputMaybe<OrderBy>;
  personalMilestone?: InputMaybe<PersonalMilestoneOrderBy>;
  scheduleEnd?: InputMaybe<OrderBy>;
  scheduleStart?: InputMaybe<OrderBy>;
  slots?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
};

export type ScheduleSlot = {
  __typename?: 'ScheduleSlot';
  dayOfWeek?: Maybe<Scalars['Int']['output']>;
  end?: Maybe<Scalars['String']['output']>;
  slot?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['String']['output']>;
};

export enum ScheduleStatus {
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  InProgress = 'IN_PROGRESS',
  Published = 'PUBLISHED',
  Refunded = 'REFUNDED',
  Unpublished = 'UNPUBLISHED',
  WaitingInterview = 'WAITING_INTERVIEW',
  WaitingQuiz = 'WAITING_QUIZ'
}

export type ScheduleStatusFilter = {
  equals?: InputMaybe<ScheduleStatus>;
  in?: InputMaybe<Array<ScheduleStatus>>;
  not?: InputMaybe<ScheduleStatusFilter>;
  notIn?: InputMaybe<Array<ScheduleStatus>>;
};

export type ScheduleUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ScheduleUpdateDatesRelationInput = {
  connect?: InputMaybe<Array<ScheduleDateUniqueFilter>>;
  create?: InputMaybe<Array<ScheduleDateCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<ScheduleUpdateDatesRelationInputCreateMany>;
  delete?: InputMaybe<Array<ScheduleDateUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ScheduleDateWithoutScheduleFilter>>;
  disconnect?: InputMaybe<Array<ScheduleDateUniqueFilter>>;
  set?: InputMaybe<Array<ScheduleDateUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleUpdateDatesRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleUpdateDatesRelationInputUpdateMany>>;
};

export type ScheduleUpdateDatesRelationInputCreateMany = {
  data?: InputMaybe<Array<ScheduleDateCreateWithoutScheduleInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleUpdateDatesRelationInputUpdate = {
  data?: InputMaybe<ScheduleDateUpdateWithoutScheduleInput>;
  where?: InputMaybe<ScheduleDateUniqueFilter>;
};

export type ScheduleUpdateDatesRelationInputUpdateMany = {
  data?: InputMaybe<ScheduleDateUpdateWithoutScheduleInput>;
  where?: InputMaybe<ScheduleDateWithoutScheduleFilter>;
};

export type ScheduleUpdateManagedServiceRelationInput = {
  connect?: InputMaybe<ManagedServiceUniqueFilter>;
  create?: InputMaybe<ManagedServiceCreateWithoutScheduleInput>;
  update?: InputMaybe<ManagedServiceUpdateWithoutScheduleInput>;
};

export type ScheduleUpdateOrderRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<ScheduleUpdateOrderRelationInputCreateMany>;
  delete?: InputMaybe<Array<OrderUniqueFilter>>;
  deleteMany?: InputMaybe<Array<OrderWithoutScheduleFilter>>;
  disconnect?: InputMaybe<Array<OrderUniqueFilter>>;
  set?: InputMaybe<Array<OrderUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleUpdateOrderRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleUpdateOrderRelationInputUpdateMany>>;
};

export type ScheduleUpdateOrderRelationInputCreateMany = {
  data?: InputMaybe<Array<OrderCreateWithoutScheduleInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleUpdateOrderRelationInputUpdate = {
  data?: InputMaybe<OrderUpdateWithoutScheduleInput>;
  where?: InputMaybe<OrderUniqueFilter>;
};

export type ScheduleUpdateOrderRelationInputUpdateMany = {
  data?: InputMaybe<OrderUpdateWithoutScheduleInput>;
  where?: InputMaybe<OrderWithoutScheduleFilter>;
};

export type ScheduleUpdatePersonalMilestoneRelationInput = {
  connect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  create?: InputMaybe<Array<PersonalMilestoneCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<ScheduleUpdatePersonalMilestoneRelationInputCreateMany>;
  delete?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  deleteMany?: InputMaybe<Array<PersonalMilestoneWithoutScheduleFilter>>;
  disconnect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  set?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleUpdatePersonalMilestoneRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleUpdatePersonalMilestoneRelationInputUpdateMany>>;
};

export type ScheduleUpdatePersonalMilestoneRelationInputCreateMany = {
  data?: InputMaybe<Array<PersonalMilestoneCreateWithoutScheduleInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleUpdatePersonalMilestoneRelationInputUpdate = {
  data?: InputMaybe<PersonalMilestoneUpdateWithoutScheduleInput>;
  where?: InputMaybe<PersonalMilestoneUniqueFilter>;
};

export type ScheduleUpdatePersonalMilestoneRelationInputUpdateMany = {
  data?: InputMaybe<PersonalMilestoneUpdateWithoutScheduleInput>;
  where?: InputMaybe<PersonalMilestoneWithoutScheduleFilter>;
};

export type ScheduleUpdateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutScheduleInput>>;
  createMany?: InputMaybe<ScheduleUpdateQuizAttemptRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuizAttemptWithoutScheduleFilter>>;
  disconnect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  set?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  update?: InputMaybe<Array<ScheduleUpdateQuizAttemptRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ScheduleUpdateQuizAttemptRelationInputUpdateMany>>;
};

export type ScheduleUpdateQuizAttemptRelationInputCreateMany = {
  data?: InputMaybe<Array<QuizAttemptCreateWithoutScheduleInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ScheduleUpdateQuizAttemptRelationInputUpdate = {
  data?: InputMaybe<QuizAttemptUpdateWithoutScheduleInput>;
  where?: InputMaybe<QuizAttemptUniqueFilter>;
};

export type ScheduleUpdateQuizAttemptRelationInputUpdateMany = {
  data?: InputMaybe<QuizAttemptUpdateWithoutScheduleInput>;
  where?: InputMaybe<QuizAttemptWithoutScheduleFilter>;
};

export type ScheduleUpdateWithoutDatesInput = {
  Order?: InputMaybe<ScheduleUpdateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleUpdateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService?: InputMaybe<ScheduleUpdateManagedServiceRelationInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleUpdatePersonalMilestoneRelationInput>;
  scheduleEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduleStart?: InputMaybe<Scalars['DateTime']['input']>;
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleUpdateWithoutManagedServiceInput = {
  Order?: InputMaybe<ScheduleUpdateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleUpdateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleUpdateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleUpdatePersonalMilestoneRelationInput>;
  scheduleEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduleStart?: InputMaybe<Scalars['DateTime']['input']>;
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleUpdateWithoutOrderInput = {
  QuizAttempt?: InputMaybe<ScheduleUpdateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleUpdateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService?: InputMaybe<ScheduleUpdateManagedServiceRelationInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleUpdatePersonalMilestoneRelationInput>;
  scheduleEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduleStart?: InputMaybe<Scalars['DateTime']['input']>;
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleUpdateWithoutPersonalMilestoneInput = {
  Order?: InputMaybe<ScheduleUpdateOrderRelationInput>;
  QuizAttempt?: InputMaybe<ScheduleUpdateQuizAttemptRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleUpdateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService?: InputMaybe<ScheduleUpdateManagedServiceRelationInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  scheduleEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduleStart?: InputMaybe<Scalars['DateTime']['input']>;
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleUpdateWithoutQuizAttemptInput = {
  Order?: InputMaybe<ScheduleUpdateOrderRelationInput>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  dates?: InputMaybe<ScheduleUpdateDatesRelationInput>;
  daysOfWeek?: InputMaybe<Array<Scalars['Int']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  managedService?: InputMaybe<ScheduleUpdateManagedServiceRelationInput>;
  orderId?: InputMaybe<Scalars['String']['input']>;
  personalMilestone?: InputMaybe<ScheduleUpdatePersonalMilestoneRelationInput>;
  scheduleEnd?: InputMaybe<Scalars['DateTime']['input']>;
  scheduleStart?: InputMaybe<Scalars['DateTime']['input']>;
  slots?: InputMaybe<Array<Scalars['Int']['input']>>;
  status?: InputMaybe<ScheduleStatus>;
};

export type ScheduleWithoutManagedServiceFilter = {
  Order?: InputMaybe<OrderListFilter>;
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  customerId?: InputMaybe<StringFilter>;
  dates?: InputMaybe<ScheduleDateListFilter>;
  daysOfWeek?: InputMaybe<IntListFilter>;
  id?: InputMaybe<StringFilter>;
  orderId?: InputMaybe<StringFilter>;
  personalMilestone?: InputMaybe<PersonalMilestoneListFilter>;
  scheduleEnd?: InputMaybe<DateTimeFilter>;
  scheduleStart?: InputMaybe<DateTimeFilter>;
  slots?: InputMaybe<IntListFilter>;
  status?: InputMaybe<ScheduleStatusFilter>;
};

/** A service offered by a center. */
export type Service = {
  __typename?: 'Service';
  /** The admin note of the service. */
  adminNote?: Maybe<Array<AdminNote>>;
  /** The center that offers the service. */
  center?: Maybe<Center>;
  /** The ID of the center that offers the service. */
  centerId?: Maybe<Scalars['ID']['output']>;
  /** The commission of the service. */
  commission?: Maybe<Scalars['Float']['output']>;
  /** The content of the service. */
  content?: Maybe<Scalars['String']['output']>;
  /** The date and time the service was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The description of the service. */
  description?: Maybe<Scalars['String']['output']>;
  /** Whether the user has already provided feedback for the service. */
  feedbacked?: Maybe<Scalars['Boolean']['output']>;
  /** The feedbacks for the service. */
  feedbacks?: Maybe<Array<ServiceFeedback>>;
  /** The ID of the service. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The image file for the service. */
  imageFile?: Maybe<UploadedFile>;
  /** The ID of the image file for the service. */
  imageFileId?: Maybe<Scalars['ID']['output']>;
  /** The URL of the image file for the service. */
  imageFileUrl?: Maybe<Scalars['String']['output']>;
  /** Whether the service is active. */
  isActive?: Maybe<Scalars['Boolean']['output']>;
  /** The managed service for the service. */
  managedService?: Maybe<Array<ManagedService>>;
  /** The name of the service. */
  name?: Maybe<Scalars['String']['output']>;
  /** The order for the service. */
  order?: Maybe<Array<Order>>;
  /** The price of the service. */
  price?: Maybe<Scalars['Float']['output']>;
  /** The quiz of the service. */
  quiz?: Maybe<Array<Quiz>>;
  /** The rating of the service. */
  rating?: Maybe<Scalars['Float']['output']>;
  /** The service and category for the service. */
  serviceAndCategory?: Maybe<Array<ServiceAndCategory>>;
  /** The status of the service. */
  status?: Maybe<ServiceStatus>;
  /** The date and time the service was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who requested the service. */
  user?: Maybe<User>;
  /** The ID of the user who requested the service. */
  userId?: Maybe<Scalars['ID']['output']>;
  /** The workshop for the service. */
  workshop?: Maybe<Array<Workshop>>;
  /** The workshop organization for the service. */
  workshopOrganization?: Maybe<Array<WorkshopOrganization>>;
};

/** A service and category in the system. */
export type ServiceAndCategory = {
  __typename?: 'ServiceAndCategory';
  /** Whether the service and category is deleted. */
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  /** The service for the service and category. */
  service?: Maybe<Service>;
  /** The ID of the service. */
  serviceId?: Maybe<Scalars['ID']['output']>;
  /** The sub category for the service and category. */
  subCategory?: Maybe<SubCategory>;
  /** The ID of the sub category. */
  subCategoryId?: Maybe<Scalars['ID']['output']>;
};

export type ServiceAndCategoryCreateInput = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  service: ServiceAndCategoryCreateServiceRelationInput;
  subCategory: ServiceAndCategoryCreateSubCategoryRelationInput;
};

export type ServiceAndCategoryCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutServiceAndCategoryInput>;
};

export type ServiceAndCategoryCreateSubCategoryRelationInput = {
  connect?: InputMaybe<SubCategoryUniqueFilter>;
  create?: InputMaybe<SubCategoryCreateWithoutServiceAndCategoryInput>;
};

export type ServiceAndCategoryCreateWithoutServiceInput = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  subCategory: ServiceAndCategoryCreateSubCategoryRelationInput;
};

export type ServiceAndCategoryCreateWithoutSubCategoryInput = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  service: ServiceAndCategoryCreateServiceRelationInput;
};

export type ServiceAndCategoryFilter = {
  isDeleted?: InputMaybe<BooleanFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  subCategory?: InputMaybe<SubCategoryFilter>;
  subCategoryId?: InputMaybe<StringFilter>;
};

export type ServiceAndCategoryListFilter = {
  every?: InputMaybe<ServiceAndCategoryFilter>;
  none?: InputMaybe<ServiceAndCategoryFilter>;
  some?: InputMaybe<ServiceAndCategoryFilter>;
};

export type ServiceAndCategoryOrderBy = {
  isDeleted?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  subCategory?: InputMaybe<SubCategoryOrderBy>;
  subCategoryId?: InputMaybe<OrderBy>;
};

export type ServiceAndCategoryUniqueFilter = {
  serviceId?: InputMaybe<Scalars['String']['input']>;
  subCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceAndCategoryUpdateSubCategoryRelationInput = {
  connect?: InputMaybe<SubCategoryUniqueFilter>;
  create?: InputMaybe<SubCategoryCreateWithoutServiceAndCategoryInput>;
  update?: InputMaybe<SubCategoryUpdateWithoutServiceAndCategoryInput>;
};

export type ServiceAndCategoryUpdateWithoutServiceInput = {
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  subCategory?: InputMaybe<ServiceAndCategoryUpdateSubCategoryRelationInput>;
};

export type ServiceAndCategoryWithoutServiceFilter = {
  isDeleted?: InputMaybe<BooleanFilter>;
  subCategory?: InputMaybe<SubCategoryFilter>;
  subCategoryId?: InputMaybe<StringFilter>;
};

export type ServiceCreateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutServiceInput>>;
};

export type ServiceCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutServicesInput>;
};

export type ServiceCreateFeedbacksRelationInput = {
  connect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  create?: InputMaybe<Array<ServiceFeedbackCreateWithoutServiceInput>>;
};

export type ServiceCreateImageFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutServiceInput>;
};

export type ServiceCreateManagedServiceRelationInput = {
  connect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  create?: InputMaybe<Array<ManagedServiceCreateWithoutServiceInput>>;
};

export type ServiceCreateOrderRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutServiceInput>>;
};

export type ServiceCreateQuizRelationInput = {
  connect?: InputMaybe<Array<QuizUniqueFilter>>;
  create?: InputMaybe<Array<QuizCreateWithoutServiceInput>>;
};

export type ServiceCreateServiceAndCategoryRelationInput = {
  connect?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  create?: InputMaybe<Array<ServiceAndCategoryCreateWithoutServiceInput>>;
};

export type ServiceCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutServiceInput>;
};

export type ServiceCreateWithoutAdminNoteInput = {
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutCenterInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutFeedbacksInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutImageFileInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutManagedServiceInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutOrderInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutQuizInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutServiceAndCategoryInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutUserInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutWorkshopInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshopOrganization?: InputMaybe<ServiceCreateWorkshopOrganizationRelationInput>;
};

export type ServiceCreateWithoutWorkshopOrganizationInput = {
  adminNote?: InputMaybe<ServiceCreateAdminNoteRelationInput>;
  center: ServiceCreateCenterRelationInput;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description: Scalars['String']['input'];
  feedbacks?: InputMaybe<ServiceCreateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceCreateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceCreateManagedServiceRelationInput>;
  name: Scalars['String']['input'];
  order?: InputMaybe<ServiceCreateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceCreateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceCreateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceCreateUserRelationInput>;
  workshop?: InputMaybe<ServiceCreateWorkshopRelationInput>;
};

export type ServiceCreateWorkshopOrganizationRelationInput = {
  connect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopOrganizationCreateWithoutServiceInput>>;
};

export type ServiceCreateWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutServiceInput>>;
};

/** A feedback for a service. */
export type ServiceFeedback = {
  __typename?: 'ServiceFeedback';
  /** The comments of the service feedback. */
  comments?: Maybe<Scalars['String']['output']>;
  /** The date and time the service feedback was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the service feedback. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The rating of the service. */
  rating?: Maybe<Scalars['Float']['output']>;
  /** The service that was provided. */
  service?: Maybe<Service>;
  /** The ID of the service that was provided. */
  serviceId?: Maybe<Scalars['ID']['output']>;
  /** The date and time the service feedback was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who provided the feedback. */
  user?: Maybe<User>;
  /** The ID of the user who provided the feedback. */
  userId?: Maybe<Scalars['ID']['output']>;
};

export type ServiceFeedbackCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutFeedbacksInput>;
};

export type ServiceFeedbackCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutServiceFeedbacksInput>;
};

export type ServiceFeedbackCreateWithoutServiceInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: ServiceFeedbackCreateUserRelationInput;
};

export type ServiceFeedbackCreateWithoutUserInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating: Scalars['Float']['input'];
  service: ServiceFeedbackCreateServiceRelationInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServiceFeedbackFilter = {
  comments?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ServiceFeedbackListFilter = {
  every?: InputMaybe<ServiceFeedbackFilter>;
  none?: InputMaybe<ServiceFeedbackFilter>;
  some?: InputMaybe<ServiceFeedbackFilter>;
};

export type ServiceFeedbackOrderBy = {
  comments?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  rating?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

export type ServiceFeedbackUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceFeedbackUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutFeedbacksInput>;
  update?: InputMaybe<ServiceUpdateWithoutFeedbacksInput>;
};

export type ServiceFeedbackUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutServiceFeedbacksInput>;
  update?: InputMaybe<UserUpdateWithoutServiceFeedbacksInput>;
};

export type ServiceFeedbackUpdateWithoutServiceInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceFeedbackUpdateUserRelationInput>;
};

export type ServiceFeedbackUpdateWithoutUserInput = {
  comments?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  service?: InputMaybe<ServiceFeedbackUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ServiceFeedbackWithoutServiceFilter = {
  comments?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ServiceFeedbackWithoutUserFilter = {
  comments?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  rating?: InputMaybe<FloatFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ServiceFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  feedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  imageFileUrl?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderListFilter>;
  price?: InputMaybe<FloatFilter>;
  quiz?: InputMaybe<QuizListFilter>;
  rating?: InputMaybe<FloatFilter>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryListFilter>;
  status?: InputMaybe<ServiceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
  workshopOrganization?: InputMaybe<WorkshopOrganizationListFilter>;
};

export type ServiceListFilter = {
  every?: InputMaybe<ServiceFilter>;
  none?: InputMaybe<ServiceFilter>;
  some?: InputMaybe<ServiceFilter>;
};

export type ServiceOrderBy = {
  adminNote?: InputMaybe<AdminNoteOrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  centerId?: InputMaybe<OrderBy>;
  commission?: InputMaybe<OrderBy>;
  content?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  feedbacks?: InputMaybe<ServiceFeedbackOrderBy>;
  id?: InputMaybe<OrderBy>;
  imageFile?: InputMaybe<UploadedFileOrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  imageFileUrl?: InputMaybe<OrderBy>;
  isActive?: InputMaybe<OrderBy>;
  managedService?: InputMaybe<ManagedServiceOrderBy>;
  name?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderOrderBy>;
  price?: InputMaybe<OrderBy>;
  quiz?: InputMaybe<QuizOrderBy>;
  rating?: InputMaybe<OrderBy>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryOrderBy>;
  status?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
  workshopOrganization?: InputMaybe<WorkshopOrganizationOrderBy>;
};

export enum ServiceSortBy {
  Order = 'order',
  Rating = 'rating'
}

export enum ServiceStatus {
  Approved = 'APPROVED',
  Inactive = 'INACTIVE',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type ServiceStatusFilter = {
  equals?: InputMaybe<ServiceStatus>;
  in?: InputMaybe<Array<ServiceStatus>>;
  not?: InputMaybe<ServiceStatusFilter>;
  notIn?: InputMaybe<Array<ServiceStatus>>;
};

export type ServiceUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceUpdateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateAdminNoteRelationInputCreateMany>;
  delete?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  deleteMany?: InputMaybe<Array<AdminNoteWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  set?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateAdminNoteRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateAdminNoteRelationInputUpdateMany>>;
};

export type ServiceUpdateAdminNoteRelationInputCreateMany = {
  data?: InputMaybe<Array<AdminNoteCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateAdminNoteRelationInputUpdate = {
  data?: InputMaybe<AdminNoteUpdateWithoutServiceInput>;
  where?: InputMaybe<AdminNoteUniqueFilter>;
};

export type ServiceUpdateAdminNoteRelationInputUpdateMany = {
  data?: InputMaybe<AdminNoteUpdateWithoutServiceInput>;
  where?: InputMaybe<AdminNoteWithoutServiceFilter>;
};

export type ServiceUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutServicesInput>;
  update?: InputMaybe<CenterUpdateWithoutServicesInput>;
};

export type ServiceUpdateFeedbacksRelationInput = {
  connect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  create?: InputMaybe<Array<ServiceFeedbackCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateFeedbacksRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceFeedbackWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  set?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateFeedbacksRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateFeedbacksRelationInputUpdateMany>>;
};

export type ServiceUpdateFeedbacksRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceFeedbackCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateFeedbacksRelationInputUpdate = {
  data?: InputMaybe<ServiceFeedbackUpdateWithoutServiceInput>;
  where?: InputMaybe<ServiceFeedbackUniqueFilter>;
};

export type ServiceUpdateFeedbacksRelationInputUpdateMany = {
  data?: InputMaybe<ServiceFeedbackUpdateWithoutServiceInput>;
  where?: InputMaybe<ServiceFeedbackWithoutServiceFilter>;
};

export type ServiceUpdateImageFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutServiceInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UploadedFileUpdateWithoutServiceInput>;
};

export type ServiceUpdateInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateManagedServiceRelationInput = {
  connect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  create?: InputMaybe<Array<ManagedServiceCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateManagedServiceRelationInputCreateMany>;
  delete?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ManagedServiceWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  set?: InputMaybe<Array<ManagedServiceUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateManagedServiceRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateManagedServiceRelationInputUpdateMany>>;
};

export type ServiceUpdateManagedServiceRelationInputCreateMany = {
  data?: InputMaybe<Array<ManagedServiceCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateManagedServiceRelationInputUpdate = {
  data?: InputMaybe<ManagedServiceUpdateWithoutServiceInput>;
  where?: InputMaybe<ManagedServiceUniqueFilter>;
};

export type ServiceUpdateManagedServiceRelationInputUpdateMany = {
  data?: InputMaybe<ManagedServiceUpdateWithoutServiceInput>;
  where?: InputMaybe<ManagedServiceWithoutServiceFilter>;
};

export type ServiceUpdateOrderRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateOrderRelationInputCreateMany>;
  delete?: InputMaybe<Array<OrderUniqueFilter>>;
  deleteMany?: InputMaybe<Array<OrderWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<OrderUniqueFilter>>;
  set?: InputMaybe<Array<OrderUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateOrderRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateOrderRelationInputUpdateMany>>;
};

export type ServiceUpdateOrderRelationInputCreateMany = {
  data?: InputMaybe<Array<OrderCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateOrderRelationInputUpdate = {
  data?: InputMaybe<OrderUpdateWithoutServiceInput>;
  where?: InputMaybe<OrderUniqueFilter>;
};

export type ServiceUpdateOrderRelationInputUpdateMany = {
  data?: InputMaybe<OrderUpdateWithoutServiceInput>;
  where?: InputMaybe<OrderWithoutServiceFilter>;
};

export type ServiceUpdateQuizRelationInput = {
  connect?: InputMaybe<Array<QuizUniqueFilter>>;
  create?: InputMaybe<Array<QuizCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateQuizRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuizUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuizWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<QuizUniqueFilter>>;
  set?: InputMaybe<Array<QuizUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateQuizRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateQuizRelationInputUpdateMany>>;
};

export type ServiceUpdateQuizRelationInputCreateMany = {
  data?: InputMaybe<Array<QuizCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateQuizRelationInputUpdate = {
  data?: InputMaybe<QuizUpdateWithoutServiceInput>;
  where?: InputMaybe<QuizUniqueFilter>;
};

export type ServiceUpdateQuizRelationInputUpdateMany = {
  data?: InputMaybe<QuizUpdateWithoutServiceInput>;
  where?: InputMaybe<QuizWithoutServiceFilter>;
};

export type ServiceUpdateServiceAndCategoryRelationInput = {
  connect?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  create?: InputMaybe<Array<ServiceAndCategoryCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceAndCategoryWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  set?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateServiceAndCategoryRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateServiceAndCategoryRelationInputUpdateMany>>;
};

export type ServiceUpdateServiceAndCategoryRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceAndCategoryCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateServiceAndCategoryRelationInputUpdate = {
  data?: InputMaybe<ServiceAndCategoryUpdateWithoutServiceInput>;
  where?: InputMaybe<ServiceAndCategoryUniqueFilter>;
};

export type ServiceUpdateServiceAndCategoryRelationInputUpdateMany = {
  data?: InputMaybe<ServiceAndCategoryUpdateWithoutServiceInput>;
  where?: InputMaybe<ServiceAndCategoryWithoutServiceFilter>;
};

export type ServiceUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutServiceInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UserUpdateWithoutServiceInput>;
};

export type ServiceUpdateWithoutAdminNoteInput = {
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutCenterInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutFeedbacksInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutImageFileInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutManagedServiceInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutOrderInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutQuizInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutUserInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutWorkshopInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshopOrganization?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInput>;
};

export type ServiceUpdateWithoutWorkshopOrganizationInput = {
  adminNote?: InputMaybe<ServiceUpdateAdminNoteRelationInput>;
  center?: InputMaybe<ServiceUpdateCenterRelationInput>;
  commission?: InputMaybe<Scalars['Float']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  feedbacks?: InputMaybe<ServiceUpdateFeedbacksRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<ServiceUpdateImageFileRelationInput>;
  imageFileUrl?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  managedService?: InputMaybe<ServiceUpdateManagedServiceRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ServiceUpdateOrderRelationInput>;
  price?: InputMaybe<Scalars['Float']['input']>;
  quiz?: InputMaybe<ServiceUpdateQuizRelationInput>;
  rating?: InputMaybe<Scalars['Float']['input']>;
  serviceAndCategory?: InputMaybe<ServiceUpdateServiceAndCategoryRelationInput>;
  status?: InputMaybe<ServiceStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<ServiceUpdateUserRelationInput>;
  workshop?: InputMaybe<ServiceUpdateWorkshopRelationInput>;
};

export type ServiceUpdateWorkshopOrganizationRelationInput = {
  connect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopOrganizationCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateWorkshopOrganizationRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopOrganizationWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateWorkshopOrganizationRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateWorkshopOrganizationRelationInputUpdateMany>>;
};

export type ServiceUpdateWorkshopOrganizationRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopOrganizationCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateWorkshopOrganizationRelationInputUpdate = {
  data?: InputMaybe<WorkshopOrganizationUpdateWithoutServiceInput>;
  where?: InputMaybe<WorkshopOrganizationUniqueFilter>;
};

export type ServiceUpdateWorkshopOrganizationRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopOrganizationUpdateWithoutServiceInput>;
  where?: InputMaybe<WorkshopOrganizationWithoutServiceFilter>;
};

export type ServiceUpdateWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutServiceInput>>;
  createMany?: InputMaybe<ServiceUpdateWorkshopRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopWithoutServiceFilter>>;
  disconnect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopUniqueFilter>>;
  update?: InputMaybe<Array<ServiceUpdateWorkshopRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<ServiceUpdateWorkshopRelationInputUpdateMany>>;
};

export type ServiceUpdateWorkshopRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopCreateWithoutServiceInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceUpdateWorkshopRelationInputUpdate = {
  data?: InputMaybe<WorkshopUpdateWithoutServiceInput>;
  where?: InputMaybe<WorkshopUniqueFilter>;
};

export type ServiceUpdateWorkshopRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopUpdateWithoutServiceInput>;
  where?: InputMaybe<WorkshopWithoutServiceFilter>;
};

export type ServiceWithoutCenterFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  commission?: InputMaybe<FloatFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  feedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  imageFileUrl?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderListFilter>;
  price?: InputMaybe<FloatFilter>;
  quiz?: InputMaybe<QuizListFilter>;
  rating?: InputMaybe<FloatFilter>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryListFilter>;
  status?: InputMaybe<ServiceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
  workshopOrganization?: InputMaybe<WorkshopOrganizationListFilter>;
};

export type ServiceWithoutImageFileFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  feedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  id?: InputMaybe<StringFilter>;
  imageFileUrl?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderListFilter>;
  price?: InputMaybe<FloatFilter>;
  quiz?: InputMaybe<QuizListFilter>;
  rating?: InputMaybe<FloatFilter>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryListFilter>;
  status?: InputMaybe<ServiceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
  workshopOrganization?: InputMaybe<WorkshopOrganizationListFilter>;
};

export type ServiceWithoutUserFilter = {
  adminNote?: InputMaybe<AdminNoteListFilter>;
  center?: InputMaybe<CenterFilter>;
  centerId?: InputMaybe<StringFilter>;
  commission?: InputMaybe<FloatFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  feedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  imageFileUrl?: InputMaybe<StringFilter>;
  isActive?: InputMaybe<BooleanFilter>;
  managedService?: InputMaybe<ManagedServiceListFilter>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderListFilter>;
  price?: InputMaybe<FloatFilter>;
  quiz?: InputMaybe<QuizListFilter>;
  rating?: InputMaybe<FloatFilter>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryListFilter>;
  status?: InputMaybe<ServiceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
  workshopOrganization?: InputMaybe<WorkshopOrganizationListFilter>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<StringFilterMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum StringFilterMode {
  Default = 'Default',
  Insensitive = 'Insensitive'
}

export type StringListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StringListType = {
  __typename?: 'StringListType';
  items?: Maybe<Array<Scalars['String']['output']>>;
};

export type StringType = {
  __typename?: 'StringType';
  value?: Maybe<Scalars['String']['output']>;
};

/** A subcategory of services. */
export type SubCategory = {
  __typename?: 'SubCategory';
  /** The category that the subcategory belongs to. */
  category?: Maybe<Category>;
  /** The ID of the category that the subcategory belongs to. */
  categoryId?: Maybe<Scalars['ID']['output']>;
  /** The description of the subcategory. */
  description?: Maybe<Scalars['String']['output']>;
  /** The unique identifier of the subcategory. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The name of the subcategory. */
  name?: Maybe<Scalars['String']['output']>;
  /** The service and category that the subcategory belongs to. */
  serviceAndCategory?: Maybe<Array<ServiceAndCategory>>;
};

export type SubCategoryCreateCategoryRelationInput = {
  connect?: InputMaybe<CategoryUniqueFilter>;
  create?: InputMaybe<CategoryCreateWithoutSubCategoryInput>;
};

export type SubCategoryCreateInput = {
  category: SubCategoryCreateCategoryRelationInput;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  serviceAndCategory?: InputMaybe<SubCategoryCreateServiceAndCategoryRelationInput>;
};

export type SubCategoryCreateServiceAndCategoryRelationInput = {
  connect?: InputMaybe<Array<ServiceAndCategoryUniqueFilter>>;
  create?: InputMaybe<Array<ServiceAndCategoryCreateWithoutSubCategoryInput>>;
};

export type SubCategoryCreateWithoutCategoryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  serviceAndCategory?: InputMaybe<SubCategoryCreateServiceAndCategoryRelationInput>;
};

export type SubCategoryCreateWithoutServiceAndCategoryInput = {
  category: SubCategoryCreateCategoryRelationInput;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SubCategoryFilter = {
  category?: InputMaybe<CategoryFilter>;
  categoryId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryListFilter>;
};

export type SubCategoryListFilter = {
  every?: InputMaybe<SubCategoryFilter>;
  none?: InputMaybe<SubCategoryFilter>;
  some?: InputMaybe<SubCategoryFilter>;
};

export type SubCategoryOrderBy = {
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  serviceAndCategory?: InputMaybe<ServiceAndCategoryOrderBy>;
};

export type SubCategoryUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SubCategoryUpdateCategoryRelationInput = {
  connect?: InputMaybe<CategoryUniqueFilter>;
  create?: InputMaybe<CategoryCreateWithoutSubCategoryInput>;
  update?: InputMaybe<CategoryUpdateWithoutSubCategoryInput>;
};

export type SubCategoryUpdateWithoutServiceAndCategoryInput = {
  category?: InputMaybe<SubCategoryUpdateCategoryRelationInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Subscribe to collaboration session updates. */
  collaborationSessionUpdated?: Maybe<CollaborationSession>;
  document?: Maybe<DocumentDelta>;
  /** Subscribe to messages sent by users. */
  messageSent?: Maybe<Message>;
  userScopedMessage?: Maybe<Message>;
};


export type SubscriptionCollaborationSessionUpdatedArgs = {
  collaborationSessionId: Scalars['String']['input'];
};


export type SubscriptionDocumentArgs = {
  documentId: Scalars['String']['input'];
};


export type SubscriptionMessageSentArgs = {
  chatRoomId?: InputMaybe<Scalars['String']['input']>;
};

export enum Timeframe {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

/** A file uploaded by a user. */
export type UploadedFile = {
  __typename?: 'UploadedFile';
  /** The original name of the file. */
  actualFileName?: Maybe<Scalars['String']['output']>;
  /** The center that the file belongs to. */
  center?: Maybe<Array<Center>>;
  /** The name of the file in minio. */
  fileName?: Maybe<Scalars['String']['output']>;
  /** The type of the file. */
  fileType?: Maybe<UploadedFileType>;
  /** The URL of the file. */
  fileUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the uploaded file. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The service that the file belongs to. */
  service?: Maybe<Array<Service>>;
  /** The date and time the file was uploaded. */
  uploadedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The user who uploaded the file. */
  user?: Maybe<User>;
  /** The ID of the user who uploaded the file. */
  userId?: Maybe<Scalars['ID']['output']>;
  /** The workshop that the file belongs to. */
  workshop?: Maybe<Array<Workshop>>;
};

export type UploadedFileCreateCenterRelationInput = {
  connect?: InputMaybe<Array<CenterUniqueFilter>>;
  create?: InputMaybe<Array<CenterCreateWithoutLogoFileInput>>;
};

export type UploadedFileCreateDocumentRelationInput = {
  connect?: InputMaybe<Array<DocumentUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCreateWithoutPreviewImageInput>>;
};

export type UploadedFileCreateServiceRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutImageFileInput>>;
};

export type UploadedFileCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UploadedFileCreateWithoutCenterInput = {
  Document?: InputMaybe<UploadedFileCreateDocumentRelationInput>;
  actualFileName: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileCreateServiceRelationInput>;
  type: Scalars['String']['input'];
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UploadedFileCreateUserRelationInput;
  workshop?: InputMaybe<UploadedFileCreateWorkshopRelationInput>;
};

export type UploadedFileCreateWithoutDocumentInput = {
  actualFileName: Scalars['String']['input'];
  center?: InputMaybe<UploadedFileCreateCenterRelationInput>;
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileCreateServiceRelationInput>;
  type: Scalars['String']['input'];
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UploadedFileCreateUserRelationInput;
  workshop?: InputMaybe<UploadedFileCreateWorkshopRelationInput>;
};

export type UploadedFileCreateWithoutServiceInput = {
  Document?: InputMaybe<UploadedFileCreateDocumentRelationInput>;
  actualFileName: Scalars['String']['input'];
  center?: InputMaybe<UploadedFileCreateCenterRelationInput>;
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UploadedFileCreateUserRelationInput;
  workshop?: InputMaybe<UploadedFileCreateWorkshopRelationInput>;
};

export type UploadedFileCreateWithoutUserInput = {
  Document?: InputMaybe<UploadedFileCreateDocumentRelationInput>;
  actualFileName: Scalars['String']['input'];
  center?: InputMaybe<UploadedFileCreateCenterRelationInput>;
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileCreateServiceRelationInput>;
  type: Scalars['String']['input'];
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop?: InputMaybe<UploadedFileCreateWorkshopRelationInput>;
};

export type UploadedFileCreateWithoutWorkshopInput = {
  Document?: InputMaybe<UploadedFileCreateDocumentRelationInput>;
  actualFileName: Scalars['String']['input'];
  center?: InputMaybe<UploadedFileCreateCenterRelationInput>;
  fileName: Scalars['String']['input'];
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileCreateServiceRelationInput>;
  type: Scalars['String']['input'];
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UploadedFileCreateUserRelationInput;
};

export type UploadedFileCreateWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutImageFileInput>>;
};

export type UploadedFileFilter = {
  Document?: InputMaybe<DocumentListFilter>;
  actualFileName?: InputMaybe<StringFilter>;
  center?: InputMaybe<CenterListFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileType?: InputMaybe<UploadedFileTypeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceListFilter>;
  type?: InputMaybe<StringFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
};

export type UploadedFileListFilter = {
  every?: InputMaybe<UploadedFileFilter>;
  none?: InputMaybe<UploadedFileFilter>;
  some?: InputMaybe<UploadedFileFilter>;
};

export type UploadedFileOrderBy = {
  Document?: InputMaybe<DocumentOrderBy>;
  actualFileName?: InputMaybe<OrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  fileUrl?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  type?: InputMaybe<OrderBy>;
  uploadedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
};

export enum UploadedFileType {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Other = 'OTHER'
}

export type UploadedFileTypeFilter = {
  equals?: InputMaybe<UploadedFileType>;
  in?: InputMaybe<Array<UploadedFileType>>;
  not?: InputMaybe<UploadedFileTypeFilter>;
  notIn?: InputMaybe<Array<UploadedFileType>>;
};

export type UploadedFileUniqueFilter = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UploadedFileUpdateCenterRelationInput = {
  connect?: InputMaybe<Array<CenterUniqueFilter>>;
  create?: InputMaybe<Array<CenterCreateWithoutLogoFileInput>>;
  createMany?: InputMaybe<UploadedFileUpdateCenterRelationInputCreateMany>;
  delete?: InputMaybe<Array<CenterUniqueFilter>>;
  deleteMany?: InputMaybe<Array<CenterWithoutLogoFileFilter>>;
  disconnect?: InputMaybe<Array<CenterUniqueFilter>>;
  set?: InputMaybe<Array<CenterUniqueFilter>>;
  update?: InputMaybe<Array<UploadedFileUpdateCenterRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UploadedFileUpdateCenterRelationInputUpdateMany>>;
};

export type UploadedFileUpdateCenterRelationInputCreateMany = {
  data?: InputMaybe<Array<CenterCreateWithoutLogoFileInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadedFileUpdateCenterRelationInputUpdate = {
  data?: InputMaybe<CenterUpdateWithoutLogoFileInput>;
  where?: InputMaybe<CenterUniqueFilter>;
};

export type UploadedFileUpdateCenterRelationInputUpdateMany = {
  data?: InputMaybe<CenterUpdateWithoutLogoFileInput>;
  where?: InputMaybe<CenterWithoutLogoFileFilter>;
};

export type UploadedFileUpdateDocumentRelationInput = {
  connect?: InputMaybe<Array<DocumentUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCreateWithoutPreviewImageInput>>;
  createMany?: InputMaybe<UploadedFileUpdateDocumentRelationInputCreateMany>;
  delete?: InputMaybe<Array<DocumentUniqueFilter>>;
  deleteMany?: InputMaybe<Array<DocumentWithoutPreviewImageFilter>>;
  disconnect?: InputMaybe<Array<DocumentUniqueFilter>>;
  set?: InputMaybe<Array<DocumentUniqueFilter>>;
  update?: InputMaybe<Array<UploadedFileUpdateDocumentRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UploadedFileUpdateDocumentRelationInputUpdateMany>>;
};

export type UploadedFileUpdateDocumentRelationInputCreateMany = {
  data?: InputMaybe<Array<DocumentCreateWithoutPreviewImageInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadedFileUpdateDocumentRelationInputUpdate = {
  data?: InputMaybe<DocumentUpdateWithoutPreviewImageInput>;
  where?: InputMaybe<DocumentUniqueFilter>;
};

export type UploadedFileUpdateDocumentRelationInputUpdateMany = {
  data?: InputMaybe<DocumentUpdateWithoutPreviewImageInput>;
  where?: InputMaybe<DocumentWithoutPreviewImageFilter>;
};

export type UploadedFileUpdateServiceRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutImageFileInput>>;
  createMany?: InputMaybe<UploadedFileUpdateServiceRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceWithoutImageFileFilter>>;
  disconnect?: InputMaybe<Array<ServiceUniqueFilter>>;
  set?: InputMaybe<Array<ServiceUniqueFilter>>;
  update?: InputMaybe<Array<UploadedFileUpdateServiceRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UploadedFileUpdateServiceRelationInputUpdateMany>>;
};

export type UploadedFileUpdateServiceRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceCreateWithoutImageFileInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadedFileUpdateServiceRelationInputUpdate = {
  data?: InputMaybe<ServiceUpdateWithoutImageFileInput>;
  where?: InputMaybe<ServiceUniqueFilter>;
};

export type UploadedFileUpdateServiceRelationInputUpdateMany = {
  data?: InputMaybe<ServiceUpdateWithoutImageFileInput>;
  where?: InputMaybe<ServiceWithoutImageFileFilter>;
};

export type UploadedFileUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateWithoutFilesInput>;
};

export type UploadedFileUpdateWithoutCenterInput = {
  Document?: InputMaybe<UploadedFileUpdateDocumentRelationInput>;
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileUpdateServiceRelationInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UploadedFileUpdateUserRelationInput>;
  workshop?: InputMaybe<UploadedFileUpdateWorkshopRelationInput>;
};

export type UploadedFileUpdateWithoutDocumentInput = {
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<UploadedFileUpdateCenterRelationInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileUpdateServiceRelationInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UploadedFileUpdateUserRelationInput>;
  workshop?: InputMaybe<UploadedFileUpdateWorkshopRelationInput>;
};

export type UploadedFileUpdateWithoutServiceInput = {
  Document?: InputMaybe<UploadedFileUpdateDocumentRelationInput>;
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<UploadedFileUpdateCenterRelationInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UploadedFileUpdateUserRelationInput>;
  workshop?: InputMaybe<UploadedFileUpdateWorkshopRelationInput>;
};

export type UploadedFileUpdateWithoutUserInput = {
  Document?: InputMaybe<UploadedFileUpdateDocumentRelationInput>;
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<UploadedFileUpdateCenterRelationInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileUpdateServiceRelationInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop?: InputMaybe<UploadedFileUpdateWorkshopRelationInput>;
};

export type UploadedFileUpdateWithoutWorkshopInput = {
  Document?: InputMaybe<UploadedFileUpdateDocumentRelationInput>;
  actualFileName?: InputMaybe<Scalars['String']['input']>;
  center?: InputMaybe<UploadedFileUpdateCenterRelationInput>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileType?: InputMaybe<UploadedFileType>;
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  service?: InputMaybe<UploadedFileUpdateServiceRelationInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploadedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UploadedFileUpdateUserRelationInput>;
};

export type UploadedFileUpdateWorkshopRelationInput = {
  connect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopCreateWithoutImageFileInput>>;
  createMany?: InputMaybe<UploadedFileUpdateWorkshopRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopWithoutImageFileFilter>>;
  disconnect?: InputMaybe<Array<WorkshopUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopUniqueFilter>>;
  update?: InputMaybe<Array<UploadedFileUpdateWorkshopRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UploadedFileUpdateWorkshopRelationInputUpdateMany>>;
};

export type UploadedFileUpdateWorkshopRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopCreateWithoutImageFileInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UploadedFileUpdateWorkshopRelationInputUpdate = {
  data?: InputMaybe<WorkshopUpdateWithoutImageFileInput>;
  where?: InputMaybe<WorkshopUniqueFilter>;
};

export type UploadedFileUpdateWorkshopRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopUpdateWithoutImageFileInput>;
  where?: InputMaybe<WorkshopWithoutImageFileFilter>;
};

export type UploadedFileWithoutUserFilter = {
  Document?: InputMaybe<DocumentListFilter>;
  actualFileName?: InputMaybe<StringFilter>;
  center?: InputMaybe<CenterListFilter>;
  fileName?: InputMaybe<StringFilter>;
  fileType?: InputMaybe<UploadedFileTypeFilter>;
  fileUrl?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  service?: InputMaybe<ServiceListFilter>;
  type?: InputMaybe<StringFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  workshop?: InputMaybe<WorkshopListFilter>;
};

/** A user in the system. */
export type User = {
  __typename?: 'User';
  /** The admin note of the user. */
  adminNote?: Maybe<Array<AdminNote>>;
  /** The avatar URL of the user. */
  avatarUrl?: Maybe<Scalars['String']['output']>;
  /** The bank account number of the user. */
  bankAccountNumber?: Maybe<Scalars['String']['output']>;
  /** The bank bin of the user. */
  bankBin?: Maybe<Scalars['String']['output']>;
  /** The banned status of the user. */
  banned?: Maybe<Scalars['Boolean']['output']>;
  /** The center of the user. */
  center?: Maybe<Center>;
  /** The date and time the user was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The customer chat room of the user. */
  customerChatRoom?: Maybe<Array<ChatRoom>>;
  /** The email of the user. */
  email?: Maybe<Scalars['String']['output']>;
  /** The files of the user. */
  files?: Maybe<Array<UploadedFile>>;
  /** The ID of the user. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The mentor of the user. */
  mentor?: Maybe<CenterMentor>;
  /** The mentor chat room of the user. */
  mentorChatRoom?: Maybe<Array<ChatRoom>>;
  /** The name of the user. */
  name?: Maybe<Scalars['String']['output']>;
  /** The orders of the user. */
  orders?: Maybe<Array<Order>>;
  /** The phone number of the user. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** The quiz attempt of the user */
  quizAttempt?: Maybe<Array<QuizAttempt>>;
  /** The received messages of the user. */
  receivedMessages?: Maybe<Array<Message>>;
  /** The resume of the user. */
  resume?: Maybe<Array<Resume>>;
  /** The role of the user. */
  role?: Maybe<Scalars['String']['output']>;
  /** The sent messages of the user. */
  sentMessages?: Maybe<Array<Message>>;
  /** The service of the user. */
  service?: Maybe<Array<Service>>;
  /** The service feedbacks of the user. */
  serviceFeedbacks?: Maybe<Array<ServiceFeedback>>;
  /** The date and time the user was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The workshop subscription of the user. */
  workshopSubscription?: Maybe<Array<WorkshopSubscription>>;
};

export type UserCreateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutNotedByInput>>;
};

export type UserCreateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutCenterOwnerInput>;
};

export type UserCreateCustomerChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutCustomerInput>>;
};

export type UserCreateDocumentCollaboratorRelationInput = {
  connect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCollaboratorCreateWithoutUserInput>>;
};

export type UserCreateDocumentRelationInput = {
  connect?: InputMaybe<Array<DocumentUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCreateWithoutOwnerInput>>;
};

export type UserCreateFilesRelationInput = {
  connect?: InputMaybe<Array<UploadedFileUniqueFilter>>;
  create?: InputMaybe<Array<UploadedFileCreateWithoutUserInput>>;
};

export type UserCreateMeetingRoomCollaboratorRelationInput = {
  connect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutUserInput>>;
};

export type UserCreateMentorChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutMentorInput>>;
};

export type UserCreateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutMentorInput>;
};

export type UserCreateOrdersRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutUserInput>>;
};

export type UserCreatePersonalMilestoneRelationInput = {
  connect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  create?: InputMaybe<Array<PersonalMilestoneCreateWithoutUserInput>>;
};

export type UserCreateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutUserInput>>;
};

export type UserCreateReceivedMessagesRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutRecipientInput>>;
};

export type UserCreateRefundTicketRelationInput = {
  connect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  create?: InputMaybe<Array<RefundTicketCreateWithoutModeratorInput>>;
};

export type UserCreateRequesterRelationInput = {
  connect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  create?: InputMaybe<Array<RefundTicketCreateWithoutRequesterInput>>;
};

export type UserCreateResumeRelationInput = {
  connect?: InputMaybe<Array<ResumeUniqueFilter>>;
  create?: InputMaybe<Array<ResumeCreateWithoutUserInput>>;
};

export type UserCreateScheduleDateRelationInput = {
  connect?: InputMaybe<ScheduleDateUniqueFilter>;
  create?: InputMaybe<ScheduleDateCreateWithoutUserInput>;
};

export type UserCreateSentMessagesRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
};

export type UserCreateServiceFeedbacksRelationInput = {
  connect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  create?: InputMaybe<Array<ServiceFeedbackCreateWithoutUserInput>>;
};

export type UserCreateServiceRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutUserInput>>;
};

export type UserCreateWithoutAdminNoteInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutCenterInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutCustomerChatRoomInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutDocumentCollaboratorInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutDocumentInput = {
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutFilesInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutMeetingRoomCollaboratorInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutMentorChatRoomInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutMentorInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutOrdersInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutPersonalMilestoneInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutQuizAttemptInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutReceivedMessagesInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutRefundTicketInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutRequesterInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutResumeInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutScheduleDateInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutSentMessagesInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutServiceFeedbacksInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutServiceInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserCreateWorkshopSubscriptionRelationInput>;
};

export type UserCreateWithoutWorkshopSubscriptionInput = {
  Document?: InputMaybe<UserCreateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserCreateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserCreateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserCreatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserCreateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserCreateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserCreateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserCreateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserCreateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserCreateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserCreateCustomerChatRoomRelationInput>;
  email: Scalars['String']['input'];
  files?: InputMaybe<UserCreateFilesRelationInput>;
  id: Scalars['String']['input'];
  mentor?: InputMaybe<UserCreateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserCreateMentorChatRoomRelationInput>;
  name: Scalars['String']['input'];
  orders?: InputMaybe<UserCreateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserCreateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserCreateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserCreateSentMessagesRelationInput>;
  service?: InputMaybe<UserCreateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserCreateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserCreateWorkshopSubscriptionRelationInput = {
  connect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutUserInput>>;
};

export type UserFilter = {
  Document?: InputMaybe<DocumentListFilter>;
  DocumentCollaborator?: InputMaybe<DocumentCollaboratorListFilter>;
  MeetingRoomCollaborator?: InputMaybe<MeetingRoomCollaboratorListFilter>;
  PersonalMilestone?: InputMaybe<PersonalMilestoneListFilter>;
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  RefundTicket?: InputMaybe<RefundTicketListFilter>;
  Requester?: InputMaybe<RefundTicketListFilter>;
  ScheduleDate?: InputMaybe<ScheduleDateFilter>;
  adminNote?: InputMaybe<AdminNoteListFilter>;
  avatarUrl?: InputMaybe<StringFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankBin?: InputMaybe<StringFilter>;
  banned?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerChatRoom?: InputMaybe<ChatRoomListFilter>;
  email?: InputMaybe<StringFilter>;
  files?: InputMaybe<UploadedFileListFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorChatRoom?: InputMaybe<ChatRoomListFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  receivedMessages?: InputMaybe<MessageListFilter>;
  resume?: InputMaybe<ResumeListFilter>;
  role?: InputMaybe<RoleFilter>;
  scheduleDateId?: InputMaybe<StringFilter>;
  sentMessages?: InputMaybe<MessageListFilter>;
  service?: InputMaybe<ServiceListFilter>;
  serviceFeedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopSubscription?: InputMaybe<WorkshopSubscriptionListFilter>;
};

export type UserListFilter = {
  every?: InputMaybe<UserFilter>;
  none?: InputMaybe<UserFilter>;
  some?: InputMaybe<UserFilter>;
};

export type UserOrderBy = {
  Document?: InputMaybe<DocumentOrderBy>;
  DocumentCollaborator?: InputMaybe<DocumentCollaboratorOrderBy>;
  MeetingRoomCollaborator?: InputMaybe<MeetingRoomCollaboratorOrderBy>;
  PersonalMilestone?: InputMaybe<PersonalMilestoneOrderBy>;
  QuizAttempt?: InputMaybe<QuizAttemptOrderBy>;
  RefundTicket?: InputMaybe<RefundTicketOrderBy>;
  Requester?: InputMaybe<RefundTicketOrderBy>;
  ScheduleDate?: InputMaybe<ScheduleDateOrderBy>;
  adminNote?: InputMaybe<AdminNoteOrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  bankAccountNumber?: InputMaybe<OrderBy>;
  bankBin?: InputMaybe<OrderBy>;
  banned?: InputMaybe<OrderBy>;
  center?: InputMaybe<CenterOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  customerChatRoom?: InputMaybe<ChatRoomOrderBy>;
  email?: InputMaybe<OrderBy>;
  files?: InputMaybe<UploadedFileOrderBy>;
  id?: InputMaybe<OrderBy>;
  mentor?: InputMaybe<CenterMentorOrderBy>;
  mentorChatRoom?: InputMaybe<ChatRoomOrderBy>;
  name?: InputMaybe<OrderBy>;
  orders?: InputMaybe<OrderOrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  receivedMessages?: InputMaybe<MessageOrderBy>;
  resume?: InputMaybe<ResumeOrderBy>;
  role?: InputMaybe<OrderBy>;
  scheduleDateId?: InputMaybe<OrderBy>;
  sentMessages?: InputMaybe<MessageOrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceFeedbacks?: InputMaybe<ServiceFeedbackOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  workshopSubscription?: InputMaybe<WorkshopSubscriptionOrderBy>;
};

export type UserUniqueFilter = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateAdminNoteRelationInput = {
  connect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  create?: InputMaybe<Array<AdminNoteCreateWithoutNotedByInput>>;
  createMany?: InputMaybe<UserUpdateAdminNoteRelationInputCreateMany>;
  delete?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  deleteMany?: InputMaybe<Array<AdminNoteWithoutNotedByFilter>>;
  disconnect?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  set?: InputMaybe<Array<AdminNoteUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateAdminNoteRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateAdminNoteRelationInputUpdateMany>>;
};

export type UserUpdateAdminNoteRelationInputCreateMany = {
  data?: InputMaybe<Array<AdminNoteCreateWithoutNotedByInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateAdminNoteRelationInputUpdate = {
  data?: InputMaybe<AdminNoteUpdateWithoutNotedByInput>;
  where?: InputMaybe<AdminNoteUniqueFilter>;
};

export type UserUpdateAdminNoteRelationInputUpdateMany = {
  data?: InputMaybe<AdminNoteUpdateWithoutNotedByInput>;
  where?: InputMaybe<AdminNoteWithoutNotedByFilter>;
};

export type UserUpdateCenterRelationInput = {
  connect?: InputMaybe<CenterUniqueFilter>;
  create?: InputMaybe<CenterCreateWithoutCenterOwnerInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterUpdateWithoutCenterOwnerInput>;
};

export type UserUpdateCustomerChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<UserUpdateCustomerChatRoomRelationInputCreateMany>;
  delete?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ChatRoomWithoutCustomerFilter>>;
  disconnect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  set?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateCustomerChatRoomRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateCustomerChatRoomRelationInputUpdateMany>>;
};

export type UserUpdateCustomerChatRoomRelationInputCreateMany = {
  data?: InputMaybe<Array<ChatRoomCreateWithoutCustomerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateCustomerChatRoomRelationInputUpdate = {
  data?: InputMaybe<ChatRoomUpdateWithoutCustomerInput>;
  where?: InputMaybe<ChatRoomUniqueFilter>;
};

export type UserUpdateCustomerChatRoomRelationInputUpdateMany = {
  data?: InputMaybe<ChatRoomUpdateWithoutCustomerInput>;
  where?: InputMaybe<ChatRoomWithoutCustomerFilter>;
};

export type UserUpdateDocumentCollaboratorRelationInput = {
  connect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCollaboratorCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateDocumentCollaboratorRelationInputCreateMany>;
  delete?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  deleteMany?: InputMaybe<Array<DocumentCollaboratorWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  set?: InputMaybe<Array<DocumentCollaboratorUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateDocumentCollaboratorRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateDocumentCollaboratorRelationInputUpdateMany>>;
};

export type UserUpdateDocumentCollaboratorRelationInputCreateMany = {
  data?: InputMaybe<Array<DocumentCollaboratorCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateDocumentCollaboratorRelationInputUpdate = {
  data?: InputMaybe<DocumentCollaboratorUpdateWithoutUserInput>;
  where?: InputMaybe<DocumentCollaboratorUniqueFilter>;
};

export type UserUpdateDocumentCollaboratorRelationInputUpdateMany = {
  data?: InputMaybe<DocumentCollaboratorUpdateWithoutUserInput>;
  where?: InputMaybe<DocumentCollaboratorWithoutUserFilter>;
};

export type UserUpdateDocumentRelationInput = {
  connect?: InputMaybe<Array<DocumentUniqueFilter>>;
  create?: InputMaybe<Array<DocumentCreateWithoutOwnerInput>>;
  createMany?: InputMaybe<UserUpdateDocumentRelationInputCreateMany>;
  delete?: InputMaybe<Array<DocumentUniqueFilter>>;
  deleteMany?: InputMaybe<Array<DocumentWithoutOwnerFilter>>;
  disconnect?: InputMaybe<Array<DocumentUniqueFilter>>;
  set?: InputMaybe<Array<DocumentUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateDocumentRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateDocumentRelationInputUpdateMany>>;
};

export type UserUpdateDocumentRelationInputCreateMany = {
  data?: InputMaybe<Array<DocumentCreateWithoutOwnerInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateDocumentRelationInputUpdate = {
  data?: InputMaybe<DocumentUpdateWithoutOwnerInput>;
  where?: InputMaybe<DocumentUniqueFilter>;
};

export type UserUpdateDocumentRelationInputUpdateMany = {
  data?: InputMaybe<DocumentUpdateWithoutOwnerInput>;
  where?: InputMaybe<DocumentWithoutOwnerFilter>;
};

export type UserUpdateFilesRelationInput = {
  connect?: InputMaybe<Array<UploadedFileUniqueFilter>>;
  create?: InputMaybe<Array<UploadedFileCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateFilesRelationInputCreateMany>;
  delete?: InputMaybe<Array<UploadedFileUniqueFilter>>;
  deleteMany?: InputMaybe<Array<UploadedFileWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<UploadedFileUniqueFilter>>;
  set?: InputMaybe<Array<UploadedFileUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateFilesRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateFilesRelationInputUpdateMany>>;
};

export type UserUpdateFilesRelationInputCreateMany = {
  data?: InputMaybe<Array<UploadedFileCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateFilesRelationInputUpdate = {
  data?: InputMaybe<UploadedFileUpdateWithoutUserInput>;
  where?: InputMaybe<UploadedFileUniqueFilter>;
};

export type UserUpdateFilesRelationInputUpdateMany = {
  data?: InputMaybe<UploadedFileUpdateWithoutUserInput>;
  where?: InputMaybe<UploadedFileWithoutUserFilter>;
};

export type UserUpdateInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateMeetingRoomCollaboratorRelationInput = {
  connect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  create?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInputCreateMany>;
  delete?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  deleteMany?: InputMaybe<Array<MeetingRoomCollaboratorWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  set?: InputMaybe<Array<MeetingRoomCollaboratorUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateMeetingRoomCollaboratorRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateMeetingRoomCollaboratorRelationInputUpdateMany>>;
};

export type UserUpdateMeetingRoomCollaboratorRelationInputCreateMany = {
  data?: InputMaybe<Array<MeetingRoomCollaboratorCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateMeetingRoomCollaboratorRelationInputUpdate = {
  data?: InputMaybe<MeetingRoomCollaboratorUpdateWithoutUserInput>;
  where?: InputMaybe<MeetingRoomCollaboratorUniqueFilter>;
};

export type UserUpdateMeetingRoomCollaboratorRelationInputUpdateMany = {
  data?: InputMaybe<MeetingRoomCollaboratorUpdateWithoutUserInput>;
  where?: InputMaybe<MeetingRoomCollaboratorWithoutUserFilter>;
};

export type UserUpdateMentorChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutMentorInput>>;
  createMany?: InputMaybe<UserUpdateMentorChatRoomRelationInputCreateMany>;
  delete?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ChatRoomWithoutMentorFilter>>;
  disconnect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  set?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateMentorChatRoomRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateMentorChatRoomRelationInputUpdateMany>>;
};

export type UserUpdateMentorChatRoomRelationInputCreateMany = {
  data?: InputMaybe<Array<ChatRoomCreateWithoutMentorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateMentorChatRoomRelationInputUpdate = {
  data?: InputMaybe<ChatRoomUpdateWithoutMentorInput>;
  where?: InputMaybe<ChatRoomUniqueFilter>;
};

export type UserUpdateMentorChatRoomRelationInputUpdateMany = {
  data?: InputMaybe<ChatRoomUpdateWithoutMentorInput>;
  where?: InputMaybe<ChatRoomWithoutMentorFilter>;
};

export type UserUpdateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutMentorInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<CenterMentorUpdateWithoutMentorInput>;
};

export type UserUpdateOrdersRelationInput = {
  connect?: InputMaybe<Array<OrderUniqueFilter>>;
  create?: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateOrdersRelationInputCreateMany>;
  delete?: InputMaybe<Array<OrderUniqueFilter>>;
  deleteMany?: InputMaybe<Array<OrderWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<OrderUniqueFilter>>;
  set?: InputMaybe<Array<OrderUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateOrdersRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateOrdersRelationInputUpdateMany>>;
};

export type UserUpdateOrdersRelationInputCreateMany = {
  data?: InputMaybe<Array<OrderCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateOrdersRelationInputUpdate = {
  data?: InputMaybe<OrderUpdateWithoutUserInput>;
  where?: InputMaybe<OrderUniqueFilter>;
};

export type UserUpdateOrdersRelationInputUpdateMany = {
  data?: InputMaybe<OrderUpdateWithoutUserInput>;
  where?: InputMaybe<OrderWithoutUserFilter>;
};

export type UserUpdatePersonalMilestoneRelationInput = {
  connect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  create?: InputMaybe<Array<PersonalMilestoneCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdatePersonalMilestoneRelationInputCreateMany>;
  delete?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  deleteMany?: InputMaybe<Array<PersonalMilestoneWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  set?: InputMaybe<Array<PersonalMilestoneUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdatePersonalMilestoneRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdatePersonalMilestoneRelationInputUpdateMany>>;
};

export type UserUpdatePersonalMilestoneRelationInputCreateMany = {
  data?: InputMaybe<Array<PersonalMilestoneCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdatePersonalMilestoneRelationInputUpdate = {
  data?: InputMaybe<PersonalMilestoneUpdateWithoutUserInput>;
  where?: InputMaybe<PersonalMilestoneUniqueFilter>;
};

export type UserUpdatePersonalMilestoneRelationInputUpdateMany = {
  data?: InputMaybe<PersonalMilestoneUpdateWithoutUserInput>;
  where?: InputMaybe<PersonalMilestoneWithoutUserFilter>;
};

export type UserUpdateQuizAttemptRelationInput = {
  connect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  create?: InputMaybe<Array<QuizAttemptCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateQuizAttemptRelationInputCreateMany>;
  delete?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  deleteMany?: InputMaybe<Array<QuizAttemptWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  set?: InputMaybe<Array<QuizAttemptUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateQuizAttemptRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateQuizAttemptRelationInputUpdateMany>>;
};

export type UserUpdateQuizAttemptRelationInputCreateMany = {
  data?: InputMaybe<Array<QuizAttemptCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateQuizAttemptRelationInputUpdate = {
  data?: InputMaybe<QuizAttemptUpdateWithoutUserInput>;
  where?: InputMaybe<QuizAttemptUniqueFilter>;
};

export type UserUpdateQuizAttemptRelationInputUpdateMany = {
  data?: InputMaybe<QuizAttemptUpdateWithoutUserInput>;
  where?: InputMaybe<QuizAttemptWithoutUserFilter>;
};

export type UserUpdateReceivedMessagesRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutRecipientInput>>;
  createMany?: InputMaybe<UserUpdateReceivedMessagesRelationInputCreateMany>;
  delete?: InputMaybe<Array<MessageUniqueFilter>>;
  deleteMany?: InputMaybe<Array<MessageWithoutRecipientFilter>>;
  disconnect?: InputMaybe<Array<MessageUniqueFilter>>;
  set?: InputMaybe<Array<MessageUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateReceivedMessagesRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateReceivedMessagesRelationInputUpdateMany>>;
};

export type UserUpdateReceivedMessagesRelationInputCreateMany = {
  data?: InputMaybe<Array<MessageCreateWithoutRecipientInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateReceivedMessagesRelationInputUpdate = {
  data?: InputMaybe<MessageUpdateWithoutRecipientInput>;
  where?: InputMaybe<MessageUniqueFilter>;
};

export type UserUpdateReceivedMessagesRelationInputUpdateMany = {
  data?: InputMaybe<MessageUpdateWithoutRecipientInput>;
  where?: InputMaybe<MessageWithoutRecipientFilter>;
};

export type UserUpdateRefundTicketRelationInput = {
  connect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  create?: InputMaybe<Array<RefundTicketCreateWithoutModeratorInput>>;
  createMany?: InputMaybe<UserUpdateRefundTicketRelationInputCreateMany>;
  delete?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  deleteMany?: InputMaybe<Array<RefundTicketWithoutModeratorFilter>>;
  disconnect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  set?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateRefundTicketRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateRefundTicketRelationInputUpdateMany>>;
};

export type UserUpdateRefundTicketRelationInputCreateMany = {
  data?: InputMaybe<Array<RefundTicketCreateWithoutModeratorInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateRefundTicketRelationInputUpdate = {
  data?: InputMaybe<RefundTicketUpdateWithoutModeratorInput>;
  where?: InputMaybe<RefundTicketUniqueFilter>;
};

export type UserUpdateRefundTicketRelationInputUpdateMany = {
  data?: InputMaybe<RefundTicketUpdateWithoutModeratorInput>;
  where?: InputMaybe<RefundTicketWithoutModeratorFilter>;
};

export type UserUpdateRequesterRelationInput = {
  connect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  create?: InputMaybe<Array<RefundTicketCreateWithoutRequesterInput>>;
  createMany?: InputMaybe<UserUpdateRequesterRelationInputCreateMany>;
  delete?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  deleteMany?: InputMaybe<Array<RefundTicketWithoutRequesterFilter>>;
  disconnect?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  set?: InputMaybe<Array<RefundTicketUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateRequesterRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateRequesterRelationInputUpdateMany>>;
};

export type UserUpdateRequesterRelationInputCreateMany = {
  data?: InputMaybe<Array<RefundTicketCreateWithoutRequesterInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateRequesterRelationInputUpdate = {
  data?: InputMaybe<RefundTicketUpdateWithoutRequesterInput>;
  where?: InputMaybe<RefundTicketUniqueFilter>;
};

export type UserUpdateRequesterRelationInputUpdateMany = {
  data?: InputMaybe<RefundTicketUpdateWithoutRequesterInput>;
  where?: InputMaybe<RefundTicketWithoutRequesterFilter>;
};

export type UserUpdateResumeRelationInput = {
  connect?: InputMaybe<Array<ResumeUniqueFilter>>;
  create?: InputMaybe<Array<ResumeCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateResumeRelationInputCreateMany>;
  delete?: InputMaybe<Array<ResumeUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ResumeWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<ResumeUniqueFilter>>;
  set?: InputMaybe<Array<ResumeUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateResumeRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateResumeRelationInputUpdateMany>>;
};

export type UserUpdateResumeRelationInputCreateMany = {
  data?: InputMaybe<Array<ResumeCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateResumeRelationInputUpdate = {
  data?: InputMaybe<ResumeUpdateWithoutUserInput>;
  where?: InputMaybe<ResumeUniqueFilter>;
};

export type UserUpdateResumeRelationInputUpdateMany = {
  data?: InputMaybe<ResumeUpdateWithoutUserInput>;
  where?: InputMaybe<ResumeWithoutUserFilter>;
};

export type UserUpdateScheduleDateRelationInput = {
  connect?: InputMaybe<ScheduleDateUniqueFilter>;
  create?: InputMaybe<ScheduleDateCreateWithoutUserInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<ScheduleDateUpdateWithoutUserInput>;
};

export type UserUpdateSentMessagesRelationInput = {
  connect?: InputMaybe<Array<MessageUniqueFilter>>;
  create?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  createMany?: InputMaybe<UserUpdateSentMessagesRelationInputCreateMany>;
  delete?: InputMaybe<Array<MessageUniqueFilter>>;
  deleteMany?: InputMaybe<Array<MessageWithoutSenderFilter>>;
  disconnect?: InputMaybe<Array<MessageUniqueFilter>>;
  set?: InputMaybe<Array<MessageUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateSentMessagesRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateSentMessagesRelationInputUpdateMany>>;
};

export type UserUpdateSentMessagesRelationInputCreateMany = {
  data?: InputMaybe<Array<MessageCreateWithoutSenderInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateSentMessagesRelationInputUpdate = {
  data?: InputMaybe<MessageUpdateWithoutSenderInput>;
  where?: InputMaybe<MessageUniqueFilter>;
};

export type UserUpdateSentMessagesRelationInputUpdateMany = {
  data?: InputMaybe<MessageUpdateWithoutSenderInput>;
  where?: InputMaybe<MessageWithoutSenderFilter>;
};

export type UserUpdateServiceFeedbacksRelationInput = {
  connect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  create?: InputMaybe<Array<ServiceFeedbackCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateServiceFeedbacksRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceFeedbackWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  set?: InputMaybe<Array<ServiceFeedbackUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateServiceFeedbacksRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateServiceFeedbacksRelationInputUpdateMany>>;
};

export type UserUpdateServiceFeedbacksRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceFeedbackCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateServiceFeedbacksRelationInputUpdate = {
  data?: InputMaybe<ServiceFeedbackUpdateWithoutUserInput>;
  where?: InputMaybe<ServiceFeedbackUniqueFilter>;
};

export type UserUpdateServiceFeedbacksRelationInputUpdateMany = {
  data?: InputMaybe<ServiceFeedbackUpdateWithoutUserInput>;
  where?: InputMaybe<ServiceFeedbackWithoutUserFilter>;
};

export type UserUpdateServiceRelationInput = {
  connect?: InputMaybe<Array<ServiceUniqueFilter>>;
  create?: InputMaybe<Array<ServiceCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateServiceRelationInputCreateMany>;
  delete?: InputMaybe<Array<ServiceUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ServiceWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<ServiceUniqueFilter>>;
  set?: InputMaybe<Array<ServiceUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateServiceRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateServiceRelationInputUpdateMany>>;
};

export type UserUpdateServiceRelationInputCreateMany = {
  data?: InputMaybe<Array<ServiceCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateServiceRelationInputUpdate = {
  data?: InputMaybe<ServiceUpdateWithoutUserInput>;
  where?: InputMaybe<ServiceUniqueFilter>;
};

export type UserUpdateServiceRelationInputUpdateMany = {
  data?: InputMaybe<ServiceUpdateWithoutUserInput>;
  where?: InputMaybe<ServiceWithoutUserFilter>;
};

export type UserUpdateWithoutAdminNoteInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutCenterInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutCustomerChatRoomInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutDocumentCollaboratorInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutDocumentInput = {
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutFilesInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutIdWithoutAdminNoteWithoutCenterWithoutCustomerChatRoomWithoutAvatarUrlWithoutEmailWithoutNameWithoutPhoneNumberWithoutRoleWithoutCreatedAtWithoutUpdatedAtWithoutFilesWithoutOrdersWithoutSendingMessageWithoutMentorWithoutMentorChatRoomWithoutResumeWithoutServiceWithoutServiceFeedbacksWithoutWorkshopSubscriptionInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
};

export type UserUpdateWithoutMeetingRoomCollaboratorInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutMentorChatRoomInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutMentorInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutOrdersInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutPersonalMilestoneInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutQuizAttemptInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutReceivedMessagesInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutRefundTicketInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutRequesterInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutResumeInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutScheduleDateInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutSentMessagesInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutServiceFeedbacksInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutServiceInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopSubscription?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInput>;
};

export type UserUpdateWithoutWorkshopSubscriptionInput = {
  Document?: InputMaybe<UserUpdateDocumentRelationInput>;
  DocumentCollaborator?: InputMaybe<UserUpdateDocumentCollaboratorRelationInput>;
  MeetingRoomCollaborator?: InputMaybe<UserUpdateMeetingRoomCollaboratorRelationInput>;
  PersonalMilestone?: InputMaybe<UserUpdatePersonalMilestoneRelationInput>;
  QuizAttempt?: InputMaybe<UserUpdateQuizAttemptRelationInput>;
  RefundTicket?: InputMaybe<UserUpdateRefundTicketRelationInput>;
  Requester?: InputMaybe<UserUpdateRequesterRelationInput>;
  ScheduleDate?: InputMaybe<UserUpdateScheduleDateRelationInput>;
  adminNote?: InputMaybe<UserUpdateAdminNoteRelationInput>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['String']['input']>;
  bankBin?: InputMaybe<Scalars['String']['input']>;
  banned?: InputMaybe<Scalars['Boolean']['input']>;
  center?: InputMaybe<UserUpdateCenterRelationInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  customerChatRoom?: InputMaybe<UserUpdateCustomerChatRoomRelationInput>;
  email?: InputMaybe<Scalars['String']['input']>;
  files?: InputMaybe<UserUpdateFilesRelationInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<UserUpdateMentorRelationInput>;
  mentorChatRoom?: InputMaybe<UserUpdateMentorChatRoomRelationInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders?: InputMaybe<UserUpdateOrdersRelationInput>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  receivedMessages?: InputMaybe<UserUpdateReceivedMessagesRelationInput>;
  resume?: InputMaybe<UserUpdateResumeRelationInput>;
  role?: InputMaybe<Role>;
  sentMessages?: InputMaybe<UserUpdateSentMessagesRelationInput>;
  service?: InputMaybe<UserUpdateServiceRelationInput>;
  serviceFeedbacks?: InputMaybe<UserUpdateServiceFeedbacksRelationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserUpdateWorkshopSubscriptionRelationInput = {
  connect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserUpdateWorkshopSubscriptionRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopSubscriptionWithoutUserFilter>>;
  disconnect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  update?: InputMaybe<Array<UserUpdateWorkshopSubscriptionRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<UserUpdateWorkshopSubscriptionRelationInputUpdateMany>>;
};

export type UserUpdateWorkshopSubscriptionRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutUserInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateWorkshopSubscriptionRelationInputUpdate = {
  data?: InputMaybe<WorkshopSubscriptionUpdateWithoutUserInput>;
  where?: InputMaybe<WorkshopSubscriptionUniqueFilter>;
};

export type UserUpdateWorkshopSubscriptionRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopSubscriptionUpdateWithoutUserInput>;
  where?: InputMaybe<WorkshopSubscriptionWithoutUserFilter>;
};

export type UserWithoutScheduleDateFilter = {
  Document?: InputMaybe<DocumentListFilter>;
  DocumentCollaborator?: InputMaybe<DocumentCollaboratorListFilter>;
  MeetingRoomCollaborator?: InputMaybe<MeetingRoomCollaboratorListFilter>;
  PersonalMilestone?: InputMaybe<PersonalMilestoneListFilter>;
  QuizAttempt?: InputMaybe<QuizAttemptListFilter>;
  RefundTicket?: InputMaybe<RefundTicketListFilter>;
  Requester?: InputMaybe<RefundTicketListFilter>;
  adminNote?: InputMaybe<AdminNoteListFilter>;
  avatarUrl?: InputMaybe<StringFilter>;
  bankAccountNumber?: InputMaybe<StringFilter>;
  bankBin?: InputMaybe<StringFilter>;
  banned?: InputMaybe<BooleanFilter>;
  center?: InputMaybe<CenterFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerChatRoom?: InputMaybe<ChatRoomListFilter>;
  email?: InputMaybe<StringFilter>;
  files?: InputMaybe<UploadedFileListFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorChatRoom?: InputMaybe<ChatRoomListFilter>;
  name?: InputMaybe<StringFilter>;
  orders?: InputMaybe<OrderListFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  receivedMessages?: InputMaybe<MessageListFilter>;
  resume?: InputMaybe<ResumeListFilter>;
  role?: InputMaybe<RoleFilter>;
  sentMessages?: InputMaybe<MessageListFilter>;
  service?: InputMaybe<ServiceListFilter>;
  serviceFeedbacks?: InputMaybe<ServiceFeedbackListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopSubscription?: InputMaybe<WorkshopSubscriptionListFilter>;
};

/** A workshop in the system. */
export type Workshop = {
  __typename?: 'Workshop';
  /** The number of participants actually attending the workshop. */
  actualParticipants?: Maybe<Scalars['Int']['output']>;
  /** The date and time the workshop was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time the workshop is scheduled. */
  date?: Maybe<Scalars['DateTime']['output']>;
  /** The description of the workshop. */
  description?: Maybe<Scalars['String']['output']>;
  /** The duration of the workshop in minutes. */
  duration?: Maybe<Scalars['Int']['output']>;
  /** The expected number of participants for the workshop. */
  expectedParticipants?: Maybe<Scalars['Int']['output']>;
  /** The ID of the workshop. */
  id?: Maybe<Scalars['ID']['output']>;
  imageFile?: Maybe<UploadedFile>;
  /** The ID of the image file for the workshop. */
  imageFileId?: Maybe<Scalars['ID']['output']>;
  /** The meeting room that the workshop is for. */
  meetingRoom?: Maybe<WorkshopMeetingRoom>;
  /** The mentor who is leading the workshop. */
  mentor?: Maybe<CenterMentor>;
  /** The ID of the mentor who is leading the workshop. */
  mentorId?: Maybe<Scalars['ID']['output']>;
  /** The minimum number of participants for the workshop. */
  minParticipants?: Maybe<Scalars['Int']['output']>;
  /** The organization that the workshop is for. */
  organization?: Maybe<Array<WorkshopOrganization>>;
  /** The number of participants registered for the workshop. */
  registeredParticipants?: Maybe<Scalars['Int']['output']>;
  /** The service that the workshop is for. */
  service?: Maybe<Service>;
  /** The ID of the service that the workshop is for. */
  serviceId?: Maybe<Scalars['ID']['output']>;
  /** The subscription that the workshop is for. */
  subscription?: Maybe<Array<WorkshopSubscription>>;
  /** The title of the workshop. */
  title?: Maybe<Scalars['String']['output']>;
  /** The date and time the workshop was updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type WorkshopCreateChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutWorkshopInput>>;
};

export type WorkshopCreateImageFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutWorkshopInput>;
};

export type WorkshopCreateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutCreatedWorkshopInput>;
};

export type WorkshopCreateOrganizationRelationInput = {
  connect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopOrganizationCreateWithoutWorkshopInput>>;
};

export type WorkshopCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutWorkshopInput>;
};

export type WorkshopCreateSubscriptionRelationInput = {
  connect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutWorkshopInput>>;
};

export type WorkshopCreateWithoutChatRoomInput = {
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutImageFileInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutMentorInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutOrganizationInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutServiceInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutSubscriptionInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopCreateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopCreateWithoutWorkshopMeetingRoomInput = {
  ChatRoom?: InputMaybe<WorkshopCreateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopCreateImageFileRelationInput>;
  mentor: WorkshopCreateMentorRelationInput;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopCreateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service: WorkshopCreateServiceRelationInput;
  subscription?: InputMaybe<WorkshopCreateSubscriptionRelationInput>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type WorkshopCreateWorkshopMeetingRoomRelationInput = {
  connect?: InputMaybe<WorkshopMeetingRoomUniqueFilter>;
  create?: InputMaybe<WorkshopMeetingRoomCreateWithoutWorkshopInput>;
};

export type WorkshopFilter = {
  ChatRoom?: InputMaybe<ChatRoomListFilter>;
  actualParticipants?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  expectedParticipants?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  minParticipants?: InputMaybe<IntFilter>;
  organization?: InputMaybe<WorkshopOrganizationListFilter>;
  registeredParticipants?: InputMaybe<IntFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<WorkshopSubscriptionListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopMeetingRoom?: InputMaybe<WorkshopMeetingRoomFilter>;
};

export type WorkshopListFilter = {
  every?: InputMaybe<WorkshopFilter>;
  none?: InputMaybe<WorkshopFilter>;
  some?: InputMaybe<WorkshopFilter>;
};

export type WorkshopMeetingRoom = {
  __typename?: 'WorkshopMeetingRoom';
  /** The ID of the workshop meeting room. */
  id?: Maybe<Scalars['ID']['output']>;
  /** The workshop that the meeting room is for. */
  workshop?: Maybe<Workshop>;
  /** The ID of the workshop that the meeting room is for. */
  workshopId?: Maybe<Scalars['ID']['output']>;
};

export type WorkshopMeetingRoomCreateWithoutWorkshopInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopMeetingRoomFilter = {
  id?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type WorkshopMeetingRoomJoinInfo = {
  __typename?: 'WorkshopMeetingRoomJoinInfo';
  /** The ID of the chat room. */
  chatRoomId?: Maybe<Scalars['String']['output']>;
  /** The ID of the workshop meeting room. */
  id?: Maybe<Scalars['String']['output']>;
  /** The URL of the server. */
  serverUrl?: Maybe<Scalars['String']['output']>;
  /** The token to join the workshop meeting room. */
  token?: Maybe<Scalars['String']['output']>;
};

export type WorkshopMeetingRoomOrderBy = {
  id?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
  workshopId?: InputMaybe<OrderBy>;
};

export type WorkshopMeetingRoomUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
  workshopId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopMeetingRoomUpdateWithoutWorkshopInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopOrderBy = {
  ChatRoom?: InputMaybe<ChatRoomOrderBy>;
  actualParticipants?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  duration?: InputMaybe<OrderBy>;
  expectedParticipants?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  imageFile?: InputMaybe<UploadedFileOrderBy>;
  imageFileId?: InputMaybe<OrderBy>;
  mentor?: InputMaybe<CenterMentorOrderBy>;
  mentorId?: InputMaybe<OrderBy>;
  minParticipants?: InputMaybe<OrderBy>;
  organization?: InputMaybe<WorkshopOrganizationOrderBy>;
  registeredParticipants?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  subscription?: InputMaybe<WorkshopSubscriptionOrderBy>;
  title?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  workshopMeetingRoom?: InputMaybe<WorkshopMeetingRoomOrderBy>;
};

export type WorkshopOrganization = {
  __typename?: 'WorkshopOrganization';
  /** The date and time the workshop organization was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** The service that the organization is for. */
  service?: Maybe<Service>;
  /** The ID of the service that the organization is for. */
  serviceId?: Maybe<Scalars['ID']['output']>;
  /** The workshop that the organization is for. */
  workshop?: Maybe<Workshop>;
  /** The ID of the workshop that the organization is for. */
  workshopId?: Maybe<Scalars['ID']['output']>;
};

export type WorkshopOrganizationCreateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutWorkshopOrganizationInput>;
};

export type WorkshopOrganizationCreateWithoutServiceInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop: WorkshopOrganizationCreateWorkshopRelationInput;
};

export type WorkshopOrganizationCreateWithoutWorkshopInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  service: WorkshopOrganizationCreateServiceRelationInput;
};

export type WorkshopOrganizationCreateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutOrganizationInput>;
};

export type WorkshopOrganizationFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type WorkshopOrganizationListFilter = {
  every?: InputMaybe<WorkshopOrganizationFilter>;
  none?: InputMaybe<WorkshopOrganizationFilter>;
  some?: InputMaybe<WorkshopOrganizationFilter>;
};

export type WorkshopOrganizationOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  service?: InputMaybe<ServiceOrderBy>;
  serviceId?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
  workshopId?: InputMaybe<OrderBy>;
};

export type WorkshopOrganizationUniqueFilter = {
  serviceId?: InputMaybe<Scalars['String']['input']>;
  workshopId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopOrganizationUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutWorkshopOrganizationInput>;
  update?: InputMaybe<ServiceUpdateWithoutWorkshopOrganizationInput>;
};

export type WorkshopOrganizationUpdateWithoutServiceInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshop?: InputMaybe<WorkshopOrganizationUpdateWorkshopRelationInput>;
};

export type WorkshopOrganizationUpdateWithoutWorkshopInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  service?: InputMaybe<WorkshopOrganizationUpdateServiceRelationInput>;
};

export type WorkshopOrganizationUpdateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutOrganizationInput>;
  update?: InputMaybe<WorkshopUpdateWithoutOrganizationInput>;
};

export type WorkshopOrganizationWithoutServiceFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type WorkshopOrganizationWithoutWorkshopFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
};

/** A workshop subscription in the system. */
export type WorkshopSubscription = {
  __typename?: 'WorkshopSubscription';
  /** The date and time the workshop subscription was created. */
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  /** Whether the user has been notified about the workshop. */
  notified?: Maybe<Scalars['Boolean']['output']>;
  /** The user who subscribed to the workshop. */
  user?: Maybe<User>;
  /** The ID of the user who subscribed to the workshop. */
  userId?: Maybe<Scalars['ID']['output']>;
  /** The workshop that the user subscribed to. */
  workshop?: Maybe<Workshop>;
  /** The ID of the workshop that the user subscribed to. */
  workshopId?: Maybe<Scalars['ID']['output']>;
};

export type WorkshopSubscriptionCreateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutWorkshopSubscriptionInput>;
};

export type WorkshopSubscriptionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  notified?: InputMaybe<Scalars['Boolean']['input']>;
  workshop: WorkshopSubscriptionCreateWorkshopRelationInput;
};

export type WorkshopSubscriptionCreateWithoutWorkshopInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  notified?: InputMaybe<Scalars['Boolean']['input']>;
  user: WorkshopSubscriptionCreateUserRelationInput;
};

export type WorkshopSubscriptionCreateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutSubscriptionInput>;
};

export type WorkshopSubscriptionFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  notified?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type WorkshopSubscriptionListFilter = {
  every?: InputMaybe<WorkshopSubscriptionFilter>;
  none?: InputMaybe<WorkshopSubscriptionFilter>;
  some?: InputMaybe<WorkshopSubscriptionFilter>;
};

export type WorkshopSubscriptionOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  notified?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
  workshop?: InputMaybe<WorkshopOrderBy>;
  workshopId?: InputMaybe<OrderBy>;
};

export type WorkshopSubscriptionUniqueFilter = {
  userId?: InputMaybe<Scalars['String']['input']>;
  workshopId?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopSubscriptionUpdateUserRelationInput = {
  connect?: InputMaybe<UserUniqueFilter>;
  create?: InputMaybe<UserCreateWithoutWorkshopSubscriptionInput>;
  update?: InputMaybe<UserUpdateWithoutWorkshopSubscriptionInput>;
};

export type WorkshopSubscriptionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  notified?: InputMaybe<Scalars['Boolean']['input']>;
  workshop?: InputMaybe<WorkshopSubscriptionUpdateWorkshopRelationInput>;
};

export type WorkshopSubscriptionUpdateWithoutWorkshopInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  notified?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<WorkshopSubscriptionUpdateUserRelationInput>;
};

export type WorkshopSubscriptionUpdateWorkshopRelationInput = {
  connect?: InputMaybe<WorkshopUniqueFilter>;
  create?: InputMaybe<WorkshopCreateWithoutSubscriptionInput>;
  update?: InputMaybe<WorkshopUpdateWithoutSubscriptionInput>;
};

export type WorkshopSubscriptionWithoutUserFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  notified?: InputMaybe<BooleanFilter>;
  workshop?: InputMaybe<WorkshopFilter>;
  workshopId?: InputMaybe<StringFilter>;
};

export type WorkshopSubscriptionWithoutWorkshopFilter = {
  createdAt?: InputMaybe<DateTimeFilter>;
  notified?: InputMaybe<BooleanFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type WorkshopUniqueFilter = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type WorkshopUpdateChatRoomRelationInput = {
  connect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  create?: InputMaybe<Array<ChatRoomCreateWithoutWorkshopInput>>;
  createMany?: InputMaybe<WorkshopUpdateChatRoomRelationInputCreateMany>;
  delete?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  deleteMany?: InputMaybe<Array<ChatRoomWithoutWorkshopFilter>>;
  disconnect?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  set?: InputMaybe<Array<ChatRoomUniqueFilter>>;
  update?: InputMaybe<Array<WorkshopUpdateChatRoomRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<WorkshopUpdateChatRoomRelationInputUpdateMany>>;
};

export type WorkshopUpdateChatRoomRelationInputCreateMany = {
  data?: InputMaybe<Array<ChatRoomCreateWithoutWorkshopInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkshopUpdateChatRoomRelationInputUpdate = {
  data?: InputMaybe<ChatRoomUpdateWithoutWorkshopInput>;
  where?: InputMaybe<ChatRoomUniqueFilter>;
};

export type WorkshopUpdateChatRoomRelationInputUpdateMany = {
  data?: InputMaybe<ChatRoomUpdateWithoutWorkshopInput>;
  where?: InputMaybe<ChatRoomWithoutWorkshopFilter>;
};

export type WorkshopUpdateImageFileRelationInput = {
  connect?: InputMaybe<UploadedFileUniqueFilter>;
  create?: InputMaybe<UploadedFileCreateWithoutWorkshopInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<UploadedFileUpdateWithoutWorkshopInput>;
};

export type WorkshopUpdateInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateMentorRelationInput = {
  connect?: InputMaybe<CenterMentorUniqueFilter>;
  create?: InputMaybe<CenterMentorCreateWithoutCreatedWorkshopInput>;
  update?: InputMaybe<CenterMentorUpdateWithoutCreatedWorkshopInput>;
};

export type WorkshopUpdateOrganizationRelationInput = {
  connect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopOrganizationCreateWithoutWorkshopInput>>;
  createMany?: InputMaybe<WorkshopUpdateOrganizationRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopOrganizationWithoutWorkshopFilter>>;
  disconnect?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopOrganizationUniqueFilter>>;
  update?: InputMaybe<Array<WorkshopUpdateOrganizationRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<WorkshopUpdateOrganizationRelationInputUpdateMany>>;
};

export type WorkshopUpdateOrganizationRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopOrganizationCreateWithoutWorkshopInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkshopUpdateOrganizationRelationInputUpdate = {
  data?: InputMaybe<WorkshopOrganizationUpdateWithoutWorkshopInput>;
  where?: InputMaybe<WorkshopOrganizationUniqueFilter>;
};

export type WorkshopUpdateOrganizationRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopOrganizationUpdateWithoutWorkshopInput>;
  where?: InputMaybe<WorkshopOrganizationWithoutWorkshopFilter>;
};

export type WorkshopUpdateServiceRelationInput = {
  connect?: InputMaybe<ServiceUniqueFilter>;
  create?: InputMaybe<ServiceCreateWithoutWorkshopInput>;
  update?: InputMaybe<ServiceUpdateWithoutWorkshopInput>;
};

export type WorkshopUpdateSubscriptionRelationInput = {
  connect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  create?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutWorkshopInput>>;
  createMany?: InputMaybe<WorkshopUpdateSubscriptionRelationInputCreateMany>;
  delete?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  deleteMany?: InputMaybe<Array<WorkshopSubscriptionWithoutWorkshopFilter>>;
  disconnect?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  set?: InputMaybe<Array<WorkshopSubscriptionUniqueFilter>>;
  update?: InputMaybe<Array<WorkshopUpdateSubscriptionRelationInputUpdate>>;
  updateMany?: InputMaybe<Array<WorkshopUpdateSubscriptionRelationInputUpdateMany>>;
};

export type WorkshopUpdateSubscriptionRelationInputCreateMany = {
  data?: InputMaybe<Array<WorkshopSubscriptionCreateWithoutWorkshopInput>>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type WorkshopUpdateSubscriptionRelationInputUpdate = {
  data?: InputMaybe<WorkshopSubscriptionUpdateWithoutWorkshopInput>;
  where?: InputMaybe<WorkshopSubscriptionUniqueFilter>;
};

export type WorkshopUpdateSubscriptionRelationInputUpdateMany = {
  data?: InputMaybe<WorkshopSubscriptionUpdateWithoutWorkshopInput>;
  where?: InputMaybe<WorkshopSubscriptionWithoutWorkshopFilter>;
};

export type WorkshopUpdateWithoutChatRoomInput = {
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWithoutImageFileInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWithoutMentorInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWithoutOrganizationInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWithoutServiceInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  subscription?: InputMaybe<WorkshopUpdateSubscriptionRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWithoutSubscriptionInput = {
  ChatRoom?: InputMaybe<WorkshopUpdateChatRoomRelationInput>;
  actualParticipants?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  expectedParticipants?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageFile?: InputMaybe<WorkshopUpdateImageFileRelationInput>;
  mentor?: InputMaybe<WorkshopUpdateMentorRelationInput>;
  minParticipants?: InputMaybe<Scalars['Int']['input']>;
  organization?: InputMaybe<WorkshopUpdateOrganizationRelationInput>;
  registeredParticipants?: InputMaybe<Scalars['Int']['input']>;
  service?: InputMaybe<WorkshopUpdateServiceRelationInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workshopMeetingRoom?: InputMaybe<WorkshopUpdateWorkshopMeetingRoomRelationInput>;
};

export type WorkshopUpdateWorkshopMeetingRoomRelationInput = {
  connect?: InputMaybe<WorkshopMeetingRoomUniqueFilter>;
  create?: InputMaybe<WorkshopMeetingRoomCreateWithoutWorkshopInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<WorkshopMeetingRoomUpdateWithoutWorkshopInput>;
};

export type WorkshopWithoutImageFileFilter = {
  ChatRoom?: InputMaybe<ChatRoomListFilter>;
  actualParticipants?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  expectedParticipants?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  minParticipants?: InputMaybe<IntFilter>;
  organization?: InputMaybe<WorkshopOrganizationListFilter>;
  registeredParticipants?: InputMaybe<IntFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<WorkshopSubscriptionListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopMeetingRoom?: InputMaybe<WorkshopMeetingRoomFilter>;
};

export type WorkshopWithoutMentorFilter = {
  ChatRoom?: InputMaybe<ChatRoomListFilter>;
  actualParticipants?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  expectedParticipants?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  minParticipants?: InputMaybe<IntFilter>;
  organization?: InputMaybe<WorkshopOrganizationListFilter>;
  registeredParticipants?: InputMaybe<IntFilter>;
  service?: InputMaybe<ServiceFilter>;
  serviceId?: InputMaybe<StringFilter>;
  subscription?: InputMaybe<WorkshopSubscriptionListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopMeetingRoom?: InputMaybe<WorkshopMeetingRoomFilter>;
};

export type WorkshopWithoutServiceFilter = {
  ChatRoom?: InputMaybe<ChatRoomListFilter>;
  actualParticipants?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  date?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  duration?: InputMaybe<IntFilter>;
  expectedParticipants?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  imageFile?: InputMaybe<UploadedFileFilter>;
  imageFileId?: InputMaybe<StringFilter>;
  mentor?: InputMaybe<CenterMentorFilter>;
  mentorId?: InputMaybe<StringFilter>;
  minParticipants?: InputMaybe<IntFilter>;
  organization?: InputMaybe<WorkshopOrganizationListFilter>;
  registeredParticipants?: InputMaybe<IntFilter>;
  subscription?: InputMaybe<WorkshopSubscriptionListFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workshopMeetingRoom?: InputMaybe<WorkshopMeetingRoomFilter>;
};

export type MeetingRoomJoinInfoQueryVariables = Exact<{
  collaborationSessionId: Scalars['String']['input'];
}>;


export type MeetingRoomJoinInfoQuery = { __typename?: 'Query', meetingRoomJoinInfo?: { __typename?: 'MeetingRoomJoinInfo', id?: string | null, serverUrl?: string | null, token?: string | null } | null };

export type AvatarUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type AvatarUrlQuery = { __typename?: 'Query', me?: { __typename?: 'User', avatarUrl?: string | null } | null };

export type AddCollaboratorMutationVariables = Exact<{
  documentId: Scalars['String']['input'];
  readable?: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
  writable?: Scalars['Boolean']['input'];
}>;


export type AddCollaboratorMutation = { __typename?: 'Mutation', addCollaborator?: { __typename?: 'DocumentCollaborator', documentId: string, readable: boolean, userId: string, writable: boolean } | null };

export type RemoveCollaboratorMutationVariables = Exact<{
  documentId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;


export type RemoveCollaboratorMutation = { __typename?: 'Mutation', removeCollaborator?: { __typename?: 'DocumentCollaborator', documentId: string, readable: boolean, userId: string, writable: boolean } | null };

export type EditCollaboratorPermissionMutationVariables = Exact<{
  documentId: Scalars['String']['input'];
  readable: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
  writable: Scalars['Boolean']['input'];
}>;


export type EditCollaboratorPermissionMutation = { __typename?: 'Mutation', editCollaboratorPermission?: { __typename?: 'DocumentCollaborator', documentId: string, readable: boolean, writable: boolean, user: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null, role?: string | null, updatedAt?: any | null } } | null };

export type CreateSelfDocumentMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateSelfDocumentMutation = { __typename?: 'Mutation', createDocument?: { __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null } } | null };

export type CreateDocumentMutationVariables = Exact<{
  collaborationSessionId?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateDocumentMutation = { __typename?: 'Mutation', createDocument?: { __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null } } | null };

export type EventDocumentClientRequestSyncQueryVariables = Exact<{
  documentId: Scalars['String']['input'];
  pageIndex: Scalars['Int']['input'];
}>;


export type EventDocumentClientRequestSyncQuery = { __typename?: 'Query', eventDocumentClientRequestSync?: { __typename?: 'DocumentDelta', delta?: any | null, documentId?: string | null, eventType?: string | null, pageIndex?: number | null, requestSync?: boolean | null, senderId?: string | null, totalPage?: number | null } | null };

export type EventDocumentClientRequestSyncClassQueryVariables = Exact<{
  documentId: Scalars['String']['input'];
  pageIndex: Scalars['Int']['input'];
}>;


export type EventDocumentClientRequestSyncClassQuery = { __typename?: 'Query', eventDocumentClientRequestSync?: { __typename?: 'DocumentDelta', delta?: any | null, documentId?: string | null, eventType?: string | null, pageIndex?: number | null, requestSync?: boolean | null, senderId?: string | null, totalPage?: number | null } | null };

export type EventDocumentServerRequestSyncMutationVariables = Exact<{
  delta?: InputMaybe<Scalars['Delta']['input']>;
  documentId?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<CursorInput>;
}>;


export type EventDocumentServerRequestSyncMutation = { __typename?: 'Mutation', eventDocumentServerRequestSync?: { __typename?: 'DocumentDelta', delta?: any | null, documentId?: string | null, eventType?: string | null, pageIndex?: number | null, requestSync?: boolean | null, senderId?: string | null, totalPage?: number | null, cursor?: { __typename?: 'Cursor', color?: string | null, id?: string | null, name?: string | null, range?: { __typename?: 'Range', index?: number | null, length?: number | null } | null } | null } | null };

export type MyDocumentsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MyDocumentsQuery = { __typename?: 'Query', myDocuments?: Array<{ __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, previewImage?: { __typename?: 'UploadedFile', actualFileName?: string | null, fileName?: string | null, fileType?: UploadedFileType | null, fileUrl?: string | null, id?: string | null, uploadedAt?: any | null, userId?: string | null } | null, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null } }> | null };

export type DocumentQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
}>;


export type DocumentQuery = { __typename?: 'Query', document?: { __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, previewImage?: { __typename?: 'UploadedFile', actualFileName?: string | null, fileName?: string | null, fileType?: UploadedFileType | null, fileUrl?: string | null, id?: string | null, uploadedAt?: any | null, userId?: string | null } | null, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null }, collaborators: Array<{ __typename?: 'DocumentCollaborator', documentId: string, readable: boolean, writable: boolean, user: { __typename?: 'User', avatarUrl?: string | null, email?: string | null, id?: string | null, name?: string | null } }> } | null };

export type UpdateActiveDocumentIdMutationVariables = Exact<{
  activeDocumentId: Scalars['String']['input'];
  collaborationSessionId: Scalars['String']['input'];
}>;


export type UpdateActiveDocumentIdMutation = { __typename?: 'Mutation', updateActiveDocumentId?: { __typename?: 'CollaborationSession', activeDocumentId?: string | null, chatRoomId?: string | null, createdAt?: any | null, id?: string | null, updatedAt?: any | null } | null };

export type UpdateDocumentMutationVariables = Exact<{
  documentId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdateDocumentMutation = { __typename?: 'Mutation', updateDocument?: { __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null } } | null };

export type UpdateDocumentPreviewImageMutationVariables = Exact<{
  documentId: Scalars['String']['input'];
  imageId: Scalars['String']['input'];
}>;


export type UpdateDocumentPreviewImageMutation = { __typename?: 'Mutation', updateDocumentPreviewImage?: { __typename?: 'Document', fileUrl: string, id: string, previewImage?: { __typename?: 'UploadedFile', actualFileName?: string | null, fileName?: string | null, fileType?: UploadedFileType | null, fileUrl?: string | null, id?: string | null, uploadedAt?: any | null } | null } | null };

export type UploadPreviewImgDocMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
  userId: Scalars['String']['input'];
}>;


export type UploadPreviewImgDocMutation = { __typename?: 'Mutation', singleUpload?: { __typename?: 'UploadedFile', id?: string | null } | null };

export type UploadedFileQueryVariables = Exact<{
  fileName?: InputMaybe<Scalars['String']['input']>;
}>;


export type UploadedFileQuery = { __typename?: 'Query', uploadedFile?: { __typename?: 'UploadedFile', actualFileName?: string | null, fileName?: string | null, fileType?: UploadedFileType | null, fileUrl?: string | null, id?: string | null, uploadedAt?: any | null, userId?: string | null } | null };

export type SingleUploadMutationVariables = Exact<{
  file: Scalars['Upload']['input'];
  userId: Scalars['String']['input'];
  fileType?: UploadedFileType;
}>;


export type SingleUploadMutation = { __typename?: 'Mutation', singleUpload?: { __typename?: 'UploadedFile', actualFileName?: string | null, fileName?: string | null, fileType?: UploadedFileType | null, fileUrl?: string | null, id?: string | null, uploadedAt?: any | null, userId?: string | null } | null };

export type InterviewJoinInfoQueryVariables = Exact<{
  scheduleId: Scalars['String']['input'];
}>;


export type InterviewJoinInfoQuery = { __typename?: 'Query', interviewJoinInfo?: { __typename?: 'MeetingRoomJoinInfo', id?: string | null, serverUrl?: string | null, token?: string | null } | null };

export type MeetingRoomQueryVariables = Exact<{
  scheduleDateId: Scalars['String']['input'];
}>;


export type MeetingRoomQuery = { __typename?: 'Query', meetingRoom?: { __typename?: 'MeetingRoom', collaborationSessionId?: string | null, createdAt?: any | null, id?: string | null, updatedAt?: any | null, collaborators?: Array<{ __typename?: 'MeetingRoomCollaborator', id?: string | null, meetingRoomId?: string | null, userId?: string | null, user?: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null, role?: string | null, updatedAt?: any | null } | null }> | null } | null };

export type MessagesQueryVariables = Exact<{
  chatRoomId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type MessagesQuery = { __typename?: 'Query', messages?: Array<{ __typename?: 'Message', chatRoomId?: string | null, content?: string | null, id?: string | null, senderId?: string | null, sentAt?: any | null, type?: MessageType | null, sender?: { __typename?: 'User', avatarUrl?: string | null, id?: string | null, name?: string | null } | null, chatRoom?: { __typename?: 'ChatRoom', mentor?: { __typename?: 'User', avatarUrl?: string | null, name?: string | null } | null } | null }> | null };

export type SendMessageMutationVariables = Exact<{
  chatRoomId?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  type?: MessageType;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage?: { __typename?: 'Message', id?: string | null, content?: string | null } | null };

export type QuizzesQueryVariables = Exact<{
  serviceId: Scalars['String']['input'];
  scheduleId?: InputMaybe<Scalars['String']['input']>;
}>;


export type QuizzesQuery = { __typename?: 'Query', quizzes?: Array<{ __typename?: 'Quiz', nrOfQuestions?: number | null, progressBarColor?: string | null, quizSynopsis?: string | null, quizTitle?: string | null, id?: string | null, questions?: Array<{ __typename?: 'Question', answerSelectionType?: AnswerType | null, answers?: Array<string> | null, explanation?: string | null, messageForCorrectAnswer?: string | null, messageForIncorrectAnswer?: string | null, point?: number | null, question?: string | null, questionType?: QuestionType | null, correctAnswer?: { __typename?: 'StringListType', items?: Array<string> | null } | { __typename?: 'StringType', value?: string | null } | null }> | null }> | null };

export type QuizAttemptQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type QuizAttemptQuery = { __typename?: 'Query', quizAttempt?: { __typename?: 'QuizAttempt', correctPoints?: number | null, numberOfCorrectAnswers?: number | null, numberOfIncorrectAnswers?: number | null, numberOfQuestions?: number | null, questions?: any | null, totalPoints?: number | null, userInput?: any | null } | null };

export type QuizAttemptsQueryVariables = Exact<{ [key: string]: never; }>;


export type QuizAttemptsQuery = { __typename?: 'Query', quizAttempts?: Array<{ __typename?: 'QuizAttempt', correctPoints?: number | null, createdAt?: any | null, id?: string | null, numberOfCorrectAnswers?: number | null, numberOfIncorrectAnswers?: number | null, numberOfQuestions?: number | null, questions?: any | null, quizId?: string | null, totalPoints?: number | null, updatedAt?: any | null, userId?: string | null, userInput?: any | null, quiz?: { __typename?: 'Quiz', quizTitle?: string | null } | null, user?: { __typename?: 'User', name?: string | null } | null }> | null };

export type SubmitQuizMutationVariables = Exact<{
  correctPoints?: InputMaybe<Scalars['Int']['input']>;
  numberOfCorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfIncorrectAnswers?: InputMaybe<Scalars['Int']['input']>;
  numberOfQuestions?: InputMaybe<Scalars['Int']['input']>;
  questions?: InputMaybe<Array<Scalars['Json']['input']> | Scalars['Json']['input']>;
  totalPoints?: InputMaybe<Scalars['Int']['input']>;
  userInput?: InputMaybe<Array<Scalars['Json']['input']> | Scalars['Json']['input']>;
  quizId?: InputMaybe<Scalars['String']['input']>;
  scheduleId?: InputMaybe<Scalars['String']['input']>;
}>;


export type SubmitQuizMutation = { __typename?: 'Mutation', submitQuiz?: { __typename?: 'QuizAttempt', correctPoints?: number | null, createdAt?: any | null, id?: string | null, numberOfCorrectAnswers?: number | null, numberOfIncorrectAnswers?: number | null, numberOfQuestions?: number | null, questions?: any | null, quizId?: string | null, totalPoints?: number | null, updatedAt?: any | null, userId?: string | null, userInput?: any | null } | null };

export type CollaborationSessionQueryVariables = Exact<{
  scheduleDateId: Scalars['String']['input'];
}>;


export type CollaborationSessionQuery = { __typename?: 'Query', collaborationSession?: { __typename?: 'CollaborationSession', activeDocumentId?: string | null, chatRoomId?: string | null, createdAt?: any | null, id?: string | null, updatedAt?: any | null, collaboratorsIds?: Array<string> | null, activeDocument?: { __typename?: 'Document', createdAt: any, fileUrl: string, id: string, isPublic: boolean, name: string, updatedAt: any, owner: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, banned?: boolean | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null } } | null } | null };

export type UsersQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', avatarUrl?: string | null, email?: string | null, id?: string | null, name?: string | null }> | null };

export type WorkshopMeetingRoomJoinInfoQueryVariables = Exact<{
  workshopId: Scalars['String']['input'];
}>;


export type WorkshopMeetingRoomJoinInfoQuery = { __typename?: 'Query', workshopMeetingRoomJoinInfo?: { __typename?: 'WorkshopMeetingRoomJoinInfo', id?: string | null, serverUrl?: string | null, token?: string | null, chatRoomId?: string | null } | null };

export type EventDocumentChangedMutationVariables = Exact<{
  data: DocumentDeltaInput;
}>;


export type EventDocumentChangedMutation = { __typename?: 'Mutation', eventDocumentChanged?: { __typename?: 'DocumentDelta', delta?: any | null, documentId?: string | null, pageIndex?: number | null, cursor?: { __typename?: 'Cursor', color?: string | null, id?: string | null, name?: string | null, range?: { __typename?: 'Range', index?: number | null, length?: number | null } | null } | null } | null };

export type SubscribeDocumentSubscriptionVariables = Exact<{
  documentId: Scalars['String']['input'];
}>;


export type SubscribeDocumentSubscription = { __typename?: 'Subscription', document?: { __typename?: 'DocumentDelta', senderId?: string | null, requestSync?: boolean | null, delta?: any | null, eventType?: string | null, documentId?: string | null, pageIndex?: number | null, cursor?: { __typename?: 'Cursor', color?: string | null, id?: string | null, name?: string | null, range?: { __typename?: 'Range', index?: number | null, length?: number | null } | null } | null } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', avatarUrl?: string | null, bankAccountNumber?: string | null, bankBin?: string | null, createdAt?: any | null, email?: string | null, id?: string | null, name?: string | null, phoneNumber?: string | null, role?: string | null, updatedAt?: any | null } | null };


export const MeetingRoomJoinInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeetingRoomJoinInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingRoomJoinInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"collaborationSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<MeetingRoomJoinInfoQuery, MeetingRoomJoinInfoQueryVariables>;
export const AvatarUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AvatarUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<AvatarUrlQuery, AvatarUrlQueryVariables>;
export const AddCollaboratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCollaborator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":true}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"writable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},"defaultValue":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCollaborator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"readable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readable"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"writable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"writable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"readable"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"writable"}}]}}]}}]} as unknown as DocumentNode<AddCollaboratorMutation, AddCollaboratorMutationVariables>;
export const RemoveCollaboratorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveCollaborator"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCollaborator"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"readable"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"writable"}}]}}]}}]} as unknown as DocumentNode<RemoveCollaboratorMutation, RemoveCollaboratorMutationVariables>;
export const EditCollaboratorPermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditCollaboratorPermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"readable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"writable"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editCollaboratorPermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"readable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"readable"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"writable"},"value":{"kind":"Variable","name":{"kind":"Name","value":"writable"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"readable"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writable"}}]}}]}}]} as unknown as DocumentNode<EditCollaboratorPermissionMutation, EditCollaboratorPermissionMutationVariables>;
export const CreateSelfDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateSelfDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateSelfDocumentMutation, CreateSelfDocumentMutationVariables>;
export const CreateDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"collaborationSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}}]}}]}}]} as unknown as DocumentNode<CreateDocumentMutation, CreateDocumentMutationVariables>;
export const EventDocumentClientRequestSyncDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventDocumentClientRequestSync"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDocumentClientRequestSync"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageIndex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delta"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"pageIndex"}},{"kind":"Field","name":{"kind":"Name","value":"requestSync"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPage"}}]}}]}}]} as unknown as DocumentNode<EventDocumentClientRequestSyncQuery, EventDocumentClientRequestSyncQueryVariables>;
export const EventDocumentClientRequestSyncClassDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"EventDocumentClientRequestSyncClass"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDocumentClientRequestSync"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"pageIndex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delta"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"pageIndex"}},{"kind":"Field","name":{"kind":"Name","value":"requestSync"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPage"}}]}}]}}]} as unknown as DocumentNode<EventDocumentClientRequestSyncClassQuery, EventDocumentClientRequestSyncClassQueryVariables>;
export const EventDocumentServerRequestSyncDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EventDocumentServerRequestSync"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delta"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Delta"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CursorInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDocumentServerRequestSync"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"delta"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delta"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"pageIndex"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pageIndex"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"cursor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cursor"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delta"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"pageIndex"}},{"kind":"Field","name":{"kind":"Name","value":"requestSync"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPage"}}]}}]}}]} as unknown as DocumentNode<EventDocumentServerRequestSyncMutation, EventDocumentServerRequestSyncMutationVariables>;
export const MyDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyDocuments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myDocuments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"updatedAt"},"value":{"kind":"EnumValue","value":"Desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MyDocumentsQuery, MyDocumentsQueryVariables>;
export const DocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Document"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"collaborators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"readable"}},{"kind":"Field","name":{"kind":"Name","value":"writable"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<DocumentQuery, DocumentQueryVariables>;
export const UpdateActiveDocumentIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateActiveDocumentId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"activeDocumentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateActiveDocumentId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"activeDocumentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"activeDocumentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"collaborationSessionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collaborationSessionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeDocumentId"}},{"kind":"Field","name":{"kind":"Name","value":"chatRoomId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateActiveDocumentIdMutation, UpdateActiveDocumentIdMutationVariables>;
export const UpdateDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDocument"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UpdateDocumentMutation, UpdateDocumentMutationVariables>;
export const UpdateDocumentPreviewImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateDocumentPreviewImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDocumentPreviewImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"previewImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDocumentPreviewImageMutation, UpdateDocumentPreviewImageMutationVariables>;
export const UploadPreviewImgDocDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadPreviewImgDoc"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singleUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileType"},"value":{"kind":"EnumValue","value":"IMAGE"}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UploadPreviewImgDocMutation, UploadPreviewImgDocMutationVariables>;
export const UploadedFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UploadedFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadedFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"fileName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileName"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<UploadedFileQuery, UploadedFileQueryVariables>;
export const SingleUploadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SingleUpload"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UploadedFileType"}}},"defaultValue":{"kind":"EnumValue","value":"IMAGE"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"singleUpload"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileType"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"actualFileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileType"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"uploadedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]}}]} as unknown as DocumentNode<SingleUploadMutation, SingleUploadMutationVariables>;
export const InterviewJoinInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"InterviewJoinInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"interviewJoinInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<InterviewJoinInfoQuery, InterviewJoinInfoQueryVariables>;
export const MeetingRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MeetingRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"meetingRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleDateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleDateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collaborationSessionId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"collaborators"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"meetingRoomId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MeetingRoomQuery, MeetingRoomQueryVariables>;
export const MessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Messages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"messages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chatRoomId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sentAt"},"value":{"kind":"EnumValue","value":"Desc"}}]}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatRoomId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"chatRoom"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mentor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<MessagesQuery, MessagesQueryVariables>;
export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MessageType"}}},"defaultValue":{"kind":"EnumValue","value":"TEXT"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"chatRoom"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatRoomId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const QuizzesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Quizzes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quizzes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"serviceId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"serviceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"scheduleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nrOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"progressBarColor"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answerSelectionType"}},{"kind":"Field","name":{"kind":"Name","value":"answers"}},{"kind":"Field","name":{"kind":"Name","value":"correctAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringListType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StringType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"explanation"}},{"kind":"Field","name":{"kind":"Name","value":"messageForCorrectAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"messageForIncorrectAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"point"}},{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"questionType"}}]}},{"kind":"Field","name":{"kind":"Name","value":"quizSynopsis"}},{"kind":"Field","name":{"kind":"Name","value":"quizTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<QuizzesQuery, QuizzesQueryVariables>;
export const QuizAttemptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuizAttempt"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quizAttempt"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctPoints"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfCorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfIncorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"questions"}},{"kind":"Field","name":{"kind":"Name","value":"totalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"userInput"}}]}}]}}]} as unknown as DocumentNode<QuizAttemptQuery, QuizAttemptQueryVariables>;
export const QuizAttemptsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuizAttempts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quizAttempts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctPoints"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfCorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfIncorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"questions"}},{"kind":"Field","name":{"kind":"Name","value":"quizId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userInput"}},{"kind":"Field","name":{"kind":"Name","value":"quiz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quizTitle"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<QuizAttemptsQuery, QuizAttemptsQueryVariables>;
export const SubmitQuizDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SubmitQuiz"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"correctPoints"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numberOfCorrectAnswers"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numberOfIncorrectAnswers"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"numberOfQuestions"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"questions"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Json"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"totalPoints"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Json"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"quizId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"submitQuiz"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"correctPoints"},"value":{"kind":"Variable","name":{"kind":"Name","value":"correctPoints"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numberOfCorrectAnswers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numberOfCorrectAnswers"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numberOfIncorrectAnswers"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numberOfIncorrectAnswers"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"numberOfQuestions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"numberOfQuestions"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"questions"},"value":{"kind":"Variable","name":{"kind":"Name","value":"questions"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"totalPoints"},"value":{"kind":"Variable","name":{"kind":"Name","value":"totalPoints"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"schedule"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleId"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"quiz"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"connect"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"quizId"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"correctPoints"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfCorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfIncorrectAnswers"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfQuestions"}},{"kind":"Field","name":{"kind":"Name","value":"questions"}},{"kind":"Field","name":{"kind":"Name","value":"quizId"}},{"kind":"Field","name":{"kind":"Name","value":"totalPoints"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"userInput"}}]}}]}}]} as unknown as DocumentNode<SubmitQuizMutation, SubmitQuizMutationVariables>;
export const CollaborationSessionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CollaborationSession"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scheduleDateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collaborationSession"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scheduleDateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scheduleDateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activeDocumentId"}},{"kind":"Field","name":{"kind":"Name","value":"chatRoomId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"collaboratorsIds"}},{"kind":"Field","name":{"kind":"Name","value":"activeDocument"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isPublic"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"banned"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<CollaborationSessionQuery, CollaborationSessionQueryVariables>;
export const UsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Users"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"banned"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"BooleanValue","value":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"email"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"contains"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UsersQuery, UsersQueryVariables>;
export const WorkshopMeetingRoomJoinInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkshopMeetingRoomJoinInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workshopId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workshopMeetingRoomJoinInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workshopId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workshopId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serverUrl"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"chatRoomId"}}]}}]}}]} as unknown as DocumentNode<WorkshopMeetingRoomJoinInfoQuery, WorkshopMeetingRoomJoinInfoQueryVariables>;
export const EventDocumentChangedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EventDocumentChanged"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DocumentDeltaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventDocumentChanged"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delta"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"pageIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<EventDocumentChangedMutation, EventDocumentChangedMutationVariables>;
export const SubscribeDocumentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"subscribeDocument"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"document"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"documentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"documentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"requestSync"}},{"kind":"Field","name":{"kind":"Name","value":"delta"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"pageIndex"}},{"kind":"Field","name":{"kind":"Name","value":"cursor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"range"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"length"}}]}}]}}]}}]}}]} as unknown as DocumentNode<SubscribeDocumentSubscription, SubscribeDocumentSubscriptionVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"bankAccountNumber"}},{"kind":"Field","name":{"kind":"Name","value":"bankBin"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;