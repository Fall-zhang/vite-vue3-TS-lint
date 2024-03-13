export namespace Table {
  export interface Pagination {
    pageNum: number;
    pageSize: number;
    total: number;
  }
  export interface StateProps {
    tableData: any[];
    pagination: Pagination;
    searchParam: {
      [key: string]: any;
    };
    searchInitParam: {
      [key: string]: any;
    };
    totalParam: {
      [key: string]: any;
    };
    icon?: {
      [key: string]: any;
    };
  }
}
