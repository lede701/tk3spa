export class DataCore {
  private _data: any[];
  private _messages: string[];

  constructor(params?: any) {
    if (params !== undefined) {
      for (let key in params) {
        this[key] = params[key];
      }
    }
    this._messages = [];
  }

  bind(data: any[], index: number = 0): boolean {
    // Reset error messages array
    this._messages = [];
    // Create default return results of bind process
    let bRetResults: boolean = false;
    // Check if the data object has elements in the array and the index is withing range
    if (index >= 0 && index < data.length && data.length > 0) {
      // Get row to bind from the data array
      let row = data[index];
      // Get keys of current row
      let inKeys = Object.keys(row);
      // Get keys of current object
      let objKeys = Object.keys(this);
      // Loop through each element in the row
      for (let cellKey of inKeys) {
        // Check if the cell is bindable to object
        if (objKeys.includes(cellKey) && cellKey[0] != '_') {
          this[cellKey] = row[cellKey];
          bRetResults = true;
        } else {
          // Report the binding error
          this._messages.push(`Failed to bind ${cellKey} to object`);
        }
      }
      this._data = data;
    }
    return bRetResults;
  }

  getHasErrors(): boolean {
    return this._messages.length > 0;
  }

  getErrorMessage(): string[] {
    return this._messages.splice();
  }
}
