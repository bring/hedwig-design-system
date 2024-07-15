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
  page: Page;
  pageConnection: PageConnection;
  component: Component;
  componentConnection: ComponentConnection;
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


export type QueryPageArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPageConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
};


export type QueryComponentArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryComponentConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ComponentFilter>;
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
  page?: InputMaybe<PageFilter>;
  component?: InputMaybe<ComponentFilter>;
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

export type DocumentNode = Page | Component | Global | Folder;

export type PageBlocksContent = {
  __typename?: 'PageBlocksContent';
  content?: Maybe<Scalars['JSON']['output']>;
};

export type PageBlocksBrandSlogan = {
  __typename?: 'PageBlocksBrandSlogan';
  title?: Maybe<Scalars['String']['output']>;
  slogan: Scalars['String']['output'];
  illustrationSvg?: Maybe<Scalars['String']['output']>;
};

export type PageBlocksNavCardsCards = {
  __typename?: 'PageBlocksNavCardsCards';
  title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
};

export type PageBlocksNavCards = {
  __typename?: 'PageBlocksNavCards';
  cards?: Maybe<Array<Maybe<PageBlocksNavCardsCards>>>;
};

export type PageBlocks = PageBlocksContent | PageBlocksBrandSlogan | PageBlocksNavCards;

export type Page = Node & Document & {
  __typename?: 'Page';
  title: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  hideTitleAndDescription?: Maybe<Scalars['Boolean']['output']>;
  blocks?: Maybe<Array<Maybe<PageBlocks>>>;
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

export type PageBlocksContentContentExamplesFilter = {
  componentName?: InputMaybe<StringFilter>;
  exampleName?: InputMaybe<StringFilter>;
  showCodeByDefault?: InputMaybe<BooleanFilter>;
};

export type PageBlocksContentContentFigmaPreviewsFilter = {
  urls?: InputMaybe<StringFilter>;
};

export type PageBlocksContentContentFigmaEmbedFilter = {
  url?: InputMaybe<StringFilter>;
  hideBottomBar?: InputMaybe<BooleanFilter>;
};

export type RichTextFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentBodyTableTableRowsTableCellsFilter = {
  value?: InputMaybe<RichTextFilter>;
};

export type PageBlocksContentContentTableTableRowsFilter = {
  tableCells?: InputMaybe<ComponentBodyTableTableRowsTableCellsFilter>;
};

export type PageBlocksContentContentTableFilter = {
  firstRowHeader?: InputMaybe<BooleanFilter>;
  align?: InputMaybe<StringFilter>;
  tableRows?: InputMaybe<PageBlocksContentContentTableTableRowsFilter>;
};

export type PageBlocksContentContentFilter = {
  Examples?: InputMaybe<PageBlocksContentContentExamplesFilter>;
  FigmaPreviews?: InputMaybe<PageBlocksContentContentFigmaPreviewsFilter>;
  FigmaEmbed?: InputMaybe<PageBlocksContentContentFigmaEmbedFilter>;
  table?: InputMaybe<PageBlocksContentContentTableFilter>;
};

export type PageBlocksContentFilter = {
  content?: InputMaybe<PageBlocksContentContentFilter>;
};

export type PageBlocksBrandSloganFilter = {
  title?: InputMaybe<StringFilter>;
  slogan?: InputMaybe<StringFilter>;
  illustrationSvg?: InputMaybe<StringFilter>;
};

export type PageBlocksNavCardsCardsFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  link?: InputMaybe<StringFilter>;
};

export type PageBlocksNavCardsFilter = {
  cards?: InputMaybe<PageBlocksNavCardsCardsFilter>;
};

export type PageBlocksFilter = {
  content?: InputMaybe<PageBlocksContentFilter>;
  brandSlogan?: InputMaybe<PageBlocksBrandSloganFilter>;
  navCards?: InputMaybe<PageBlocksNavCardsFilter>;
};

export type PageFilter = {
  title?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  hideTitleAndDescription?: InputMaybe<BooleanFilter>;
  blocks?: InputMaybe<PageBlocksFilter>;
};

export type PageConnectionEdges = {
  __typename?: 'PageConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Page>;
};

export type PageConnection = Connection & {
  __typename?: 'PageConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PageConnectionEdges>>>;
};

