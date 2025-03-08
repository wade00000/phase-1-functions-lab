// Code your solution in this file!
function distanceFromHqInBlocks(street){
    return Math.abs(street - 42)

}

function distanceFromHqInFeet(street){
    const distanceInFeet = distanceFromHqInBlocks(street) * 264
    return distanceInFeet
}

function distanceTravelledInFeet(start,destination){
    return Math.abs(start-destination) * 264
}
function calculatesFarePrice(start, destination){
    let distanceTravelled =  Math.abs(start-destination) * 264
    if(distanceTravelled < 400){
        return 0
    }else if(distanceTravelled >= 400 && distanceTravelled <= 2000 ){
        return (distanceTravelled - 400) * 0.02

    }else if(distanceTravelled > 2000 && distanceTravelled <=2500 ){
        return 25
    }else if (distanceTravelled > 2500){
        return "cannot travel that far"
    }

}