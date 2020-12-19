export const generateEvents = (num) => {
    let count = 1;
    let result = [{value: 'JC', label: 'JC'}];
    while(count < num){
      result.push({value: `${count}`, label: count});
      count++;
    }
    return result;
  }