export type Component = Node & Document & {
  __typename?: 'Component';
  title: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type ComponentBodyExamplesFilter = {
  componentName?: InputMaybe<StringFilter>;
  exampleName?: InputMaybe<StringFilter>;
  showCodeByDefault?: InputMaybe<BooleanFilter>;
};

export type ComponentBodyFigmaPreviewsFilter = {
  urls?: InputMaybe<StringFilter>;
};

export type ComponentBodyFigmaEmbedFilter = {
  url?: InputMaybe<StringFilter>;
  hideBottomBar?: InputMaybe<BooleanFilter>;
};

export type ComponentBodyTableTableRowsFilter = {
  tableCells?: InputMaybe<ComponentBodyTableTableRowsTableCellsFilter>;
};

export type ComponentBodyTableFilter = {
  firstRowHeader?: InputMaybe<BooleanFilter>;
  align?: InputMaybe<StringFilter>;
  tableRows?: InputMaybe<ComponentBodyTableTableRowsFilter>;
};

export type ComponentBodyFilter = {
  Examples?: InputMaybe<ComponentBodyExamplesFilter>;
  FigmaPreviews?: InputMaybe<ComponentBodyFigmaPreviewsFilter>;
  FigmaEmbed?: InputMaybe<ComponentBodyFigmaEmbedFilter>;
  table?: InputMaybe<ComponentBodyTableFilter>;
};

export type ComponentFilter = {
  title?: InputMaybe<StringFilter>;
  subtitle?: InputMaybe<StringFilter>;
  body?: InputMaybe<ComponentBodyFilter>;
};

export type ComponentConnectionEdges = {
  __typename?: 'ComponentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Component>;
};

export type ComponentConnection = Connection & {
  __typename?: 'ComponentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<ComponentConnectionEdges>>>;
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
  shortHeader?: Maybe<Scalars['Boolean']['output']>;
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
  shortHeader?: InputMaybe<BooleanFilter>;
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
  updatePage: Page;
  createPage: Page;
  updateComponent: Component;
  createComponent: Component;
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


export type MutationUpdatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationCreatePageArgs = {
  relativePath: Scalars['String']['input'];
  params: PageMutation;
};


export type MutationUpdateComponentArgs = {
  relativePath: Scalars['String']['input'];
  params: ComponentMutation;
};


export type MutationCreateComponentArgs = {
  relativePath: Scalars['String']['input'];
  params: ComponentMutation;
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
  page?: InputMaybe<PageMutation>;
  component?: InputMaybe<ComponentMutation>;
  global?: InputMaybe<GlobalMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  page?: InputMaybe<PageMutation>;
  component?: InputMaybe<ComponentMutation>;
  global?: InputMaybe<GlobalMutation>;
};

export type PageBlocksContentMutation = {
  content?: InputMaybe<Scalars['JSON']['input']>;
};

export type PageBlocksBrandSloganMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  illustrationSvg?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksNavCardsCardsMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
};

export type PageBlocksNavCardsMutation = {
  cards?: InputMaybe<Array<InputMaybe<PageBlocksNavCardsCardsMutation>>>;
};

export type PageBlocksMutation = {
  content?: InputMaybe<PageBlocksContentMutation>;
  brandSlogan?: InputMaybe<PageBlocksBrandSloganMutation>;
  navCards?: InputMaybe<PageBlocksNavCardsMutation>;
};

export type PageMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hideTitleAndDescription?: InputMaybe<Scalars['Boolean']['input']>;
  blocks?: InputMaybe<Array<InputMaybe<PageBlocksMutation>>>;
};

export type ComponentMutation = {
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
  shortHeader?: InputMaybe<Scalars['Boolean']['input']>;
  nav?: InputMaybe<Array<InputMaybe<GlobalHeaderNavMutation>>>;
};

export type GlobalMutation = {
  header?: InputMaybe<GlobalHeaderMutation>;
};

export type PagePartsFragment = { __typename: 'Page', title: string, description?: string | null, hideTitleAndDescription?: boolean | null, blocks?: Array<{ __typename: 'PageBlocksContent', content?: any | null } | { __typename: 'PageBlocksBrandSlogan', title?: string | null, slogan: string, illustrationSvg?: string | null } | { __typename: 'PageBlocksNavCards', cards?: Array<{ __typename: 'PageBlocksNavCardsCards', title?: string | null, description?: string | null, link?: string | null } | null> | null } | null> | null };

export type ComponentPartsFragment = { __typename: 'Component', title: string, subtitle?: string | null, body?: any | null };

