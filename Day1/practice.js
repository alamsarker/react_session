// -------------------------
// Destruturing Explore:
// ------------------------

const {
  name: studentName,
  cgpa = 3.9,
  subjects: [
    {
      gpa,
      name
    },
    {
      name: sceondSubject
    }
  ]
} = {
  name: 'Aziz Mohammad',
  age: 11,
  subjects: [
    {
      gpa: 2.5,
      name: 'Bangla'
    },
    {
      gpa: 3.5,
      name: 'English'
    }
  ]
}

console.log(studentName,  gpa, cgpa, sceondSubject)

//------------
// Copy 
//------------

const student = {
  name: 'Hassan',
  age: 23,
  address: {
    name: 'Comilla'
  }
}

const cpy1 = {
  ...student
};
const cpy2 = Object.assign({}, student)
const cpy3 = student;
const cpy4 = JSON.parse(JSON.stringify(student))

student.name = 'Ali'
student.address.name = 'Dhaka'

console.log(cpy1, cpy2, cpy3, cpy4)


//--------------------
// map, filter, reduce
//------------------
const students = [
  {
    name: 'Jahid',
    age: 20
  },
  {
    name: 'Rasel',
    age: 25
  }
];


const moreThan20 = students.filter(({age}) => age > 20)
const names = students.map( ({name}) => name)
const totalAge = students.reduce((acc, {age}) => acc + age, 0)
console.log(moreThan20, names, totalAge)


//----------------------------

const students = [
  {
    id: 1,
    name: 'Rajib',
    subjects: [
      {
        name: 'Bangla',
        gpa: 3.0
      },
      {
        name: 'English',
        gpa: 3.5
      },
      {
        name: 'Math',
        gpa: 4.5
      }
    ]
  },
  {
    id: 2,
    name: 'Ali',
    subjects: [
      {
        name: 'Bangla',
        gpa: 2.0
      },      
      {
        name: 'Math',
        gpa: 2.5
      }
    ]
  },
  {
    id: 3,
    name: 'Faruq',
    subjects: [
      {
        name: 'Bangla',
        gpa: 2.0
      },
      {
        name: 'English',
        gpa: 2.5
      },
      {
        name: 'Math',
        gpa: 2.5
      }
    ]
  },
]

// - arrow function
// - Destructring
// - usages of filter and map

const [
  name
] = students
.filter(({subjects}) => subjects.length === 3)
.map(({name, id}) => `${name} whos Id ${id}`)
;
console.log(name)


//----------------
// Clousure
//-------------

// Admin - panel -> MyProfile, OrderManger
// Customer - Panel -> MyProfile, 


//-------------------
// STEP 1
//-------------------
function header(typeId){
  return {
    menus :  [ typeId == 1 ? 'Admin Menu' :'Customer Menus' ]
  }
}

function panel(){
  return {
    name: 'Rajib - Admin ',
    type: 1
  }  
}

//-------------------
// STEP 2
//-------------------

function header(typeId){
  return {
    menus :  [ typeId == 1 ? 'Admin Menu' :'Customer Menus' ]
  }
}

function panel(){
  
  const typeId = 1;
  const name = 'Rajib - Admin'
  
  return (h) => {
    const menus = h(typeId);
    return {
      ...menus,
      name,
      typeId
    }            
  } 
}

const p = panel()(header)

console.log(p)

//-------------------
// STEP 3: Final
//-------------------

const header = (typeId) => ({  
  menus: [ typeId == 1 ? 'Admin Menu' :'Customer Menus' ]
})

const panel = () => {  
  const typeId = 1;
  const name = 'Rajib - Admin'

  return (h) => {
    const menus = h(typeId);
    return {
      ...menus,
      name,
      typeId
    }            
  } 
}

const p = panel()(header)

console.log(p)