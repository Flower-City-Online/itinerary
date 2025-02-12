export interface AdvanceFilterActions {
  title:string,
  visible: boolean;
  actions: 'Default' | ['Delete' , 'Edit'];
}
