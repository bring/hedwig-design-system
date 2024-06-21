//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
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
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  post: Post;
  postConnection: PostConnection;
  global: Global;
  globalConnection: GlobalConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};


export type QueryGlobalArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobalConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GlobalFilter>;
};

export type DocumentFilter = {
  post?: InputMaybe<PostFilter>;
  global?: InputMaybe<GlobalFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Post | Global | Folder;

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostBodyExamplesFilter = {
  componentName?: InputMaybe<StringFilter>;
  exampleName?: InputMaybe<StringFilter>;
  showCodeByDefault?: InputMaybe<BooleanFilter>;
};

export type PostBodyFigmaPreviewsFilter = {
  urls?: InputMaybe<StringFilter>;
};

export type PostBodyFigmaEmbedFilter = {
  url?: InputMaybe<StringFilter>;
  hideBottomBar?: InputMaybe<BooleanFilter>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostBodyTableTableRowsTableCellsFilter = {
  value?: InputMaybe<RichTextFilter>;
};

export type PostBodyTableTableRowsFilter = {
  tableCells?: InputMaybe<PostBodyTableTableRowsTableCellsFilter>;
};

export type PostBodyTableFilter = {
  firstRowHeader?: InputMaybe<BooleanFilter>;
  align?: InputMaybe<StringFilter>;
  tableRows?: InputMaybe<PostBodyTableTableRowsFilter>;
};

export type PostBodyFilter = {
  Examples?: InputMaybe<PostBodyExamplesFilter>;
  FigmaPreviews?: InputMaybe<PostBodyFigmaPreviewsFilter>;
  FigmaEmbed?: InputMaybe<PostBodyFigmaEmbedFilter>;
  table?: InputMaybe<PostBodyTableFilter>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  body?: InputMaybe<PostBodyFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type GlobalHeaderNav = {
  __typename?: 'GlobalHeaderNav';
  href: Scalars['String']['output'];
  label: Scalars['String']['output'];
  external?: Maybe<Scalars['Boolean']['output']>;
  iconSvg?: Maybe<Scalars['String']['output']>;
  iconBehaviour?: Maybe<Scalars['String']['output']>;
};

export type GlobalHeader = {
  __typename?: 'GlobalHeader';
  nav?: Maybe<Array<Maybe<GlobalHeaderNav>>>;
};

export type Global = Node & Document & {
  __typename?: 'Global';
  header?: Maybe<GlobalHeader>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type GlobalHeaderNavFilter = {
  href?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  external?: InputMaybe<BooleanFilter>;
  iconSvg?: InputMaybe<StringFilter>;
  iconBehaviour?: InputMaybe<StringFilter>;
};

export type GlobalHeaderFilter = {
  nav?: InputMaybe<GlobalHeaderNavFilter>;
};

export type GlobalFilter = {
  header?: InputMaybe<GlobalHeaderFilter>;
};

export type GlobalConnectionEdges = {
  __typename?: 'GlobalConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Global>;
};

export type GlobalConnection = Connection & {
  __typename?: 'GlobalConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<GlobalConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  createFolder: DocumentNode;
  updatePost: Post;
  createPost: Post;
  updateGlobal: Global;
  createGlobal: Global;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationCreateFolderArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationUpdateGlobalArgs = {
  relativePath: Scalars['String']['input'];
  params: GlobalMutation;
};


export type MutationCreateGlobalArgs = {
  relativePath: Scalars['String']['input'];
  params: GlobalMutation;
};

export type DocumentUpdateMutation = {
  post?: InputMaybe<PostMutation>;
  global?: InputMaybe<GlobalMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  post?: InputMaybe<PostMutation>;
  global?: InputMaybe<GlobalMutation>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type GlobalHeaderNavMutation = {
  href?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  external?: InputMaybe<Scalars['Boolean']['input']>;
  iconSvg?: InputMaybe<Scalars['String']['input']>;
  iconBehaviour?: InputMaybe<Scalars['String']['input']>;
};

export type GlobalHeaderMutation = {
  nav?: InputMaybe<Array<InputMaybe<GlobalHeaderNavMutation>>>;
};

export type GlobalMutation = {
  header?: InputMaybe<GlobalHeaderMutation>;
};

export type PostPartsFragment = { __typename: 'Post', title: string, subtitle?: string | null, body?: any | null };

export type GlobalPartsFragment = { __typename: 'Global', header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, subtitle?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, subtitle?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type GlobalQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type GlobalQuery = { __typename?: 'Query', global: { __typename: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null } };

export type GlobalConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GlobalFilter>;
}>;


export type GlobalConnectionQuery = { __typename?: 'Query', globalConnection: { __typename?: 'GlobalConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'GlobalConnectionEdges', cursor: string, node?: { __typename: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null } | null } | null> | null } };

export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  subtitle
  body
}
    `;
export const GlobalPartsFragmentDoc = gql`
    fragment GlobalParts on Global {
  __typename
  header {
    __typename
    nav {
      __typename
      href
      label
      external
      iconSvg
      iconBehaviour
    }
  }
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const GlobalDocument = gql`
    query global($relativePath: String!) {
  global(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...GlobalParts
  }
}
    ${GlobalPartsFragmentDoc}`;
export const GlobalConnectionDocument = gql`
    query globalConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: GlobalFilter) {
  globalConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...GlobalParts
      }
    }
  }
}
    ${GlobalPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    global(variables: GlobalQueryVariables, options?: C): Promise<{data: GlobalQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: GlobalQueryVariables, query: string}> {
        return requester<{data: GlobalQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: GlobalQueryVariables, query: string}, GlobalQueryVariables>(GlobalDocument, variables, options);
      },
    globalConnection(variables?: GlobalConnectionQueryVariables, options?: C): Promise<{data: GlobalConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: GlobalConnectionQueryVariables, query: string}> {
        return requester<{data: GlobalConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: GlobalConnectionQueryVariables, query: string}, GlobalConnectionQueryVariables>(GlobalConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: {
      branch?: string,
      /**
       * Aside from `method` and `body`, all fetch options are passed
       * through to underlying fetch request
       */
      fetchOptions?: Omit<Parameters<typeof fetch>[1], 'body' | 'method'>,
    },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    }, options)

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "http://localhost:4001/graphql",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

  