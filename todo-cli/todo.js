const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let today = new Date().toISOString().split('T')[0]
    return all.filter(item => item.dueDate < today && !item.completed)
  }

  const dueToday = () => {
    let today = new Date().toISOString().split('T')[0]
    return all.filter(item => item.dueDate === today && !item.completed || item. completed)
  }

  const dueLater = () => {
    let today = new Date().toISOString().split('T')[0]
    return all.filter(item => item.dueDate > today && !item.completed)
  }

  const toDisplayableList = (list) => {
    let output = ''
    for (let i = 0; i < list.length; i++) {
      let item = list[i]
      let check = (item) =>{
        if(item.completed == true){return '[x]'}
        if(item.completed == false){return '[ ]'}
        return '0'
      }
      let duedate = (item) =>{
        let today = new Date().toISOString().split('T')[0]
        if (item.dueDate == today){return ' '}
        else {return item.dueDate}
      }
      let checkbox = check(item)
      let title = item.title
      let dueDate = duedate(item)
      output += `${checkbox} ${title} ${dueDate}\n`
    }
    return output
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};
// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")