let tableElement = document.createElement('table')

let counter = 1

for(let i = 0; i < 10; i++) {
 let tr = document.createElement('tr')

  for(let j = 0; j < 10; j++) {
    let td = document.createElement('td')
    td.textContent = counter++
    tr.append(td)
  }
  tableElement.append(tr)   
}

document.body.append(tableElement)