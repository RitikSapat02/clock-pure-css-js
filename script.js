const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')


const update = ()=>{
    const now = new Date;
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hourdeg = (h/12)*360;
    const minutedeg = (m/60)*360;
    const seconddeg = (s/60)*360;
    hour.style.transform = `rotate(${hourdeg}deg)`;
    minute.style.transform = `rotate(${minutedeg}deg)`;
    second.style.transform = `rotate(${seconddeg}deg)`;

    setTimeout(update, 1000);
}

update();