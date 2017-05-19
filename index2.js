//This keyword review
//Implicit Binding (left of the dot at call time)




//Implicit Binding
var me = {
  name: 'Adrian',
  age: 23;
  sayName: function (){
    console.log(this.name);
  }
};

me.sayName();

var me2 = {
  name: 'sulay',
  age: 23
};

var you = {
  name: 'julio',
  age: 60
}

sayNameMixin(me2);
sayNameMixin(you);
me.sayName();
you.sayName();

//Explicit Binding

var sayName = function (lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ',' + lang2 + ',' + lang3 + ',' + );
}

var stacey = {
  name: 'Stacey',
  age: 60
};

var languages = ['JavaScript', 'Ruby', 'Python'];
//Want to call function in the context of Stacey

sayName.call(stacey, languages[0], languages[1], languages[2]);
sayName.apply(stacey, lamguages);

var newFUnc = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('Invoke it later');
newFunc();

//window Binding
//If no binding is implied, or implied, or explicit, then the context defaults to the windows

//'strict mode'
