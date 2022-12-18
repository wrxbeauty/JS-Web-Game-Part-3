function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

// newImage('assets/green-character.gif', 100, 250)
// newImage('assets/tree.png', 200, 450)
// newImage('assets/pillar.png', 350, 250)
// newImage('assets/pine-tree.png', 450, 350)
// newImage('assets/crate.png', 150, 350)
// newImage('assets/well.png', 500, 575)

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

// newItem('assets/sword.png', 500, 555)
// newItem('assets/shield.png', 165, 335)
// newItem('assets/staff.png', 600, 250)

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

function move(image){
    image.style.position = 'fixed'

    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

// let thingThatMoveReturns = move(greenCharacter)
// thingThatMoveReturns.to
// thingThatMoveReturns.to(300, 300)

// let greenCharacter = newImage('assets/green-character.gif')
// let thingThatMoveReturns = move(greenCharacter)
// thingThatMoveReturns.to(100, 250)

const inventory = newInventory()

move(inventory).to(0, 0)
move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)
