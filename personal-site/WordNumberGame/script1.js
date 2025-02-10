function CreateGrid(container){
const grid = document.createElement('div')

grid.className = 'grid';

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        CreateBox(grid, i, j);
    }
}

}

