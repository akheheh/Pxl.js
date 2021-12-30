const grid = document.querySelectorAll(".pixel-container");

const form = document.forms[0];
const dim  = document.forms[0][0];
const magnitude = document.forms[0][1];
const colors = ["rgb(131, 56, 192)", "rgb(90, 56, 200)", "rgb(200, 56, 80)"]

const boxes = [];
const generate = () => {
    //console.log(dim.value);
    //console.log(magnitude.value);
    let colIndx;
    const pixels = Array.from(Array(dim.value*dim.value).keys());

    grid.forEach(g => {
        pixels.forEach(pixel => {
            
            const px = document.createElement('div');
            Object.assign(px.style, {
                backgroundColor: colors[Math.floor(Math.random()*colors.length) - 1]
            });
            g.appendChild(px);
        });

        Object.assign(g.style, {
            width: `${magnitude.value}rem`,
            height: `${magnitude.value}rem`,
            grid: `repeat(${dim.value}, 1fr)/repeat(${dim.value}, 1fr)`
        });
    })
     
};
form.addEventListener('change', () => {
    generate();
})