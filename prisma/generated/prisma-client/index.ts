// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  imageFile: (where?: ImageFileWhereInput) => Promise<boolean>;
  student: (where?: StudentWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  imageFile: (where: ImageFileWhereUniqueInput) => ImageFileNullablePromise;
  imageFiles: (args?: {
    where?: ImageFileWhereInput;
    orderBy?: ImageFileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<ImageFile>;
  imageFilesConnection: (args?: {
    where?: ImageFileWhereInput;
    orderBy?: ImageFileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ImageFileConnectionPromise;
  student: (where: StudentWhereUniqueInput) => StudentNullablePromise;
  students: (args?: {
    where?: StudentWhereInput;
    orderBy?: StudentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Student>;
  studentsConnection: (args?: {
    where?: StudentWhereInput;
    orderBy?: StudentOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => StudentConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createImageFile: (data: ImageFileCreateInput) => ImageFilePromise;
  updateImageFile: (args: {
    data: ImageFileUpdateInput;
    where: ImageFileWhereUniqueInput;
  }) => ImageFilePromise;
  updateManyImageFiles: (args: {
    data: ImageFileUpdateManyMutationInput;
    where?: ImageFileWhereInput;
  }) => BatchPayloadPromise;
  upsertImageFile: (args: {
    where: ImageFileWhereUniqueInput;
    create: ImageFileCreateInput;
    update: ImageFileUpdateInput;
  }) => ImageFilePromise;
  deleteImageFile: (where: ImageFileWhereUniqueInput) => ImageFilePromise;
  deleteManyImageFiles: (where?: ImageFileWhereInput) => BatchPayloadPromise;
  createStudent: (data: StudentCreateInput) => StudentPromise;
  updateStudent: (args: {
    data: StudentUpdateInput;
    where: StudentWhereUniqueInput;
  }) => StudentPromise;
  upsertStudent: (args: {
    where: StudentWhereUniqueInput;
    create: StudentCreateInput;
    update: StudentUpdateInput;
  }) => StudentPromise;
  deleteStudent: (where: StudentWhereUniqueInput) => StudentPromise;
  deleteManyStudents: (where?: StudentWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  imageFile: (
    where?: ImageFileSubscriptionWhereInput
  ) => ImageFileSubscriptionPayloadSubscription;
  student: (
    where?: StudentSubscriptionWhereInput
  ) => StudentSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type ImageFileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "url_ASC"
  | "url_DESC";

export type StudentOrderByInput = "id_ASC" | "id_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type ImageFileWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface ImageFileWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  url?: Maybe<String>;
  url_not?: Maybe<String>;
  url_in?: Maybe<String[] | String>;
  url_not_in?: Maybe<String[] | String>;
  url_lt?: Maybe<String>;
  url_lte?: Maybe<String>;
  url_gt?: Maybe<String>;
  url_gte?: Maybe<String>;
  url_contains?: Maybe<String>;
  url_not_contains?: Maybe<String>;
  url_starts_with?: Maybe<String>;
  url_not_starts_with?: Maybe<String>;
  url_ends_with?: Maybe<String>;
  url_not_ends_with?: Maybe<String>;
  AND?: Maybe<ImageFileWhereInput[] | ImageFileWhereInput>;
  OR?: Maybe<ImageFileWhereInput[] | ImageFileWhereInput>;
  NOT?: Maybe<ImageFileWhereInput[] | ImageFileWhereInput>;
}

export type StudentWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface StudentWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  photo?: Maybe<ImageFileWhereInput>;
  AND?: Maybe<StudentWhereInput[] | StudentWhereInput>;
  OR?: Maybe<StudentWhereInput[] | StudentWhereInput>;
  NOT?: Maybe<StudentWhereInput[] | StudentWhereInput>;
}

export interface ImageFileCreateInput {
  id?: Maybe<ID_Input>;
  url: String;
}

export interface ImageFileUpdateInput {
  url?: Maybe<String>;
}

export interface ImageFileUpdateManyMutationInput {
  url?: Maybe<String>;
}

export interface StudentCreateInput {
  id?: Maybe<ID_Input>;
  photo?: Maybe<ImageFileCreateOneInput>;
}

export interface ImageFileCreateOneInput {
  create?: Maybe<ImageFileCreateInput>;
  connect?: Maybe<ImageFileWhereUniqueInput>;
}

export interface StudentUpdateInput {
  photo?: Maybe<ImageFileUpdateOneInput>;
}

export interface ImageFileUpdateOneInput {
  create?: Maybe<ImageFileCreateInput>;
  update?: Maybe<ImageFileUpdateDataInput>;
  upsert?: Maybe<ImageFileUpsertNestedInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<ImageFileWhereUniqueInput>;
}

export interface ImageFileUpdateDataInput {
  url?: Maybe<String>;
}

export interface ImageFileUpsertNestedInput {
  update: ImageFileUpdateDataInput;
  create: ImageFileCreateInput;
}

export interface ImageFileSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ImageFileWhereInput>;
  AND?: Maybe<
    ImageFileSubscriptionWhereInput[] | ImageFileSubscriptionWhereInput
  >;
  OR?: Maybe<
    ImageFileSubscriptionWhereInput[] | ImageFileSubscriptionWhereInput
  >;
  NOT?: Maybe<
    ImageFileSubscriptionWhereInput[] | ImageFileSubscriptionWhereInput
  >;
}

export interface StudentSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<StudentWhereInput>;
  AND?: Maybe<StudentSubscriptionWhereInput[] | StudentSubscriptionWhereInput>;
  OR?: Maybe<StudentSubscriptionWhereInput[] | StudentSubscriptionWhereInput>;
  NOT?: Maybe<StudentSubscriptionWhereInput[] | StudentSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface ImageFile {
  id: ID_Output;
  url: String;
}

export interface ImageFilePromise extends Promise<ImageFile>, Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface ImageFileSubscription
  extends Promise<AsyncIterator<ImageFile>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface ImageFileNullablePromise
  extends Promise<ImageFile | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface ImageFileConnection {
  pageInfo: PageInfo;
  edges: ImageFileEdge[];
}

export interface ImageFileConnectionPromise
  extends Promise<ImageFileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ImageFileEdge>>() => T;
  aggregate: <T = AggregateImageFilePromise>() => T;
}

export interface ImageFileConnectionSubscription
  extends Promise<AsyncIterator<ImageFileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ImageFileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateImageFileSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface ImageFileEdge {
  node: ImageFile;
  cursor: String;
}

export interface ImageFileEdgePromise
  extends Promise<ImageFileEdge>,
    Fragmentable {
  node: <T = ImageFilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface ImageFileEdgeSubscription
  extends Promise<AsyncIterator<ImageFileEdge>>,
    Fragmentable {
  node: <T = ImageFileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateImageFile {
  count: Int;
}

export interface AggregateImageFilePromise
  extends Promise<AggregateImageFile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateImageFileSubscription
  extends Promise<AsyncIterator<AggregateImageFile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Student {
  id: ID_Output;
}

export interface StudentPromise extends Promise<Student>, Fragmentable {
  id: () => Promise<ID_Output>;
  photo: <T = ImageFilePromise>() => T;
}

export interface StudentSubscription
  extends Promise<AsyncIterator<Student>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  photo: <T = ImageFileSubscription>() => T;
}

export interface StudentNullablePromise
  extends Promise<Student | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  photo: <T = ImageFilePromise>() => T;
}

export interface StudentConnection {
  pageInfo: PageInfo;
  edges: StudentEdge[];
}

export interface StudentConnectionPromise
  extends Promise<StudentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<StudentEdge>>() => T;
  aggregate: <T = AggregateStudentPromise>() => T;
}

export interface StudentConnectionSubscription
  extends Promise<AsyncIterator<StudentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<StudentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateStudentSubscription>() => T;
}

export interface StudentEdge {
  node: Student;
  cursor: String;
}

export interface StudentEdgePromise extends Promise<StudentEdge>, Fragmentable {
  node: <T = StudentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface StudentEdgeSubscription
  extends Promise<AsyncIterator<StudentEdge>>,
    Fragmentable {
  node: <T = StudentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateStudent {
  count: Int;
}

export interface AggregateStudentPromise
  extends Promise<AggregateStudent>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateStudentSubscription
  extends Promise<AsyncIterator<AggregateStudent>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface ImageFileSubscriptionPayload {
  mutation: MutationType;
  node: ImageFile;
  updatedFields: String[];
  previousValues: ImageFilePreviousValues;
}

export interface ImageFileSubscriptionPayloadPromise
  extends Promise<ImageFileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ImageFilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ImageFilePreviousValuesPromise>() => T;
}

export interface ImageFileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ImageFileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ImageFileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ImageFilePreviousValuesSubscription>() => T;
}

export interface ImageFilePreviousValues {
  id: ID_Output;
  url: String;
}

export interface ImageFilePreviousValuesPromise
  extends Promise<ImageFilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
}

export interface ImageFilePreviousValuesSubscription
  extends Promise<AsyncIterator<ImageFilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
}

export interface StudentSubscriptionPayload {
  mutation: MutationType;
  node: Student;
  updatedFields: String[];
  previousValues: StudentPreviousValues;
}

export interface StudentSubscriptionPayloadPromise
  extends Promise<StudentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = StudentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = StudentPreviousValuesPromise>() => T;
}

export interface StudentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<StudentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = StudentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = StudentPreviousValuesSubscription>() => T;
}

export interface StudentPreviousValues {
  id: ID_Output;
}

export interface StudentPreviousValuesPromise
  extends Promise<StudentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
}

export interface StudentPreviousValuesSubscription
  extends Promise<AsyncIterator<StudentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Student",
    embedded: false
  },
  {
    name: "ImageFile",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
