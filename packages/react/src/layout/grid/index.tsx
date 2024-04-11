import { Grid, GridItem } from "./grid";

const GridComponent = Grid as typeof Grid & {
  Item: typeof GridItem;
};

GridComponent.Item = GridItem;

export { GridComponent as Grid, GridItem };

export type * from "./grid";
