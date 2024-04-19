#! /usr/bin/env node
import inquirer from "inquirer";

let todos:string[] = [];
let loop = true;

while (loop) {
    const answers:{todo:string,
        addmore: boolean} = await inquirer.prompt([
        {type: "input",
            name:"todo",
            message: "What would you like to do?"
        },
        {
            type:"confirm",
            name:"addmore",
            message: "Would you like to try again?",
            default: true
        }
       
    ])
    const {todo, addmore} = answers;
    console.log(answers);
    
    loop = addmore
    if (todo) {
        todos.push(todo);
    }else{
        console.log('kindly add todo in the list');
    }
}

if (todos.length > 0) {
    console.log('your list is here:');
    
    todos.forEach( function (element,index=0) {
        index < todos.length
        index++;
        console.log(`(${index}). ${element}`);
        
    });
}else{
    console.log('todo list is empty');
    
}
