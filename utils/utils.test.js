const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{

  describe('#add', ()=>{
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44).toBeA('number');
    
      // if (res !== 44) {
      //   throw new Error(`Expected 44, but got ${res}.`)
      // }
    });
  })
  
  
  it('should assync add two numbers', (done)=>{
    utils.asyncAdd(3,4, (sum)=>{
      expect(sum).toBe(7).toBeA('number');
      done();
    })
  })
  
  it('should square a number', () => {
    var res = utils.square(3);
  
  
    expect(res).toBe(9).toBeA('number');
  
    // if (res !== 9) {
    //   throw new Error(`Expected 9, but got ${res}.`);
    // }
  });
  it('should async square a number', (done)=>{
    utils.asyncSquare(3, (sq)=>{
      expect(sq).toBe(9).toBeA('number');
      done();
    })
  });

});



// it('should expect some values', ()=>{
//   // expect(12).toNotBe(11);
//   // expect({name:'Art'}).toEqual({name:'Art'});
//   // expect([2,3,4]).toInclude(2);
//   // expect([2,3,4]).toExclude(5);
//   expect({
//     name: "Art",
//     age: 25,
//     location: 'Houston'
//   }).toInclude({
//     age:25
//   })
// })

it('should set firstName and lastName', ()=> {
  var user ={locaton:'Houston', age: 25};
  var res = utils.setName(user, 'Art Tregubchak');
  expect(res).toInclude({
    firstName:'Art',
    lastName:'Tregubchak'
  });
});
