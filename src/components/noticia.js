var universidad="UTSJR";

function verificarUni(){
    var validar;
    universidad==="UTSJR" ? validar="si":validar="no";
    return validar;
}

export function Noticia({titulo,cuerpo,autor}){
    return(
        <>
            {console.log(verificarUni())}
            <h1>{titulo}</h1>
            <h3>{cuerpo}</h3>
            <p>{autor} - {universidad}</p>   
           
        </>
    );
}

