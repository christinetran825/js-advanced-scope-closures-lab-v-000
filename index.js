function produceDrivingRange(blockRange){
  return function(startBlock, endBlock){
    let beginning = parseInt(startBlock);
    let ending = parseInt(endBlock);
    let blockDifference = Math.abs(ending - beginning);
    let rangeAmount = blockRange - blockDifference;

    if (rangeAmount > 0) {
      return `within range by ${rangeAmount}`;
    } else {
      return `${Math.abs(rangeAmount)} blocks out of range`;
    };
  };
};

// let eightBlockRange = produceDrivingRange(8)
// expect(eightBlockRange('10th', '20th')).to.equal('2 blocks out of range')

// end - start => 20-10 = 10; blockRange = 8 so 8-10 = 2 out of range

// expect(eightBlockRange('10th', '14th')).to.equal('within range by 4')

// 14 - 10 => 4; blockRange = 8 so 8-4 = 4 within range


function produceTipCalculator(percentage){
  return function(totalCost){
    return totalCost * percentage;
  };
};

function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId
    }
  };
}
