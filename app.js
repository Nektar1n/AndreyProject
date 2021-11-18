// const x=document.querySelectorAll('.mainprogram')
const x=document.querySelector('.input_1')
const y=document.querySelector('.input_2')
const z=document.querySelector('.input_3')

const result=document.querySelector('.result')
result.addEventListener("click",(event)=>{
    let b
    let l
    let lAlpha
    let h
    const alpha=1/298.3
    const ebselent=Math.sqrt(1-((6356863*6356863)/(6378245*6378245)))
// ---------вычисляется вспомогательная величина---------------------------
    const d=Math.sqrt(Math.pow(Number(x.value),2)+Math.pow(Number(y.value),2))
    // --------анализируется значение d
    if (d===0){
        b=(3.14*Number(z.value))/(2*Math.abs(Number(z.value)))
        l=0
        h=(Number(z.value)*Math.sin(b)-alpha*Math.sqrt(1-Math.pow(ebselent,2))*(1/2)*(1-Math.cos(2*b)))
        event.target.classList.add('decision')
        document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
    }else if(d>0){
        b=(3.14*Number(z.value))/(2*Math.abs(Number(z.value)))
        lAlpha=Math.asin(Number(y.value)/d)
        h=(Number(z.value)*Math.sin(b)-alpha*Math.sqrt(1-Math.pow(ebselent,2))*(1/2)*(1-Math.cos(2*b)))
        if(Number(x.value)>0&&Number(y.value)>0){
            l=lAlpha
            if(Number(x.value)<0&&Number(y.value)>0){
                l=Math.PI-lAlpha
            }else if(Number(x.value)<0&&Number(y.value)<0){
                l=Math.PI+lAlpha
            }else if(Number(x.value)>0&&Number(y.value)<0){
                l=2*Math.PI-lAlpha
            }
            event.target.classList.add('decision')
            document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
        }
    }else if (z===0){
        b=0
        h=d-alpha
        event.target.classList.add('decision')
        document.querySelector('.decision').innerHTML='B: '+b.toFixed(2)+' L:'+l.toFixed(2)+' H:'+h.toFixed(2)
    }// анализируется значение z

    console.log(Number(x.value)+Number(y.value)+Number(z.value))
})
