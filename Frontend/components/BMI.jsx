export const BMI = () => {
            let result = (weight*10000)/(height*height);
    return(
    <div>
        <span className="text-black font-Poppin text-3xl"> {result} </span>
    </div>
    )
}