export type GlobalPartsFragment = { __typename: 'Global', header?: { __typename: 'GlobalHeader', shortHeader?: boolean | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null };

export type PageQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PageQuery = { __typename?: 'Query', page: { __typename: 'Page', id: string, title: string, description?: string | null, hideTitleAndDescription?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksContent', content?: any | null } | { __typename: 'PageBlocksBrandSlogan', title?: string | null, slogan: string, illustrationSvg?: string | null } | { __typename: 'PageBlocksNavCards', cards?: Array<{ __typename: 'PageBlocksNavCardsCards', title?: string | null, description?: string | null, link?: string | null } | null> | null } | null> | null } };

export type PageConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PageFilter>;
}>;


export type PageConnectionQuery = { __typename?: 'Query', pageConnection: { __typename?: 'PageConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PageConnectionEdges', cursor: string, node?: { __typename: 'Page', id: string, title: string, description?: string | null, hideTitleAndDescription?: boolean | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, blocks?: Array<{ __typename: 'PageBlocksContent', content?: any | null } | { __typename: 'PageBlocksBrandSlogan', title?: string | null, slogan: string, illustrationSvg?: string | null } | { __typename: 'PageBlocksNavCards', cards?: Array<{ __typename: 'PageBlocksNavCardsCards', title?: string | null, description?: string | null, link?: string | null } | null> | null } | null> | null } | null } | null> | null } };

export type ComponentQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type ComponentQuery = { __typename?: 'Query', component: { __typename: 'Component', id: string, title: string, subtitle?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type ComponentConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ComponentFilter>;
}>;


export type ComponentConnectionQuery = { __typename?: 'Query', componentConnection: { __typename?: 'ComponentConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'ComponentConnectionEdges', cursor: string, node?: { __typename: 'Component', id: string, title: string, subtitle?: string | null, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type GlobalQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type GlobalQuery = { __typename?: 'Query', global: { __typename: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', shortHeader?: boolean | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null } };

export type GlobalConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<GlobalFilter>;
}>;


export type GlobalConnectionQuery = { __typename?: 'Query', globalConnection: { __typename?: 'GlobalConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'GlobalConnectionEdges', cursor: string, node?: { __typename: 'Global', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, header?: { __typename: 'GlobalHeader', shortHeader?: boolean | null, nav?: Array<{ __typename: 'GlobalHeaderNav', href: string, label: string, external?: boolean | null, iconSvg?: string | null, iconBehaviour?: string | null } | null> | null } | null } | null } | null> | null } };

export const PagePartsFragmentDoc = gql`
    fragment PageParts on Page {
  __typename
  title
  description
  hideTitleAndDescription
  blocks {
    __typename
    ... on PageBlocksContent {
      content
    }
    ... on PageBlocksBrandSlogan {
      title
      slogan
      illustrationSvg
    }
    ... on PageBlocksNavCards {
      cards {
        __typename
        title
        description
        link
      }
    }
  }
}
    `;
export const ComponentPartsFragmentDoc = gql`
    fragment ComponentParts on Component {
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
    shortHeader
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
export const PageDocument = gql`
    query page($relativePath: String!) {
  page(relativePath: $relativePath) {
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
    ...PageParts
  }
}
    ${PagePartsFragmentDoc}`;
export const PageConnectionDocument = gql`
    query pageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PageFilter) {
  pageConnection(
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
        ...PageParts
      }
    }
  }
}
    ${PagePartsFragmentDoc}`;
export const ComponentDocument = gql`
    query component($relativePath: String!) {
  component(relativePath: $relativePath) {
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
    ...ComponentParts
  }
}
    ${ComponentPartsFragmentDoc}`;
export const ComponentConnectionDocument = gql`
    query componentConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ComponentFilter) {
  componentConnection(
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
        ...ComponentParts
      }
    }
  }
}
    ${ComponentPartsFragmentDoc}`;
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
      page(variables: PageQueryVariables, options?: C): Promise<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}> {
        return requester<{data: PageQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageQueryVariables, query: string}, PageQueryVariables>(PageDocument, variables, options);
      },
    pageConnection(variables?: PageConnectionQueryVariables, options?: C): Promise<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}> {
        return requester<{data: PageConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PageConnectionQueryVariables, query: string}, PageConnectionQueryVariables>(PageConnectionDocument, variables, options);
      },
    component(variables: ComponentQueryVariables, options?: C): Promise<{data: ComponentQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ComponentQueryVariables, query: string}> {
        return requester<{data: ComponentQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ComponentQueryVariables, query: string}, ComponentQueryVariables>(ComponentDocument, variables, options);
      },
    componentConnection(variables?: ComponentConnectionQueryVariables, options?: C): Promise<{data: ComponentConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ComponentConnectionQueryVariables, query: string}> {
        return requester<{data: ComponentConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: ComponentConnectionQueryVariables, query: string}, ComponentConnectionQueryVariables>(ComponentConnectionDocument, variables, options);
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

  