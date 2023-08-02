export interface TodoCountData {
  totalCount: number;
  completedCount: number;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  editing: boolean;
}
